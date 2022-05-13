import * as React from "react";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface IHomeBannerProps {}

const HomeBanner: React.FunctionComponent<IHomeBannerProps> = () => {
  return (
    <Box
      bg="linear-gradient(91.54deg, rgba(11, 9, 102, 0.8) 27.31%, rgba(22, 16, 135, 0.736) 52.67%, rgba(23, 13, 89, 0) 111.41%), url(/assets/images/banner.png)"
      bgSize="cover"
    >
      <Box p="107px 0 128px 0" ml="175px" maxW="489px" color="white">
        <Text fontWeight="500" fontSize="48px" lineHeight="62px" mb="24px">
          Welcome to the School of Tyrannus
        </Text>
        <Text fontSize="14px" lineHeight="21px" mb="45px">
          Experience Bountiful Growth in the Spirit by The Word of Truth.
        </Text>
        <Link href="/courses" passHref>
          <ChakraLink
            h="50px"
            w="300px"
            color="black"
            bgColor="text.orange"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
            fontWeight="500"
            boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"
            _hover={{ textDecoration: "none" }}
          >
            View courses
          </ChakraLink>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeBanner;
