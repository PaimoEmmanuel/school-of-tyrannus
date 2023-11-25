import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useQuiz } from '../../hooks'
import MultipleChoiceQuiz from './multiple-choice-quiz'
import QuizProgressBar from './quiz-progress-bar'
import QuizStarter from './quiz-starter'
import ShortAnswerQuiz from './short-answer-quiz'
import SingleChoiceQuiz from './single-choice-quiz'

const QuizBox: React.FC = () => {
	const {
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
	} = useQuiz()

	useEffect(() => {}, [setSingleChoiceAnswer, setMultipleChoiceAnswer, setShortAnswer])

	return (
		<Flex direction='column' w='100%' maxW='890px' p='0 56px'>
			<QuizProgressBar
				quizName={'The Man Christ Jesus'}
				quizLength={quizzes.length}
				activeQuizQuestion={activeQuizQuestion}
				opacity={1}
			/>

			<Box>
				{quizzes &&
					quizzes.map((quiz, idx) => {
						if (quiz.type == 'single-choice' && activeQuizQuestion == idx + 1) {
							return (
								<SingleChoiceQuiz
									key={`single-choice-${idx}`}
									questionNumber={idx + 1}
									question={quiz.question}
									options={quiz.options}
									selectedOptionIndex={
										answers[activeQuizQuestion - 1]
											? answers[activeQuizQuestion - 1].answerIndex.map((num: number) => num + 1)
											: []
									}
									selectOption={(chosenOption) => setSingleChoiceAnswer(idx + 1, chosenOption)}
								/>
							)
						}

						if (quiz.type == 'multiple-choice' && activeQuizQuestion == idx + 1) {
							return (
								<MultipleChoiceQuiz
									key={`multiple-choice-${idx}`}
									questionNumber={idx + 1}
									question={quiz.question}
									options={quiz.options}
									selectedOptionsIndexes={
										answers[activeQuizQuestion - 1]
											? answers[activeQuizQuestion - 1].answerIndex.map((num: number) => num + 1)
											: []
									}
									selectOptions={(chosenOptions) => setMultipleChoiceAnswer(idx + 1, chosenOptions)}
								/>
							)
						}

						if (quiz.type == 'short-answer' && activeQuizQuestion == idx + 1) {
							return (
								<ShortAnswerQuiz
									key={`short-answer-${idx}`}
									questionNumber={idx + 1}
									question={quiz.question}
									shortAnswer={answers[activeQuizQuestion - 1] ? answers[activeQuizQuestion - 1].answer[0] : ''}
									setShortAnswer={(answerText) => setShortAnswer(idx + 1, answerText)}
								/>
							)
						}
					})}
			</Box>

			<Flex w='100%' justifyContent='space-between' mt='110px'>
				<Button
					background='transparent'
					border='1px solid #5B85F1'
					p='14px 60px'
					w='150px'
					h='49px'
					boxShadow=' 4px 7px 12px rgba(238, 153, 56, 0.2)'
					borderRadius='4px'
					fontWeight='500'
					fontSize='14px'
					lineHeight='21px'
					letterSpacing='-0.03em'
					textAlign='center'
					color='#5B85F1'
					outline='none'
					display={activeQuizQuestion > 1 ? 'flex' : 'none'}
					onClick={goToPreviousQuestion}
				>
					Back
				</Button>

				{quizzes && activeQuizQuestion != quizzes.length && (
					<Button
						background='#5B85F1'
						border='1px solid #5B85F1'
						p='14px 60px'
						w='150px'
						h='49px'
						boxShadow=' 4px 7px 12px rgba(238, 153, 56, 0.2)'
						borderRadius='4px'
						fontWeight='500'
						fontSize='14px'
						lineHeight='21px'
						letterSpacing='-0.03em'
						textAlign='center'
						color='#ffffff'
						outline='none'
						ml='auto'
						onClick={goToNextQuestion}
						disabled={nextButtonDisabled}
						_hover={{}}
						_focus={{}}
					>
						Next
					</Button>
				)}

				{quizzes && activeQuizQuestion == quizzes.length && (
					<Button
						background='#5B85F1'
						border='1px solid #5B85F1'
						p='14px 60px'
						h='49px'
						boxShadow=' 4px 7px 12px rgba(238, 153, 56, 0.2)'
						borderRadius='4px'
						fontWeight='500'
						fontSize='14px'
						lineHeight='21px'
						letterSpacing='-0.03em'
						textAlign='center'
						color='#ffffff'
						outline='none'
						onClick={submitQuiz}
						disabled={nextButtonDisabled}
					>
						Submit
					</Button>
				)}
			</Flex>
		</Flex>
	)
}

export default QuizBox
