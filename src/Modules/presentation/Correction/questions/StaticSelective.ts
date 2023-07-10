import { iResponded } from '..';
import { iQuestion } from '../../../../schemas/questionnaire';

export interface iStaticSelective extends iQuestion {
	correctId: string;

	options: {
		id: string;
		label: string;
	}[];
}

export class StaticSelective {
	type = 'static-selective';

	getResult(question: iStaticSelective, responded: iResponded) {
		return question.correctId === responded.response;
	}
}
