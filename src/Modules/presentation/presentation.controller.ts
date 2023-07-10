import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PresentationService } from './presentation.service';
import { StartPresentationDto } from './dto/StartPresentation';
import { FinishPresentationDto } from './dto/FinishPresentation';

@Controller('presentation')
export class PresentationController {
	constructor(private readonly presentationService: PresentationService) {}

	@Get('settings/:questionnaireId')
	findPresentationSettings(
		@Param('questionnaireId') questionnaireId: string
	) {
		return this.presentationService.findPresentationSettings(
			questionnaireId
		);
	}

	@Get('questions/:evaluationId')
	getQuestionsByEvaluationId(@Param('evaluationId') evaluationId: string) {
		return this.presentationService.getQuestionsByEvaluationId(
			evaluationId
		);
	}

	@Post('try-start')
	tryStartPresentation(@Body() dto: StartPresentationDto) {
		return this.presentationService.startPresentation(dto);
	}

	@Post('finish/:evaluationId')
	handleFinishPresentation(
		@Param('evaluationId') evaluationId: string,
		@Body() dto: FinishPresentationDto
	) {
		return this.presentationService.finishPresentation(evaluationId, dto);
	}
}
