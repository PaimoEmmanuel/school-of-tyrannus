import * as React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface ILogoTextProps {}

const LogoText: React.FunctionComponent<ILogoTextProps> = (props) => {
  return (
    <Flex as="a" href="/" alignItems="center">
      <Img
        src="/assets/images/tyrannus-logo.svg"
        w="128px"
        h="49px"
        mr="10.5px"
      />
      {/* <Text fontSize="18.67px" lineHeight="28px" fontWeight="500">
        Tyrannus
      </Text> */}
    </Flex>
  );
};

export default LogoText;
