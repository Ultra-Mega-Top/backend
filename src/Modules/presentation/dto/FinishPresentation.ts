import { Type } from 'class-transformer';
import {
	ArrayNotEmpty,
	IsDefined,
	IsHash,
	IsNotEmpty,
	IsNumber,
	IsString,
	IsUUID,
	ValidateNested,
} from 'class-validator';

export class ResponseDto {
	@IsNotEmpty()
	@IsUUID()
	questionId: string;

	@IsNotEmpty()
	response: any;

	@IsNotEmpty()
	@IsString()
	type: string;
}

export class FinishPresentationDto {
	@IsHash('sha256')
	hash: string;

	@IsDefined()
	@ArrayNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => ResponseDto)
	responses: ResponseDto[];

	@IsNumber()
	@IsNotEmpty()
	timestamp: number;
}
