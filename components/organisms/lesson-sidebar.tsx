import { Box, Text } from "@chakra-ui/react";
import LessonSideBarItem from "../molecules/lesson-sidebar-item";

const LessonSideBar: React.FC = () => {
  const curricula = [
    ["Christ", "The person Christ", "The person Christ", "Lesson Test"],
    ["Christ", "The person Christ", "The person Christ", "Lesson Test"],
    ["Christ", "The person Christ", "The person Christ", "Lesson Test"],
    ["Christ", "The person Christ", "The person Christ", "Lesson Test"],
  ];
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
        {curricula.map((curriculum, index) => (
          <LessonSideBarItem key={curriculum[index]} lessons={curricula[0]} />
        ))}
      </Box>
    </Box>
  );
};

export default LessonSideBar;
