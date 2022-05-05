import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import LessonSideBarItem from "../molecules/lesson-sidebar-item";

interface ILessonSideBar {
  lessons: { title: string; contents: { title: string }[] }[];
  currentLesson: number[];
  goToLesson: (lesson: number[]) => void;
}
const LessonSideBar: React.FC<ILessonSideBar> = ({
  lessons,
  currentLesson,
  goToLesson,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <Box
      bgColor="white"
      pos={open ? "sticky" : "initial"}
      top="0"
      align-self="flex-start"
      height="auto"
      overflow={open ? "scroll" : "hidden"}
      p={open ? "18px 34px 48px 60px" : "0"}
      borderRadius="0px 12px 0px 0px"
      mt="14px"
      maxW={open ? "382px" : "0"}
      minW={open ? "382px" : "0"}
    >
      <Flex justifyContent="space-between" alignItems="center" pb="60px">
        <Link href="/" passHref>
          <ChakraLink
            fontWeight="600"
            color="text.deepBlue"
            css={{ svg: { marginRight: "18px" } }}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
            w="max-content"
          >
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 13.9158L1 7.41577L7.5 0.915771"
                stroke="#0B0966"
                strokeWidth="1.36842"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </ChakraLink>
        </Link>
        <Flex
          justifyContent="center"
          alignItems="center"
          as="button"
          h="46px"
          w="46px"
          pos={open ? "relative" : "absolute"}
          zIndex="10"
          left={open ? "" : "2rem"}
          boxShadow="0px 1px 13px #D4E0EB"
          border="1px solid #D9ECFF"
          borderRadius="50%"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 13H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
      </Flex>

      <Text color="text.black100" fontWeight="600">
        Course Contents
      </Text>
      <Box mt="26px">
        {lessons.map((lesson, index) => (
          <LessonSideBarItem
            key={index}
            parentIndex={index}
            contents={lesson}
            currentLesson={currentLesson}
            goToLesson={goToLesson}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LessonSideBar;
