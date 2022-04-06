import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../components/organisms/navigation-bar";
import { Box, Button, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Input from "../components/molecules/input";
import SigninBg from "../components/molecules/signin-bg";
import { useState } from "react";
import Link from "next/link";

const Signin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Head>
        <title>Sign in - School of Tyrannus</title>
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
            p="70px 100px"
            zIndex="1"
            bgColor="white"
            borderRadius="4px"
          >
            <Text fontSize="24px" lineHeight="36px" fontWeight="600" mb="50px">
              Sign in
            </Text>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label={"Email address"}
              placeholder="Enter email"
              type="email"
              name="email"
            />
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder="Enter password"
              type="password"
            />
            <Button
              type="submit"
              w="300px"
              h="50px"
              bgColor="text.orange"
              color="white"
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
              }}
            >
              Sign in
            </Button>
            <Text fontSize="12px" color="text.gray">
              New here?{" "}
              <Link href="/signup" passHref>
                <ChakraLink color="black" fontWeight="600">
                  Sign up
                </ChakraLink>
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Signin;
