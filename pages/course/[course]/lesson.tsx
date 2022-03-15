import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../../../components/organisms/navigation-bar";
import {
  Box,
  Link as ChakraLink,
  Button,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import LessonSideBar from "../../../components/organisms/lesson-sidebar";
import { useEffect } from "react";
import LessonTab from "../../../components/templates/lesson-tab";

const LessonPage: NextPage = () => {
  const instructors = [
    { name: "Pst Ayo Omosehin", avatar: "/assets/images/video-poster.png" },
    { name: "Pst Ayo Omosehin", avatar: "/assets/images/video-poster.png" },
    { name: "Pst Ayo Omosehin", avatar: "/assets/images/video-poster.png" },
  ];
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.onload = () => {
        // var c = iframe.contentWindow?.document;
        // console.log(c);

        const videPlayer = document.getElementById("#player");
        videPlayer?.setAttribute(
          "style",
          "{ borderRadius: 12px, overflow: hidden }"
        );
        console.log(iframe);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>CourseTitle - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar />
        <Box bgColor="text.lightBlue">
          <Link href="/" passHref>
            <ChakraLink
              p="38px 64px"
              fontSize="20px"
              fontWeight="600"
              color="text.deepBlue"
              css={{ svg: { marginRight: "18px" } }}
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none" }}
              w="max-content"
            >
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 13.9158L1 7.41577L7.5 0.915771"
                  stroke="#0B0966"
                  strokeWidth="1.36842"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </ChakraLink>
          </Link>
          <Flex>
            <LessonSideBar />
            <Box
              //   ml="416px"
              mx="64px"
              w="100%"
              pos="relative"
              css={{
                iframe: {
                  width: "100%",
                  borderRadius: "12px",
                },
              }}
              m="0 32px"
            >
              <Text
                pos="absolute"
                p="25px 27px"
                w="100%"
                bg="rgba(113, 113, 113, 1)"
                borderRadius="12px 12px 0 0"
                zIndex="88"
                fontSize="20px"
                fontWeight="700"
                color="white"
                top="0"
                left="0"
              >
                The Christ Man
              </Text>
              <div style={{ padding: "62.5% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/644716104?h=55da59abf7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="1. JSX.mp4"
                ></iframe>
              </div>

              {/* eslint-disable-next-line @next/next/no-sync-scripts */}
              <script src="https://player.vimeo.com/api/player.js"></script>
              <Box
                bgColor="white"
                mt="36px"
                pb="56px"
                borderRadius="12px 12px 0px 0px"
              >
                <LessonTab />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default LessonPage;
