import {
	IsNotEmpty,
	IsNumber,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';

export class StartPresentationDto {
	@IsNotEmpty()
	@IsString()
	questionnaireId: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	name: string;

	@IsNumber()
	@IsNotEmpty()
	registry: number;
}
