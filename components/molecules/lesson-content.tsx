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
  openAccordion: boolean;
  setOpenAccordion: () => void;
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
  openAccordion,
  setOpenAccordion,
}) => {
  return (
    <Flex
      alignItems={{ md: "center" }}
      mb="50px"
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        cursor={{ base: "pointer", md: "arrow" }}
        onClick={setOpenAccordion}
      >
        <Box mr="90px" minW="204px">
          <Text
            fontWeight="300"
            color="text.gray"
            fontSize={{ base: "24px", md: "34px" }}
          >
            Lesson
          </Text>
          <Text
            fontSize={{ base: "74px", md: "120px" }}
            fontWeight="600"
            color="rgba(67, 108, 212, 0.4)"
            mt="-30px"
          >
            {lessonNumber < 10 ? `0${lessonNumber}` : lessonNumber}
          </Text>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          h="50px"
          w="50px"
          bgColor="#C5D6FF"
          borderRadius="4px"
          display={{ base: "flex", md: "none" }}
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7L7 1L1 7"
              stroke="#131275"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
      </Flex>

      <Box
        w="100%"
        borderBottom={lastLesson ? "" : "1px solid #E7E4E4"}
        pb={{ base: openAccordion ? "53px" : "0", md: "53px" }}
        h={{ base: openAccordion ? "auto" : "0px", md: "auto" }}
        overflow="hidden"
        transition="all .3s"
      >
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
          {duration} hours.{" "}
          {videoNo > 1 ? videoNo + " videos" : videoNo + " video"} .{" "}
          {!resourceNo
            ? ""
            : resourceNo > 1
            ? resourceNo + " resources. "
            : resourceNo + " resource. "}
          {!testNo
            ? ""
            : testNo > 1
            ? testNo + " Lesson Tests. "
            : testNo + " Lesson Test. "}
        </Text>
      </Box>
    </Flex>
  );
};

export default LessonContent;
