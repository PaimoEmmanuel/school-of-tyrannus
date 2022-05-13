import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/organisms/navigation-bar";
import {Box, Button, Flex, Link as ChakraLink, Spinner, Text,} from "@chakra-ui/react";
import Input from "../components/molecules/input";
import SigninBg from "../components/molecules/signin-bg";
import Link from "next/link";
import PasswordInput from "../components/molecules/password";
import {useSignUp} from "../hooks";

const Signup: NextPage = () => {
  const {
    setEmailAddress,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setPassword,
    setConfirmPassword,
    handleSignUp,
    isSigningUp,
    error,
  } = useSignUp();
  return (
    <>
      <Head>
        <title>Sign up - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar/>
        <SigninBg/>
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
              Sign up
            </Text>
            <Input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              label={"First Name"}
              placeholder="Enter First Name"
              type="text"
              name="first-name"
            />
            <Input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder="Enter Last Name"
              type="text"
              name="last-name"
            />
            <Input
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              label={"Email Address"}
              placeholder="Enter email"
              type="email"
              name="email"
            />
            <Input
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              label={"Phone Number"}
              placeholder="Enter phone number"
              type="text"
              name="phone-number"
            />
            <PasswordInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder="Enter password"
              type="password"
            />
            <PasswordInput
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              label={"Confirm Password"}
              placeholder="Confirm password"
              type="password"
            />
            {error && (
              <Text fontSize="14px" mb="20px" color="red">
                {error}
              </Text>
            )}
            <Button
              type="submit"
              display="flex"
              gap="16px"
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
                handleSignUp();
              }}
            >
              {isSigningUp ? "Please wait" : "Sign up"}
              {isSigningUp && <Spinner/>}
            </Button>
            <Text fontSize="12px" color="text.gray">
              Already have an account?{" "}
              <Link href="/signin" passHref>
                <ChakraLink color="black" fontWeight="600">
                  Sign in
                </ChakraLink>
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Signup;
