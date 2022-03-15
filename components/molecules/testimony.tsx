import * as React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface ITestimonyProps {
  testimony: string;
  name: string;
  occupation: string;
  image: string;
}

const Testimony: React.FunctionComponent<ITestimonyProps> = ({
  testimony,
  name,
  occupation,
  image,
}) => {
  return (
    <Box pos="relative" ml="90px">
      <Text
        pos="absolute"
        top="-60px"
        left="-100px"
        color="#6677A0"
        fontFamily="'Roboto', sans-serif"
        fontSize={"193.6px"}
      >
        “
      </Text>
      <Text maxW={"440px"} mb={"41px"}>
        {testimony}
      </Text>
      <Flex alignItems="center">
        <Img
          w={"62px"}
          h={"62px"}
          objectFit="cover"
          borderRadius="50%"
          src={image}
        />
        <Box ml={"21px"}>
          <Text fontSize={"18px"}>{name}</Text>
          <Text color="#979797">{occupation}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimony;
