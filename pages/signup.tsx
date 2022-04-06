import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../components/organisms/navigation-bar";
import { Box, Button, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Input from "../components/molecules/input";
import SigninBg from "../components/molecules/signin-bg";
import { useState } from "react";
import Link from "next/link";
import PasswordInput from "../components/molecules/password";
import { signUp } from "../services/auth";

const Signup: NextPage = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignIn = () => {
    signUp({
      firstName,
      lastName,
      phoneNumber,
      emailAddress: emailAddress,
      password,
      gender: "male",
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <>
      <Head>
        <title>Sign up - School of Tyrannus</title>
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
              Sign up
            </Text>
            <Input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              label={"First Name"}
              placeholder="Enter First Name"
              type="text"
              name="first-name"
            />
            <Input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder="Enter Last Name"
              type="text"
              name="last-name"
            />
            <Input
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              label={"Email Address"}
              placeholder="Enter email"
              type="email"
              name="email"
            />
            <Input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              label={"Phone Number"}
              placeholder="Enter phone number"
              type="text"
              name="phone-number"
            />
            <PasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder="Enter password"
              type="password"
            />
            <PasswordInput
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              label={"Confirm Password"}
              placeholder="Confirm password"
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
                handleSignIn();
              }}
            >
              Sign up
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
