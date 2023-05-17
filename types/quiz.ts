export enum QuizType {
	SINGLE_CHOICE,
	MULTIPLE_CHOICE,
	SHORT_ANSWER,
	MIXED_SINGLE,
	MIXED_MULTIPLE,
}

export interface IQuiz {
	question: string
	// type: QuizType
	type: string
	options: string[]
}

export interface IAnswer {
	questionNumber: number
	answer: string[]
	answerIndex: number[]
	// type: QuizType
	type: string
}
