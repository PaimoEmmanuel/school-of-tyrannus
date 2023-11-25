import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useQuiz } from '../../hooks'
import QuizProgressBar from './quiz-progress-bar'

interface IQuizStarterProps {
	startQuiz: () => void
}

const QuizStarter: React.FC<IQuizStarterProps> = ({ startQuiz }) => {
	const { quizzes } = useQuiz()

	return (
		<Flex direction='column' w='100%' maxW='890px' p='0 56px' alignItems='center'>
			<QuizProgressBar quizName={'The Man Christ Jesus'} quizLength={quizzes.length} activeQuizQuestion={0} opacity={0.3} />

			<Text mt='16px' w='100%' maxW='401px' textAlign='center' fontSize='28px' lineHeight='32px' fontWeight='600'>
				Welcome to The Man Christ Lesson 1 Quiz
			</Text>

			<Text mt='24px' w='100%' maxW='421px' textAlign='center' fontSize='16px' lineHeight='22px' fontWeight='400' color='#808080'>
				This is a {quizzes.length} question quiz, you’ll have a combination of open-ended, multiple choice and ‘fill in the gap’
				questions for this lesson’s quiz.
			</Text>

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
				m='48px auto'
				onClick={() => startQuiz()}
				_hover={{}}
				_focus={{}}
			>
				Continue
			</Button>
		</Flex>
	)
}

export default QuizStarter
