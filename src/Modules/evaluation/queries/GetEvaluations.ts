import { ObjectId } from '../../../utils/alias';

export function GetEvaluations(questionnaireId: string) {
	return [
		{ $match: { questionnaireId: new ObjectId(questionnaireId) } },
		{
			$lookup: {
				from: 'students',
				localField: 'studentId',
				foreignField: '_id',
				as: 'student',
			},
		},
		{
			$project: {
				studentId: { $first: '$student.registry' },
				name: { $first: '$student.name' },
				evaluation: '$result.points',
				maxEvaluation: '$result.maxPoints',
				duration: '$duration',
				correctAnswers: '$result.hits',
				wrongAnswers: '$result.mistakes',
				date: '$createdAt',
			},
		},
		{ $sort: { date: -1 } },
	] as any;
}
