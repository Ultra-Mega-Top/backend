import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from '../utils/alias';

export class iResponse {
	questionId: string;

	response: any;

	type: string;
}

@Schema({ collection: 'evaluations', timestamps: true })
export class Evaluation {
	@Prop({ type: ObjectId, ref: 'Questionnaire', required: true, index: 1 })
	questionnaireId: ObjectId;

	@Prop({ type: ObjectId, ref: 'Student', required: true, index: 1 })
	studentId: ObjectId;

	@Prop()
	hash: string;

	@Prop({ type: Array, default: () => [] })
	responses: iResponse[];

	@Prop()
	timestamp: number;

	@Prop()
	duration: number;

	@Prop({ type: Object, default: () => ({}) })
	result: any;
}

export type EvaluationDocument = HydratedDocument<Evaluation>;
export const EvaluationSchema = SchemaFactory.createForClass(Evaluation);
