import { Box, Text } from "@chakra-ui/react";

interface ILessonManualProps {
  manual: string;
}

const LessonManual: React.FunctionComponent<ILessonManualProps> = ({
  manual,
}) => {
  return (
    <Box
      minW="400px"
      maxW="400px"
      p="28px 30px"
      bgColor="white"
      borderRadius="12px 0px 0px 0px"
      h="80vh"
      overflowY="scroll"
      pos="sticky"
      top="5rem"
      display={{ base: "none", xl: "block" }}
    >
      <Text fontWeight="600" mb="18px">
        Lesson Manual
      </Text>
      <Text
        fontSize="14px"
        sx={{
          p: { marginBottom: "16px" },
          strong: {
            fontSize: "14px",
            fontWeight: "600",
            display: "block",
            marginBottom: "8px",
          },
        }}
        dangerouslySetInnerHTML={{
          __html: manual ? manual : "No manual available for this lesson.",
        }}
      ></Text>
    </Box>
  );
};

export default LessonManual;
