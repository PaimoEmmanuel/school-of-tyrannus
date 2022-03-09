import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import LogoText from "../molecules/logo-text";
import NavSearch from "../molecules/nav-search";

interface INavigationBarProps {}

const NavigationBar: React.FunctionComponent<INavigationBarProps> = (props) => {
  return (
    <Flex
      as="nav"
      p="14px 64px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex minW="50%" justifyContent="space-between">
        <LogoText />
        <NavSearch />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="" passHref>
          <ChakraLink mr="45px">About Tyrannus</ChakraLink>
        </Link>
        <Link href="" passHref>
          <ChakraLink mr="45px">Courses</ChakraLink>
        </Link>
        <Link href="" passHref>
          <ChakraLink mr="45px">Explore</ChakraLink>
        </Link>
        <Link href="" passHref>
          <ChakraLink mr="45px">Sign in</ChakraLink>
        </Link>
        <Link href="" passHref>
          <ChakraLink
            h="42px"
            w="128px"
            bgColor="text.orange"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
            fontWeight="500"
            boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"
            color="white"
          >
            Register
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
