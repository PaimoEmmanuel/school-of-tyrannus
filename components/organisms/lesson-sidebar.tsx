import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { ICourseLessons } from "../../types/course";
import LessonSideBarItem from "../molecules/lesson-sidebar-item";

interface ILessonSideBar {
  lessons: ICourseLessons["lessons"];
  currentLesson: number[];
  onTakeTest: () => void;
  goToLesson: (lesson: [number, number]) => void;
}
const LessonSideBar: React.FC<ILessonSideBar> = ({
  lessons,
  currentLesson,
  onTakeTest,
  goToLesson,
}) => {
  const [isAtLeastTabSize] = useMediaQuery("(min-width: 992px)");
  const [open, setOpen] = useState(isAtLeastTabSize ? true : false);
  return (
    <Box
      bgColor="white"
      pos={{
        base: open ? "absolute" : "static",
        lg: open ? "sticky" : "static",
      }}
      top="0"
      zIndex="9"
      align-self="flex-start"
      height="100%"
      overflow={open ? "scroll" : "hidden"}
      p={{
        base: open ? "18px 24px" : "0",
        lg: open ? "18px 34px 48px 60px" : "0",
      }}
      borderRadius="0px 12px 0px 0px"
      mt="14px"
      maxW={{ base: open ? "280px" : "0", lg: open ? "382px" : "0" }}
      minW={{ base: open ? "280px" : "0", lg: open ? "382px" : "0" }}
      // transition="all .2s"
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
          display="flex"
          h={{ base: "36px", sm: "46px" }}
          w={{ base: "36px", sm: "46px" }}
          pos={open ? "relative" : "absolute"}
          zIndex="10"
          left={open ? "" : "2rem"}
          boxShadow="0px 1px 13px #D4E0EB"
          border="1px solid #D9ECFF"
          borderRadius="50%"
          onClick={() => {
            setOpen(!open);
          }}
          __css={{ svg: { width: { base: "14px", sm: "20px" } } }}
        >
          {!open ? (
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
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.63623 14.364L14.3642 1.63609"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.63623 1.63599L14.3642 14.3639"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Flex>
      </Flex>

      <Text color="text.black100" fontWeight="600">
        Course Contents
      </Text>
      <Box mt="26px">
        {lessons.map((lesson, index) => (
          <LessonSideBarItem
            key={index}
            onTakeTest={onTakeTest}
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
