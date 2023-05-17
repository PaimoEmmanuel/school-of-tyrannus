import { Box, Flex, Text } from '@chakra-ui/react'

interface IQuizProgressBarProps {
	quizName: string
	quizLength: number
	activeQuizQuestion: number

	opacity: number
}

const QuizProgressBar: React.FC<IQuizProgressBarProps> = ({ quizName, quizLength, activeQuizQuestion, opacity }) => {
	const progressBarWidth = () => {
		if (activeQuizQuestion > 0) {
			return `${(activeQuizQuestion / quizLength) * 100}%`
		} else {
			return '6px'
		}
	}

	return (
		<Flex w='100%' position='relative' maxW='778px' direction='column' gap='16px' m='48px auto 40px' opacity={opacity}>
			<Box as='span' w='100%' h='5px' background='#E3E5E7' borderRadius='24px'></Box>
			<Box
				as='span'
				position='absolute'
				w={progressBarWidth()}
				h='5px'
				background='#5B85F1'
				borderRadius='24px'
				transition='all 0.3s ease-in-out'
			></Box>

			<Flex justifyContent='space-between'>
				<Text color='#434343' fontSize='14px'>
					{quizName}
				</Text>
				<Text color='#434343' fontSize='14px'>
					{activeQuizQuestion} / {quizLength}
				</Text>
			</Flex>
		</Flex>
	)
}

export default QuizProgressBar
