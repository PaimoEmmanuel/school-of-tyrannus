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
import LessonManual from "../../../components/molecules/lesson-manual";

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
          <Flex pos="relative">
            <Skeleton isLoaded={!loading}>
              <LessonSideBar
                currentLesson={currentLesson}
                lessons={course.lessons}
                setCurrentLesson={setCurrentLesson}
              />
            </Skeleton>
            <Box pos="relative" w="100%">
              <Text
                m="38px 0 30px 0"
                textAlign="center"
                fontSize="20px"
                fontWeight="600"
              >
                {course.title}
              </Text>
              <Flex
                css={{
                  iframe: {
                    width: "100%",
                    borderRadius: "12px",
                  },
                }}
                ml="32px"
                gap="24px"
              >
                <Box pos="relative" minW="calc(100% - 456px)">
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
                      course.lessons[currentLesson[0]].contents[
                        currentLesson[1]
                      ].title
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
                </Box>
                <Skeleton isLoaded={!loading}>
                  <LessonManual />
                </Skeleton>
              </Flex>

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
