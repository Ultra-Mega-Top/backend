import { ObjectId } from '../../../utils/alias';

export function GetQuestionsByEvaluationId(evaluationId: string) {
	return [
		{ $match: { _id: new ObjectId(evaluationId) } },
		{
			$lookup: {
				from: 'questionnaires',
				let: { qId: '$questionnaireId' },
				pipeline: [
					{ $match: { $expr: { $eq: ['$_id', '$$qId'] } } },
					{ $unwind: { path: '$questions' } },
					{ $project: { 'questions.correctId': 0 } },
					{ $project: { _id: 0, question: '$questions' } },
				],
				as: 'questions',
			},
		},
		{ $unwind: { path: '$questions' } },
		{ $project: { _id: 0, question: '$questions.question' } },
	];
}
