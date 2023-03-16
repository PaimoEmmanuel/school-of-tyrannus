import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../components/organisms/navigation-bar";
import {
  Box,
  Button,
  Flex,
  Text,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";
import Input from "../components/molecules/input";
import SigninBg from "../components/molecules/signin-bg";
import Link from "next/link";
import { useSignIn } from "../hooks";

const Signin: NextPage = () => {
  const { setEmail, setPassword, handleSignIn, isSigningIn, error } =
    useSignIn();
  return (
    <>
      <Head>
        <title>Forgot Password - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar />
        <SigninBg />
        <Flex
          justifyContent="center"
          alignItems="center"
          bgColor="text.blue"
          minH="94vh"
        >
          <Box
            // pending removal
            as="form"
            boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13);"
            p={{ base: "70px 24px", lg: "70px 100px" }}
            zIndex="1"
            bgColor="white"
            borderRadius="4px"
          >
            <Text fontSize="24px" lineHeight="36px" fontWeight="600" mb="50px">
              Forgot Password
            </Text>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label={"Email address"}
              placeholder="Enter email"
              type="email"
              name="email"
            />
            {/* <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder="Enter password"
              type="password"
            /> */}
            {error && (
              <Text fontSize="14px" mb="20px" color="red">
                {error}
              </Text>
            )}
            <Button
              display="flex"
              gap="16px"
              type="submit"
              w="300px"
              h="50px"
              bgColor="text.orange"
              fontSize="14"
              fontWeight="500"
              boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"
              mb="30px"
              _hover={{
                bgColor: "white",
                border: "1px solid #EE9938",
                color: "text.orange",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              {isSigningIn ? "Please wait" : "Sign in"}
              {isSigningIn && <Spinner />}
            </Button>
            <Flex justifyContent="space-between">
              <Text fontSize="12px" color="text.gray">
                New here?{" "}
                <Link href="/signup" passHref>
                  <ChakraLink color="black" fontWeight="600">
                    Sign up
                  </ChakraLink>
                </Link>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Signin;
