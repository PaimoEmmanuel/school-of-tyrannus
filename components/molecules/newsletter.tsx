import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";

const NewsLetter: React.FunctionComponent = () => {
  return (
    <Box
      textAlign="center"
      pt={"116px"}
      pb="94px"
      px={{ base: "1.5rem", lg: "" }}
    >
      <Text
        fontSize={{ base: "24px", lg: "26px" }}
        lineHeight="39px"
        fontWeight="500"
        mb="19"
      >
        Would you like to get updates on courses?
      </Text>
      <Text
        fontSize={{ base: "16px", lg: "14px" }}
        lineHeight={"21px"}
        color="#514F4F"
        mb={"48px"}
      >
        If yes. Enter your email address to stay up to date with our newsletter.
      </Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "24px", lg: "0" }}
        as="form"
        w={"100%"}
        maxW="728px"
        mx="auto"
        filter="drop-shadow(2px 7px 18px rgba(67, 108, 212, 0.13))"
      >
        <Input
          type="email"
          placeholder="Enter email address"
          h="48px"
          border="1px solid #E9E9E9"
          borderBottomRightRadius="none"
          borderTopRightRadius="none"
          borderRadius="4px"
          pl="30px"
          color="#767474"
          _placeholder={{ color: "#767474" }}
          boxShadow={{ base: "2px 7px 18px rgba(67, 108, 212, 0.13)", lg: "" }}
        />
        <Button
          type="submit"
          w={{ base: "100%", sm: "222px" }}
          mx={{ base: "auto", sm: "" }}
          h="48px"
          borderRadius="3px"
          bgColor="#EE9938"
          fontSize={"14px"}
          color="black"
          fontWeight="500"
        >
          Subscribe
        </Button>
      </Flex>
    </Box>
  );
};

export default NewsLetter;
