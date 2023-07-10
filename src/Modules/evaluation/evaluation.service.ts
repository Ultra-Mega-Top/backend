import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Evaluation, EvaluationDocument } from '../../schemas/evaluation';
import { Model } from 'mongoose';
import { GetEvaluations } from './queries/GetEvaluations';

@Injectable()
export class EvaluationService {
	constructor(
		@InjectModel(Evaluation.name)
		private mEvaluation: Model<EvaluationDocument>
	) {}

	findAll(questionnaireId: string) {
		const query = GetEvaluations(questionnaireId);
		return this.mEvaluation.aggregate(query);
	}

	findOne(id: number) {
		return `This action returns a #${id} evaluation`;
	}

	remove(id: number) {
		return `This action removes a #${id} evaluation`;
	}
}
