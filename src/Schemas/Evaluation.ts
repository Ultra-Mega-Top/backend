import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from 'src/Utils/Alias';

@Schema({ collection: 'evaluations', strict: false, timestamps: true })
export class Evaluation {
	@Prop({ type: ObjectId, ref: 'Questionnaire', required: true, index: 1 })
	questionnaireId: ObjectId;

	@Prop({ type: ObjectId, ref: 'Student', required: true, index: 1 })
	studentId: ObjectId;
}

export type EvaluationDocument = HydratedDocument<Evaluation>;
export const EvaluationSchema = SchemaFactory.createForClass(Evaluation);
