import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
	Questionnaire,
	QuestionnaireDocument,
} from 'src/Schemas/Questionnaire';
import { Model } from 'mongoose';

@Injectable()
export class QuestionnaireService {
	constructor(
		@InjectModel(Questionnaire.name)
		private mQuestionnaire: Model<QuestionnaireDocument>
	) {}

	create(createQuestionnaireDto: CreateQuestionnaireDto) {
		return this.mQuestionnaire.create(createQuestionnaireDto);
	}

	findAll() {
		return `This action returns all questionnaire`;
	}

	findOne(id: number) {
		return `This action returns a #${id} questionnaire`;
	}

	update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto) {
		return `This action updates a #${id} questionnaire`;
	}

	remove(id: number) {
		return `This action removes a #${id} questionnaire`;
	}
}
