import { Box, Flex, Text } from "@chakra-ui/react";

interface ILessonContextProps {
  lessonTitle: string;
  lessonNumber: number;
  lessonDesc: string;
  duration: number;
  videoNo: number;
  resourceNo: number;
  testNo: number;
  lastLesson?: boolean;
}
const LessonContent: React.FC<ILessonContextProps> = ({
  lessonTitle,
  lessonNumber,
  lessonDesc,
  duration,
  videoNo,
  resourceNo,
  testNo,
  lastLesson,
}) => {
  return (
    <Flex alignItems="center" mb="50px">
      <Box mr="130px">
        <Text fontWeight="300" color="text.gray" fontSize="34px">
          Lesson
        </Text>
        <Text
          fontSize="120px"
          fontWeight="600"
          color="rgba(67, 108, 212, 0.4)"
          mt="-30px"
        >
          {lessonNumber < 10 ? `0${lessonNumber}` : lessonNumber}
        </Text>
      </Box>
      <Box borderBottom={lastLesson ? "" : "1px solid #E7E4E4"} pb="53px">
        <Text fontWeight="600" mb="32px">
          {lessonTitle}
        </Text>
        <Text mb="27px">{lessonDesc}</Text>
        <Text display="flex" css={{ svg: { marginRight: "16px" } }}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              fill="#436CD4"
              fillOpacity="0.13"
              stroke="#0B0966"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15V11"
              stroke="#0B0966"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 7H11.01"
              stroke="#0B0966"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {duration} hours to complete . {videoNo} videos . {resourceNo}{" "}
          resources . {testNo} Lesson Test
        </Text>
      </Box>
    </Flex>
  );
};

export default LessonContent;
