import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../../schemas/student';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
	constructor(
		@InjectModel(Student.name)
		private mStudent: Model<StudentDocument>
	) {}

	async getOrCreateStudentId(registry: number, name: string) {
		const student = await this.mStudent.findOne({ registry });

		if (student) return student._id;

		const newStudent = await this.mStudent.create({ registry, name });
		return newStudent._id;
	}
}
