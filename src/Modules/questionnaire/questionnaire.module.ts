import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Questionnaire, QuestionnaireSchema } from 'src/Schemas/Questionnaire';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Questionnaire.name, schema: QuestionnaireSchema },
		]),
	],

	controllers: [QuestionnaireController],
	providers: [QuestionnaireService],
})
export class QuestionnaireModule {}
