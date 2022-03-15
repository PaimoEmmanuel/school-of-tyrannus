import { Box, Text, Flex, Img, Grid } from "@chakra-ui/react";

interface IInstructorsProps {}

const Instructors: React.FunctionComponent<IInstructorsProps> = (props) => {
  const instructors = [
    {
      name: "Pst Ayo Omosehin",
      avatar: "/assets/images/video-poster.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt. ",
    },
    {
      name: "Pst Tope Falaye",
      avatar: "/assets/images/video-poster.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt. ",
    },
    {
      name: "Pst Tunji Adegoke",
      avatar: "/assets/images/video-poster.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt. ",
    },
  ];
  return (
    <Box pt="53px" pb="90px" px="175px">
      <Text fontWeight="600" mb="54px">
        Instructors
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        mt="34px"
        gap="55px"
      >
        {instructors.map((instructor) => (
          <Box key={instructor.name}>
            <Flex key={instructor.name} alignItems="center">
              <Img
                h="57px"
                w="57px"
                objectFit="cover"
                borderRadius="50%"
                mr="23px"
                border="8px solid rgba(253, 211, 132, 0.4)"
                src={instructor.avatar}
                alt={instructor.name}
              />
              <Text maxW="100px" textAlign="left">
                Pst. Ayo Omosehin
              </Text>
            </Flex>
            <Text mt="42px">{instructor.desc}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Instructors;
