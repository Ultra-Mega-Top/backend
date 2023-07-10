export class SimpleRule {
	result = {
		rule: 'simple',
		hits: [],
		mistakes: [],
		points: 0,
		maxPoints: 0,
		totalQuestions: 0,
		pointsPerQuestion: 0,
	};

	constructor(maxPoints: number, totalQuestions: number) {
		this.result.maxPoints = maxPoints;
		this.result.totalQuestions = totalQuestions;
		this.result.pointsPerQuestion = maxPoints / totalQuestions;
	}

	hit(index: number, questionId: string) {
		this.result.hits.push([index + 1, questionId]);
		this.result.points += this.result.pointsPerQuestion;
	}

	mistake(index: number, questionId: string) {
		this.result.mistakes.push([index + 1, questionId]);
	}
}
