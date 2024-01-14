import { Box, Img, Text, Flex } from '@chakra-ui/react'
import * as React from 'react'

interface IQuizOptionProps {
	selected: boolean
	optionNumber: number
	text: string
	selectOption: (id: number) => void
}

const numberToLetterMap = {
	1: 'A',
	2: 'B',
	3: 'C',
	4: 'D',
	5: 'E',
	6: 'F',
	7: 'G',
	8: 'H',
	9: 'I',
	10: 'J',
	11: 'K',
	12: 'L',
	13: 'M',
	14: 'N',
	15: 'O',
	16: 'P',
	17: 'Q',
	18: 'R',
	19: 'S',
	20: 'T',
	21: 'U',
	22: 'V',
	23: 'W',
	24: 'X',
	25: 'Y',
	26: 'Z',
}

const QuizOption: React.FC<IQuizOptionProps> = ({ selected, optionNumber, text, selectOption }) => {
	type numberToLetterMapKey = keyof typeof numberToLetterMap

	const numberLetterKey = optionNumber as numberToLetterMapKey

	return (
		<Flex
			height='57px'
			width='306px'
			background={selected ? '#B8F8AD' : '#ffffff'}
			boxShadow='0px 4px 28px rgba(91, 133, 241, 0.14)'
			borderRadius='4px'
			alignItems='center'
			p='14px 20px'
			gap='13px'
			cursor='pointer'
			transition='all 0.3s ease-in-out'
			onClick={() => selectOption(optionNumber)}
		>
			<Box
				as='span'
				w='29px'
				minW='29px'
				h='29px'
				minH='29px'
				borderRadius='50%'
				background={selected ? '#FFFFFF' : '#5B85F1'}
				display='flex'
				justifyContent='center'
				alignItems='center'
				fontSize='14px'
				lineHeight='19px'
				color={selected ? '#44A634' : '#FFFFFF'}
				fontWeight='500'
				transition='all 0.3s ease-in-out'
			>
				{numberToLetterMap[numberLetterKey]}
			</Box>
			<Text>{text}</Text>
		</Flex>
	)
}

export default QuizOption
