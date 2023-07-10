import { Module } from '@nestjs/common';
import { PresentationService } from './presentation.service';
import { PresentationController } from './presentation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
	Questionnaire,
	QuestionnaireSchema,
} from '../../schemas/questionnaire';
import { StudentModule } from '../student/student.module';
import { Evaluation, EvaluationSchema } from '../../schemas/evaluation';

@Module({
	imports: [
		StudentModule,
		MongooseModule.forFeature([
			{ name: Questionnaire.name, schema: QuestionnaireSchema },
			{ name: Evaluation.name, schema: EvaluationSchema },
		]),
	],
	controllers: [PresentationController],
	providers: [PresentationService],
})
export class PresentationModule {}
