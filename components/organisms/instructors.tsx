import { Box, Text, Flex, Img, Grid } from "@chakra-ui/react";
import getThumbnail from "../../utils/get-instructor-thumbnail";

interface IInstructorsProps {
  instructors: { name: string; thumbnail: string }[];
}

const Instructors: React.FunctionComponent<IInstructorsProps> = ({
  instructors,
}) => {
  return (
    <Box pt="53px" pb="90px" px={{base: "1.5rem", lg:"175px"}}>
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
                // src={instructor.thumbnail}
                src={getThumbnail(instructor.name)}
                // alt={instructor.name}
              />
              <Text maxW="120px" textAlign="left">
                {instructor.name}
              </Text>
              star-svgrepo-com.svg
            </Flex>
            <Text mt="42px">{instructor.name}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Instructors;
