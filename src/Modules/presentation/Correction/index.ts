import { StaticSelective } from './questions/StaticSelective';

export interface iResponded {
	questionId: string;
	response: any;
	type: string;
}

export interface FixerProtocol {
	type: string;

	getResult: (question: any, responded: iResponded | null) => boolean;
}

export const questionsTypes: FixerProtocol[] = [new StaticSelective()];

export function getQuestionFixer(fType: string) {
	return questionsTypes.find(({ type }) => type === fType);
}
