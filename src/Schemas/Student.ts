import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'students', timestamps: true })
export class Student {
	@Prop({ required: true })
	registry: number;

	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	age: number;
}

export type StudentDocument = HydratedDocument<Student>;
export const StudentSchema = SchemaFactory.createForClass(Student);
