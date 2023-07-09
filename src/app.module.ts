import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';

@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGO_URI),
		QuestionnaireModule,
		EvaluationModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
