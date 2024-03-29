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
import { useForgotPassword } from "../hooks";

const Signin: NextPage = () => {
  const { email, setEmail, sendPasswordToken, sendingMail, mailSent, error } =
    useForgotPassword();
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
          padding="0 1.5rem"
        >
          <Box
            // pending removal
            as="form"
            boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13);"
            p={{ base: "70px 24px", lg: "70px 100px" }}
            zIndex="1"
            bgColor="white"
            borderRadius="4px"
            w={{ base: "100%", sm: "fit-content" }}
          >
            {mailSent ? (
              <Box zIndex="10">
                <Box margin="12px auto" w="fit-content">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="white"
                      stroke="#219653"
                      strokeWidth="3"
                    />
                    <path
                      d="M20 32.1213L26 38.1213C27.1716 39.2929 29.071 39.2929 30.2426 38.1213L44.3639 24"
                      stroke="#219653"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Text textAlign="center">
                  A password reset link has been sent to your mail. Please check
                  your spam as well.
                </Text>
              </Box>
            ) : (
              <>
                <Text
                  fontSize="24px"
                  lineHeight="36px"
                  fontWeight="600"
                  mb="50px"
                >
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
                {error && (
                  <Text fontSize="14px" mb="20px" color="red">
                    {error}
                  </Text>
                )}
                <Button
                  display="flex"
                  gap="16px"
                  type="submit"
                  w={{ base: "100%", sm: "300px" }}
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
                    sendPasswordToken();
                  }}
                >
                  {sendingMail ? "Please wait" : "Reset password"}
                  {sendingMail && <Spinner />}
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
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Signin;
