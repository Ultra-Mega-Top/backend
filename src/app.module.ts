import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';
import { PresentationModule } from './modules/presentation/presentation.module';
import { StudentModule } from './modules/student/student.module';

@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGO_URI),
		QuestionnaireModule,
		EvaluationModule,
		PresentationModule,
		StudentModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
