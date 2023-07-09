import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import {
	Questionnaire,
	QuestionnaireDocument,
} from '../../schemas/questionnaire';

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
		return this.mQuestionnaire.find({}, { title: 1 });
	}

	findOne(_id: string) {
		return this.mQuestionnaire.findOne({ _id });
	}

	update(_id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
		return this.mQuestionnaire.updateOne(
			{ _id },
			{ $set: updateQuestionnaireDto }
		);
	}

	remove(_id: string) {
		return this.mQuestionnaire.deleteOne({ _id });
	}
}
