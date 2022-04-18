import { Box, Text } from "@chakra-ui/react";
import LessonSideBarItem from "../molecules/lesson-sidebar-item";

interface ILessonSideBar {
  lessons: { title: string; contents: {title: string}[] }[];
  currentLesson: number[]
  setCurrentLesson:  React.Dispatch<React.SetStateAction<number[]>>
}
const LessonSideBar: React.FC<ILessonSideBar> = ({ lessons, currentLesson, setCurrentLesson }) => {
  return (
    <Box
      bgColor="white"
      pos="sticky"
      top="0"
      align-self="flex-start"
      height="auto"
      overflow="scroll"
      p="48px 34px 48px 60px"
      borderRadius="0px 12px 0px 0px"
      maxW="382px"
      minW="382px"
    >
      <Text color="text.black100" fontWeight="600" fontSize="24px">
        Course Contents
      </Text>
      <Box mt="26px">
        {lessons.map((lesson, index) => (
          <LessonSideBarItem key={index} parentIndex={index} contents={lesson} currentLesson={currentLesson} setCurrentLesson={setCurrentLesson} />
        ))}
      </Box>
    </Box>
  );
};

export default LessonSideBar;
