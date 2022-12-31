import { Box, Text } from "@chakra-ui/react";
import LessonContent from "../molecules/lesson-content";

interface ICourseContentProps {
  courseContent: {
    title: string;
    description: string;
    duration: number;
    contents: {}[];
    contentsCount: number;
    resourcesCount: number;
    testCount: number;
  }[];
}

const CourseContent: React.FunctionComponent<ICourseContentProps> = ({
  courseContent,
}) => {
  return (
    <Box
      bgColor="text.blue"
      pt="60px"
      pb="90px"
      px={{ base: "1.5rem", lg: "175px" }}
    >
      <Text fontWeight="600" mb="33px">
        Course content
      </Text>
      {courseContent.map((content, index) => (
        <LessonContent
          key={content.title}
          lessonNumber={index + 1}
          lessonDesc={content.description}
          duration={content.duration}
          videoNo={content.contentsCount}
          resourceNo={content.resourcesCount}
          // testNo={content.contents.length}
          testNo={content.testCount}
          lessonTitle={content.title}
          lastLesson={index + 1 === courseContent.length}
        />
      ))}
    </Box>
  );
};

export default CourseContent;
