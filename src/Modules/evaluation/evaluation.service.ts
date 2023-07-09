import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';

@Injectable()
export class EvaluationService {
	create(createEvaluationDto: CreateEvaluationDto) {
		return 'This action adds a new evaluation56';
	}

	findAll() {
		return `This action returns all evaluation`;
	}

	findOne(id: number) {
		return `This action returns a #${id} evaluation`;
	}

	update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
		return `This action updates a #${id} evaluation 24`;
	}

	remove(id: number) {
		return `This action removes a #${id} evaluation`;
	}
}
