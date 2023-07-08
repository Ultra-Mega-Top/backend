import { Type } from 'class-transformer';
import {
	ArrayNotEmpty,
	IsDefined,
	IsNotEmpty,
	IsNumberString,
	IsString,
	Max,
	Min,
	MinLength,
	ValidateNested,
} from 'class-validator';

export class QuestionDto {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsNotEmpty()
	type: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	title: string;
}

export class CreateQuestionnaireDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	title: string;

	@IsNumberString()
	@Max(100)
	@Min(0)
	maxEvaluation: number;

	@IsDefined()
	@ArrayNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => QuestionDto)
	questions: QuestionDto[];
}
