import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../../../components/organisms/navigation-bar";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import LessonSideBar from "../../../components/organisms/lesson-sidebar";
import LessonTab from "../../../components/templates/lesson-tab";
import { getAllCourses, getCourseDetails } from "../../../services/course";
import { useChangeLesson, useCourseEnrol } from "../../../hooks";
import LessonControl from "../../../components/organisms/lesson-control";

interface ILessonPageProps {
  course: {
    title: string;
    id: string;
    lessons: {
      title: string;
      contents: { title: string; videoRetrievalId: string; id: number }[];
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
    loadingContent,
  } = useChangeLesson(course.lessons);
  const { loading, error } = useCourseEnrol();

  return (
    <>
      <Head>
        <title>{course.title} - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar />
        <Box bgColor="text.lightBlue">
          <Flex alignItems="center">
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
                minW="382px"
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
            <Text
              ml="32px"
              fontSize="20px"
              fontWeight="600"
              color="text.deepBlue"
            >
              {course.title}
            </Text>
          </Flex>

          <Flex>
            <Skeleton isLoaded={!loading}>
              <LessonSideBar
                currentLesson={currentLesson}
                lessons={course.lessons}
                setCurrentLesson={setCurrentLesson}
              />
            </Skeleton>

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
              {loadingContent ? (
                <Flex
                  h="500px"
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Spinner thickness="7px" h="70px" w="70px" />
                </Flex>
              ) : (
                <Skeleton isLoaded={!loading}>
                  <Box pos="relative" padding="62.5% 0 0 0" role="group">
                    <iframe
                      // srcDoc={course.lessons[0].contents[0].videoRetrievalId}
                      src={`${
                        course.lessons[currentLesson[0]].contents[
                          currentLesson[1]
                        ].videoRetrievalId
                      }?controls=0`}
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
                    ></iframe>
                  </Box>
                </Skeleton>
              )}

              {/* eslint-disable-next-line @next/next/no-sync-scripts */}
              <script src="https://player.vimeo.com/api/player.js"></script>
              <Skeleton isLoaded={!loading}>
                <Box
                  bgColor="white"
                  mt="36px"
                  pb="56px"
                  borderRadius="12px 12px 0px 0px"
                  mb="120px"
                >
                  <LessonTab />
                </Box>
              </Skeleton>
              <Skeleton isLoaded={!loading}>
                <LessonControl
                  goToNext={goToNext}
                  goToPrev={goToPrev}
                  isFirstContent={isFirstContent}
                  isLastContent={isLastContent}
                  title={
                    course.lessons[currentLesson[0]].contents[currentLesson[1]]
                      .title
                  }
                  index={currentLesson[1]}
                />
              </Skeleton>
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
