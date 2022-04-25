import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../../../components/organisms/navigation-bar";
import {
  Box,
  Link as ChakraLink,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import LessonSideBar from "../../../components/organisms/lesson-sidebar";
import { useEffect } from "react";
import LessonTab from "../../../components/templates/lesson-tab";
import {
  getAllCourses,
  getCourseDetails,
} from "../../../services/course";
import { useRouter } from "next/router";
import { useChangeLesson } from "../../../hooks";

interface ILessonPageProps {
  course: {
    title: string;
    lessons: {
      title: string;
      contents: { title: string; videoRetrievalId: string }[];
    }[];
  };
}
const LessonPage: NextPage<ILessonPageProps> = ({ course }) => {
  const {
    currentLesson,
    goToPrev,
    goToNext,
    isFirstContent,
    isLastContent,
    setCurrentLesson,
  } = useChangeLesson(course.lessons);

  return (
    <>
      <Head>
        <title>{course.title} - School of Tyrannus</title>
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
            <LessonSideBar
              currentLesson={currentLesson}
              lessons={course.lessons}
              setCurrentLesson={setCurrentLesson}
            />
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
                {
                  course.lessons[currentLesson[0]].contents[currentLesson[1]]
                    .title
                }
              </Text>
              <Box pos="relative" padding="62.5% 0 0 0" role="group">
                <Box
                  as="button"
                  display={isFirstContent ? "none" : "block"}
                  pos="absolute"
                  top="50%"
                  transform="translateY(-50%)"
                  left="0"
                  zIndex={2}
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="all .3s"
                  disabled={isFirstContent}
                  onClick={() => {
                    goToPrev();
                  }}
                >
                  <svg
                    width="40"
                    height="60"
                    viewBox="0 0 50 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="50"
                      height="70"
                      transform="matrix(-1 0 0 1 50 0)"
                      fill="#717171"
                    />
                    <path
                      d="M35.2273 12.069L13.6364 35L35.2273 57.931"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Box
                  as="button"
                  display={isLastContent ? "none" : "block"}
                  pos="absolute"
                  top="50%"
                  transform="translateY(-50%)"
                  right="0"
                  opacity={0}
                  zIndex={2}
                  _groupHover={{ opacity: 1 }}
                  transition="all .3s"
                  disabled={isLastContent}
                  onClick={() => {
                    goToNext();
                  }}
                >
                  <svg
                    width="40"
                    height="60"
                    viewBox="0 0 50 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="70" fill="#717171" />
                    <path
                      d="M14.7727 12.069L36.3636 35L14.7727 57.931"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <iframe
                  // srcDoc={course.lessons[0].contents[0].videoRetrievalId}
                  src={`${
                    course.lessons[currentLesson[0]].contents[currentLesson[1]]
                      .videoRetrievalId
                  }&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
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
              </Box>

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

interface ICourseProps {
  params: { course: string };
}

export const getStaticPaths = async () => {
  const res = await getAllCourses();
  const courses = await res.data;
  const paths = courses.map((course: { id: string }) => ({
    params: { course: String(course.id) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: ICourseProps) => {
  const res = await getCourseDetails(params.course);
  const course = await res.data;
  return {
    props: {
      course,
    },
  };
};
