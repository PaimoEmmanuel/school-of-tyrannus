import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from "next/link";

import React from 'react'

export interface ICourseInactiveCard {
    id: number;
    title: number;
    lessonCount: number;
    contentCount: number;
}

const CourseInactiveCard: React.FC<ICourseInactiveCard> = () => {
    return (
        <Box filter="drop-shadow(2px 7px 18px rgba(67, 108, 212, 0.13))"
            bg="white"
            mt="33px"
            mb="33px"
            maxW="260px"
            h="311px">

            <Box h="117px"
                borderRadius="4px 4px 0px 0px"
                background="url(/assets/images/course-card-img.png)">
            </Box>
            <Box p="30px 30px 0 30px">
                <Text fontSize="14px" lineHeight="21px" color="text.gold">
                    {/* {lessonCount} lessons . {contentCount} videos */}
                    8 lessons . 4 videos
                </Text>
                <Text
                    fontSize="18px"
                    lineHeight="23px"
                    pb="30px"
                    borderBottom="1px solid #EDEDED">
                    {/* {title} */}
                    Principles of faith -
                    asking and receiving
                </Text>
                <Link href={`http://www.googlw.com`} passHref>
                    <ChakraLink
                        color="#5B85F1"
                        fontSize="14px"
                        lineHeight="21px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mt="12px"
                        mb="18px">
                        view course
                        <svg
                            width="6"
                            height="8"
                            viewBox="0 0 6 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.769125 0.67H2.37913L5.76713 3.876L2.37913 7.096H0.769125L4.15713 3.876L0.769125 0.67Z"
                                fill="#436CD5"
                            />
                        </svg>
                    </ChakraLink>
                </Link>
            </Box>
        </Box>
    )
}
export default CourseInactiveCard