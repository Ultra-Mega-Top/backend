import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Evaluation, EvaluationSchema } from '../../schemas/evaluation';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Evaluation.name, schema: EvaluationSchema },
		]),
	],
	controllers: [EvaluationController],
	providers: [EvaluationService],
})
export class EvaluationModule {}
