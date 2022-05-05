import { Box, Text } from "@chakra-ui/react";

interface ILessonManualProps {}

const LessonManual: React.FunctionComponent<ILessonManualProps> = (props) => {
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
      top="0"
    >
      <Text fontWeight="600" mb="18px">
        Lesson Manual
      </Text>
      <Text
        fontSize="14px"
        css={{
          strong: {
            fontSize: "14px",
            fontWeight: "600",
            display: "block",
            marginBottom: "8px",
          },
        }}
      >
        <strong>Time Stamp - 0:00 - 0:30</strong>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa
        pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies
        sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut
        neque, tincidunt. Orci lorem convallis cursus feugiat aliquam cras at.
        Curabitur consequat vel nulla nunc. Morbi congue mi tincidunt odio ut.
        Sed quam gravida interdum ut habitasse porttitor aliquam egestas purus.
        Nibh in sed mollis dui nisi, massa. Mi tempus nec, porttitor lacus felis
        nisi fringilla vestibulum. A nam eu semper id adipiscing. <br /> <br />
        <strong>Time Stamp - 0:30 - 1:00</strong> Eleifend vestibulum vestibulum
        urna viverra pulvinar. Eget felis arcu sollicitudin dolor mus. Augue
        cras varius proin nunc varius enim. Tristique sed non pretium, accumsan
        amet donec. Ipsum tellus metus quam viverra. Sollicitudin dolor mauris
        ultrices orci consequat aliquet vitae ut pellentesque. Nec dui nec vitae
        accumsan nibh pulvinar faucibus volutpat ut. Facilisis justo, sed lectus
        dui sed sem habitasse. Quisque blandit leo euismod sit libero vitae
        neque eget. Ut accumsan, in eget neque tristique posuere amet neque.
      </Text>
    </Box>
  );
};

export default LessonManual;
