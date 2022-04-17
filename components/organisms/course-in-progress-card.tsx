import {
    Box,
    Img,
    Link as ChakraLink,
    Progress,
    Text
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from 'react';

export interface ICourseInProgressCard {
    id?: number;
    title?: string;
    percentageValue?: number;
    completed?: boolean
    lessonCount?: number;
    contentCount?: number;
};

const CourseInProgressCard: React.FC<ICourseInProgressCard> = ({
    id,
    title,
    percentageValue,
    completed,
    lessonCount,
    contentCount
}) => {
    return (
        <Box
            bg="white"
            borderRadius="4px"
            overflow="hidden"
            filter="drop-shadow(2px 7px 18px rgba(67, 108, 212, 0.13))"
            h="100%"
            maxW='260px'
            mt="33px"
            mb="33px"

        >

            <Img
                height="114px"
                w="100%"
                objectFit="cover"
                src="/assets/images/course-card-img.png"
            />
            {/* <Progress colorScheme='orange' size='md'value={percentageValue}></Progress> */}
            {/* <Text>{percentageValue} Completed</Text> */}

            <Box>
                <Text p="30px 30px 0 30px">
                    <Progress
                        h="10px"
                        borderRadius="14px"
                        border="1px solid rgba(255, 255, 255, 0.7)"
                        boxSizing="border-box"
                        colorScheme='orange'
                        size='md'
                        value={30} />
                    {/* {percentageValue} Completed */}
                    30% Completed
                </Text>

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
                <Link href={`www.google.com`} passHref>
                    <ChakraLink
                        color="#5B85F1"
                        fontSize="14px"
                        lineHeight="21px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mt="12px"
                        mb="18px"
                    >
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
    );
}
export default CourseInProgressCard