import { Box, Text } from "@chakra-ui/react";
import LessonContent from "../molecules/lesson-content";

interface ICourseContentProps {}

const CourseContent: React.FunctionComponent<ICourseContentProps> = (props) => {
  const courseContent = [
    {
      lessonTitle: "What is FAITH?",
      lessonDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt.",
      duration: 3,
      videoNo: 2,
      resourceNo: 2,
      testNo: 1,
    },
    {
      lessonTitle: "What is FAITH?",
      lessonDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt.",
      duration: 3,
      videoNo: 2,
      resourceNo: 2,
      testNo: 1,
    },
    {
      lessonTitle: "What is FAITH?",
      lessonDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt.",
      duration: 3,
      videoNo: 2,
      resourceNo: 2,
      testNo: 1,
    },
    {
      lessonTitle: "What is FAITH?",
      lessonDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt.",
      duration: 3,
      videoNo: 2,
      resourceNo: 2,
      testNo: 1,
    },
  ];
  return (
    <Box bgColor="text.blue" pt="60px" pb="90px" px="175px">
      <Text fontWeight="600" mb="33px">
        Course content
      </Text>
      {courseContent.map((content, index) => (
        <LessonContent
          key={content.lessonTitle}
          lessonNumber={index + 1}
          {...content}
          lastLesson={index + 1 === courseContent.length}
        />
      ))}
    </Box>
  );
};

export default CourseContent;
