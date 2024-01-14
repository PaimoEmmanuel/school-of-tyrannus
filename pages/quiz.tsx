import type { NextPage } from 'next'
import Head from 'next/head'
import NavigationBar from '../components/organisms/navigation-bar'
import { Box, Flex, Image } from '@chakra-ui/react'
import QuizBox from '../components/quiz/quiz-box'
import QuizStarter from '../components/quiz/quiz-starter'
import { useState } from 'react'

const QuizPage: NextPage = () => {
	const [isQuizStarted, setIsQuizStarted] = useState(false)

	return (
		<div>
			<Head>
				<title>Quiz - School of Tyrannus</title>
			</Head>
			<div>
				<NavigationBar />
				<Box>
					<Flex justifyContent='center'>
						{/* <Box
							w='34%'
							h='100vh'
							maxW='485px'
							minW='200px'
							bg='url(/assets/images/meek-Jesus.jpeg)'
							backgroundSize='cover'
						></Box> */}
						{!isQuizStarted && <QuizStarter startQuiz={() => setIsQuizStarted(true)} />}
						{isQuizStarted && <QuizBox />}
						{!isQuizStarted && (
							<Image
								position='absolute'
								bottom='0'
								width='100%'
								zIndex='-1'
								src='/assets/images/quiz-starter-svg.svg'
								alt=''
							/>
						)}
					</Flex>
				</Box>
			</div>
		</div>
	)
}

export default QuizPage
