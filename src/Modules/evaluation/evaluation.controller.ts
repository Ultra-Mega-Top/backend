import { Controller, Get, Param, Delete } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';

@Controller('evaluation')
export class EvaluationController {
	constructor(private readonly evaluationService: EvaluationService) {}

	@Get('all/:questionnaireId')
	findAll(@Param('questionnaireId') questionnaireId: string) {
		return this.evaluationService.findAll(questionnaireId);
	}

	@Get('one/:id')
	findOne(@Param('id') id: string) {
		return this.evaluationService.findOne(+id);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.evaluationService.remove(+id);
	}
}
