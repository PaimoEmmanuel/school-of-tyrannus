import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
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
  const [lessonsAcordion, setLessonsAccordion] = useState(
    courseContent.map((item, index) => (index === 0 ? true : false))
  );
  // const openAccordionFn = (index) => {
  //   setLessonsAccordion(
  //     lessonsAcordion.map((item, lessonIndex) => index === lessonIndex)
  //   );
  // };
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
          openAccordion={lessonsAcordion[index]}
          setOpenAccordion={() => {
            setLessonsAccordion(
              lessonsAcordion.map((item, lessonIndex) => index === lessonIndex)
            );
          }}
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
