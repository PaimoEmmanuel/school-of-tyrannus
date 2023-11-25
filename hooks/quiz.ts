import { useEffect, useState } from 'react'
import { IAnswer, IQuiz } from '../types/quiz'

const useQuiz = (quizId?: string) => {
	// QUESTION: Should the quiz state be saved even on reload?
	const [activeQuizQuestion, setActiveQuizQuestion] = useState(1)
	const [nextButtonDisabled, setNextButtonDisabled] = useState(true)

	const [answers, setAnswers] = useState([] as IAnswer[])

	useEffect(() => {
		console.log(answers)

		setNextButtonDisabledStatus()
	})

	const quizzes: IQuiz[] = [
		{
			question: 'Paul described Christ as the only foundation which he laid, which one of these stones begins christ?',
			type: 'single-choice',
			options: ['A Stone', 'A Sure Foundation', 'A Precious Corner Stone', 'A Tried Stone'],
		},
		{
			question: 'Describe how been born again remains the hallmark for ascension into heavenly things',
			type: 'short-answer',
			options: null as unknown as string[],
		},
		{
			question: 'Select all that apply',
			type: 'multiple-choice',
			options: [
				'Paul was an Apostle',
				'Paul was a teacher',
				'Paul was a banker',
				'Paul was Nigerian',
				'Paul was a prophet',
				'Paul liked boxing',
			],
		},
		{
			question: 'Paul, an apostle of Jesus Christ by the will of God...',
			type: 'single-choice',
			options: ['Romans', 'Colossians', 'Galatians', 'Titus'],
		},
	]

	/**
	 * @private
	 * @param providedAnswer
	 */
	const updateAnswers = (providedAnswer: IAnswer) => {
		let questionExists = answers.some((obj) => obj.questionNumber == providedAnswer.questionNumber)

		if (questionExists) {
			setAnswers((answers) => {
				const update_obj = answers.findIndex((obj) => obj.questionNumber == providedAnswer.questionNumber)
				answers[update_obj].answer = providedAnswer.answer
				answers[update_obj].answerIndex = providedAnswer.answerIndex
				return [...answers]
			})
		} else {
			setAnswers((answers) => [...answers].concat(providedAnswer))
		}
	}

	const setSingleChoiceAnswer = (quizNumber: number, selectedOptionNumber: number) => {
		let answer = {
			questionNumber: quizNumber - 1,
			answer: [quizzes[quizNumber - 1].options[selectedOptionNumber - 1]],
			answerIndex: [selectedOptionNumber - 1],
			type: quizzes[quizNumber - 1].type,
		}
		updateAnswers(answer)
	}

	const setMultipleChoiceAnswer = (quizNumber: number, selectedOptionsNumbers: number[]) => {
		let options = [] as string[]
		let optionsIndex = [] as number[]
		selectedOptionsNumbers.forEach((selectedOption) => {
			options.push(quizzes[quizNumber - 1].options[selectedOption - 1])
			optionsIndex.push(selectedOption - 1)
		})

		let answer = {
			questionNumber: quizNumber - 1,
			answer: options,
			answerIndex: optionsIndex,
			type: quizzes[quizNumber - 1].type,
		}

		updateAnswers(answer)
	}

	const setShortAnswer = (quizNumber: number, shortAnswer: string) => {
		let answer = {
			questionNumber: quizNumber - 1,
			answer: [shortAnswer],
			answerIndex: [],
			type: quizzes[quizNumber - 1].type,
		}

		updateAnswers(answer)
	}

	/**
	 * @private
	 */
	const setNextButtonDisabledStatus = () => {
		const quizType = quizzes[activeQuizQuestion - 1].type
		const answer = answers[activeQuizQuestion - 1] ? answers[activeQuizQuestion - 1].answer : []

		switch (quizType) {
			case 'single-choice':
				setNextButtonDisabled(answer.length == 0)
				break
			case 'multiple-choice':
				setNextButtonDisabled(answer.length == 0)
				break
			case 'short-answer':
				setNextButtonDisabled(answer.length == 0 || answer[0] == '')
				break
			default:
				setNextButtonDisabled(true)
				break
		}
	}

	// set active question
	const goToPreviousQuestion = () => {
		if (activeQuizQuestion > 1) {
			setActiveQuizQuestion((activeQuizQuestion) => activeQuizQuestion - 1)
		}
	}

	const goToNextQuestion = () => {
		if (activeQuizQuestion < quizzes.length) {
			setActiveQuizQuestion((activeQuizQuestion) => activeQuizQuestion + 1)
		}
	}

	const submitQuiz = () => {
		console.log('you wanna submit')
	}

	return {
		quizzes,
		activeQuizQuestion,
		nextButtonDisabled,
		answers,

		setSingleChoiceAnswer,
		setMultipleChoiceAnswer,
		setShortAnswer,
		goToPreviousQuestion,
		goToNextQuestion,
		submitQuiz,
	}
}

export default useQuiz
