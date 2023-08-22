import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

interface ITestimonyProps {
  testimony: string;
  name: string;
}

const Testimony: React.FunctionComponent<ITestimonyProps> = ({
  testimony,
  name,

}) => {
  return (
    <Box pos="relative" ml={{ base: "50px", lg: "90px" }}>
      <Text
        pos="absolute"
        top={{ base: "-22px", lg: "-60px" }}
        left={{ base: "-50px", lg: "-100px" }}
        color="#6677A0"
        fontFamily="'Roboto', sans-serif"
        fontSize={{ base: "87px", lg: "193.6px" }}
      >
        “
      </Text>
      <Text maxW={"440px"} mb={"41px"}>
        {testimony}
      </Text>
      <Box>
        <Text fontSize={"18px"}>{name}</Text>
      </Box>
    </Box>
  );
};

export default Testimony;
