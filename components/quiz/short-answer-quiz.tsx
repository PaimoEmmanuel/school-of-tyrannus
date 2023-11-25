import React, { useEffect, useState } from 'react'
import { Text, Flex, Textarea } from '@chakra-ui/react'

interface IShortAnswerQuizProps {
	questionNumber: number
	question: string
	shortAnswer: string
	setShortAnswer: (text: string) => void
}

const ShortAnswerQuiz: React.FC<IShortAnswerQuizProps> = ({ questionNumber, question, shortAnswer, setShortAnswer }) => {
	const [quizText, setQuizText] = useState(shortAnswer as string)

	useEffect(() => {}, [quizText])

	const setAnswer = (text: string) => {
		setQuizText(text)
		setShortAnswer(text.trim())
	}

	return (
		<Flex height='auto' w='100%' maxW='632px' m='0 auto 40px' direction='column' alignItems='center'>
			<Text fontSize='12px' lineHeight='22px' pb='12px' textTransform='uppercase' textAlign='center' color='#535353'>
				Question {questionNumber}
			</Text>

			<Text fontSize='20px' lineHeight='26px' textAlign='center' w='100%' maxW='458px' fontWeight='600' color='#000000'>
				{question}
			</Text>

			<Textarea
				mt='40px'
				p='10px'
				h='136px'
				w='100%'
				maxW='479px'
				boxShadow='0px 4px 28px rgba(91, 133, 241, 0.14)'
				borderRadius='4px'
				border='none'
				background='#ffffff'
				fontSize='16px'
				lineHeight='20px'
				color='#2b2b2b'
				resize='none'
				onChange={(e) => setAnswer(e.target.value)}
				value={quizText}
				placeholder='Type your answer here'
			></Textarea>
			<Text as='span' mt='7px' fontSize='13px' lineHeight='22px' w='100%' maxW='479px' textAlign='start' color='#616161'>
				a maximum of 220 characters
			</Text>
		</Flex>
	)
}

export default ShortAnswerQuiz
