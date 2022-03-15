import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../../../components/organisms/navigation-bar";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import SigninBg from "../../../components/molecules/signin-bg";
import CourseTab from "../../../components/templates/course-tab";
import Footer from "../../../components/organisms/footer";

const CourseDetailsPage: NextPage = () => {
  const instructors = [
    { name: "Pst Ayo Omosehin", avatar: "/assets/images/video-poster.png" },
    { name: "Pst Ayo Omosehin", avatar: "/assets/images/video-poster.png" },
    { name: "Pst Ayo Omosehin", avatar: "/assets/images/video-poster.png" },
  ];

  return (
    <>
      <Head>
        <title>CourseTitle - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar />

        <Box bgColor="text.blue" textAlign="center" pos="relative">
          <Box pos="relative" pt="88px" pb="77px" overflow="hidden">
            <SigninBg course={true} />
            <Box pos="relative">
              <Text
                fontWeight="300"
                fontSize="14px"
                textTransform="uppercase"
                mb="28px"
              >
                Home / young believers / Principles of Faith-asking and
                believing
              </Text>
              <Text fontSize="36px" fontWeight="500" color="#131275" mb="52px">
                Principles of Faith - asking and believing
              </Text>
              <Text
                pos="relative"
                background="rgba(67, 108, 212, 0.5)"
                border="2px solid rgba(19, 18, 117, 0.1)"
                borderRadius="4px"
                w="min-content"
                p="10px 50px"
                mx="auto"
                fontWeight="600"
                color="white"
                textTransform="uppercase"
              >
                instructors
              </Text>
              <Flex
                justifyContent="center"
                alignItems="center"
                mt="34px"
                gap="55px"
              >
                {instructors.map((instructor) => (
                  <Flex key={instructor.name} alignItems="center">
                    <Img
                      h="57px"
                      w="57px"
                      objectFit="cover"
                      borderRadius="50%"
                      mr="23px"
                      border="8px solid rgba(253, 211, 132, 0.4)"
                      src={instructor.avatar}
                      alt={instructor.name}
                    />
                    <Text maxW="100px" textAlign="left">
                      Pst. Ayo Omosehin
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <Text
                fontWeight="500"
                color="rgba(19, 18, 117, 0.7)"
                mt="48px"
                textTransform="uppercase"
              >
                4 lessons . 8 videos
              </Text>
            </Box>
          </Box>
          <Button
            h="60px"
            w="300px"
            pos="absolute"
            left="50%"
            bottom="-30px"
            transform={"translateX(-50%)"}
            bgColor="text.orange"
            boxShadow="0px 3px 26px rgba(253, 211, 132, 0.9)"
            color="white"
          >
            START COURSE
          </Button>
        </Box>
      </Box>
      <Box mt="117px">
        <CourseTab />
      </Box>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
