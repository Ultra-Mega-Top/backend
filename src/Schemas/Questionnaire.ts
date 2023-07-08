import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export interface iQuestion {
	id: string;
	type: string;
	title: string;

	[k: string]: any;
}

@Schema({ collection: 'questionnaires', timestamps: true })
export class Questionnaire {
	@Prop()
	title: string;

	@Prop()
	maxEvaluation: number;

	@Prop({ type: Array })
	questions: iQuestion[];
}

export type QuestionnaireDocument = HydratedDocument<Questionnaire>;
export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);
