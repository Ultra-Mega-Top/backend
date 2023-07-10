export class SimpleRule {
	protected pointsPerQuestion = 0;

	result = {
		rule: 'simple',
		hits: [],
		mistakes: [],
		points: 0,
		maxPoints: 0,
		totalQuestions: 0,
	};

	constructor(maxPoints: number, totalQuestions: number) {
		this.result.maxPoints = maxPoints;
		this.result.totalQuestions = totalQuestions;
		this.pointsPerQuestion = maxPoints / totalQuestions;
	}

	hit(index: number, questionId: string) {
		this.result.hits.push([index + 1, questionId]);
		this.result.points += this.pointsPerQuestion;
	}

	mistake(index: number, questionId: string) {
		this.result.mistakes.push([index + 1, questionId]);
	}
}
