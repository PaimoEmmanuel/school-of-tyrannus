import { Flex, Text } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react'
import QuizOption from './quiz-option'

interface ISingleChoiceQuizProps {
	questionNumber: number
	question: string
	options: string[]
	selectedOptionIndex: number[]
	selectOption: (optionNumber: number) => void
}

const SingleChoiceQuiz: React.FC<ISingleChoiceQuizProps> = ({ questionNumber, question, options, selectedOptionIndex, selectOption }) => {
	const [selectedOption, setSelectedOption] = useState(selectedOptionIndex as unknown as number[]) // used for the UI selected state

	const setAnswer = (e: any) => {
		if (selectedOption[0] !== e) {
			setSelectedOption([e])
			selectOption(e)
		}
	}

	return (
		<Flex height='auto' w='100%' maxW='632px' m='0 auto 40px' direction='column' alignItems='center'>
			<Text fontSize='12px' lineHeight='22px' pb='12px' textTransform='uppercase' textAlign='center' color='#535353'>
				Question {questionNumber}
			</Text>

			<Text fontSize='20px' lineHeight='26px' textAlign='center' w='100%' maxW='530px' fontWeight='600' color='#000000'>
				{question}
			</Text>

			<Flex mt='48px' w='100%' wrap='wrap' gap='20px'>
				{options &&
					options.map((option, idx) => (
						<QuizOption
							key={idx}
							optionNumber={idx + 1}
							text={option}
							selectOption={(e) => setAnswer(e)}
							selected={selectedOption[0] == idx + 1}
						/>
					))}
			</Flex>
		</Flex>
	)
}

export default SingleChoiceQuiz
