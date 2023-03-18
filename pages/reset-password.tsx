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
import { useResetPassword, useSignIn } from "../hooks";
import PasswordInput from "../components/molecules/password";

const ResetPassword: NextPage = () => {
  const {
    tokenState,
    email,
    setPassword,
    setConfirmPassword,
    error,
    resettingPassword,
    handlePasswordReset,
  } = useResetPassword();
  return (
    <>
      <Head>
        <title>Reset Password - School of Tyrannus</title>
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
            {tokenState.error ? (
              <Text color="red" textAlign="center">
                {tokenState.error}
                <Link href="/forgot-password" passHref>
                  <ChakraLink textDecor="underline">
                    Please try again.
                  </ChakraLink>
                </Link>
              </Text>
            ) : tokenState.verifying ? (
              <Flex flexDir="column" gap="20px" alignItems="center">
                <Spinner h="50px" w="50px" thickness="5px" />
                <Text>Loading </Text>
              </Flex>
            ) : (
              <>
                <Text
                  fontSize="24px"
                  lineHeight="36px"
                  fontWeight="600"
                  mb="50px"
                >
                  Reset Password
                </Text>
                <Input
                  isReadOnly
                  value={email}
                  label={"Email address"}
                  placeholder="Enter email"
                  type="email"
                  name="email"
                />
                <PasswordInput
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  label={"New Password"}
                  placeholder="Enter password"
                  type="password"
                  autoComplete="new-password"
                />
                <PasswordInput
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  label={"Confirm new Password"}
                  placeholder="Confirm password"
                  type="password"
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
                    handlePasswordReset();
                  }}
                >
                  {resettingPassword ? "Please wait" : "Sign in"}
                  {resettingPassword && <Spinner />}
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
export default ResetPassword;
