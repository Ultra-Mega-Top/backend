import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
	Questionnaire,
	QuestionnaireDocument,
} from '../../schemas/questionnaire';
import { Model } from 'mongoose';
import { StartPresentationDto } from './dto/StartPresentation';
import { StudentService } from '../student/student.service';
import { Evaluation, EvaluationDocument } from '../../schemas/evaluation';
import { ObjectId } from '../../utils/alias';
import { GetQuestionsByEvaluationId } from './queries/GetQuestionsByEvaluationId';
import { FinishPresentationDto } from './dto/FinishPresentation';
import { getQuestionFixer } from './Correction';
import { SimpleRule } from './Correction/Rules/Simple';

@Injectable()
export class PresentationService {
	constructor(
		private studentService: StudentService,

		@InjectModel(Questionnaire.name)
		private mQuestionnaire: Model<QuestionnaireDocument>,

		@InjectModel(Evaluation.name)
		private mEvaluation: Model<EvaluationDocument>
	) {}

	findPresentationSettings(questionnaireId: string) {
		return this.mQuestionnaire.findOne(
			{ _id: questionnaireId },
			{ questions: 0 }
		);
	}

	async startPresentation(dto: StartPresentationDto) {
		const questionnaireId = new ObjectId(dto.questionnaireId);

		const studentId = await this.studentService.getOrCreateStudentId(
			dto.registry,
			dto.name
		);

		const hasStarted = await this.mEvaluation.exists({
			studentId,
			questionnaireId,
		});

		if (hasStarted) {
			throw new BadRequestException(
				'Já temos uma avaliação para este aluno!'
			);
		}

		const evaluation = await this.mEvaluation.create({
			studentId,
			questionnaireId,
		});

		return evaluation._id;
	}

	async getQuestionsByEvaluationId(evaluationId: string) {
		const query = GetQuestionsByEvaluationId(evaluationId);

		const questions = await this.mEvaluation.aggregate(query);

		return questions.map(({ question }) => question);
	}

	async finishPresentation(evaluationId: string, dto: FinishPresentationDto) {
		const evaluationDoc = await this.mEvaluation.findOne({
			_id: evaluationId,
		});

		const questionnaireDoc = await this.mQuestionnaire.findOne({
			_id: evaluationDoc.questionnaireId,
		});

		// @ts-ignore
		const startTime = new Date(evaluationDoc.createdAt).getTime();

		const duration = dto.timestamp - startTime;
		const result = this.calculeResult(questionnaireDoc, dto);

		await this.mEvaluation.updateOne(
			{ _id: evaluationDoc._id },
			{
				$set: {
					...dto,
					duration,
					result,
				},
			}
		);

		return result;
	}

	calculeResult(
		questionnaireDoc: QuestionnaireDocument,
		dto: FinishPresentationDto
	) {
		const { maxEvaluation } = questionnaireDoc;
		const totalQuestions = questionnaireDoc.questions.length;

		const ruler = questionnaireDoc.questions.reduce(
			(acc, question, index) => {
				const responded = dto.responses.find(
					({ questionId }) => questionId === question.id
				);

				const fixer = getQuestionFixer(question.type);
				const isHit = fixer.getResult(question, responded);

				if (isHit) acc.hit(index + 1, question.id);
				else acc.mistake(index + 1, question.id);

				return acc;
			},
			new SimpleRule(+maxEvaluation, totalQuestions)
		);

		return ruler.result;
	}
}
