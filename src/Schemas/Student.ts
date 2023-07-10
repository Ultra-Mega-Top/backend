import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'students', timestamps: true })
export class Student {
	@Prop({ required: true, index: 1 })
	registry: number;

	@Prop({ required: true })
	name: string;
}

export type StudentDocument = HydratedDocument<Student>;
export const StudentSchema = SchemaFactory.createForClass(Student);
