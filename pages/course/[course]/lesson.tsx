import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../../../components/organisms/navigation-bar";
import { Box, Flex, Skeleton, Spinner, Text, useToast } from "@chakra-ui/react";
import LessonSideBar from "../../../components/organisms/lesson-sidebar";
import LessonTab from "../../../components/templates/lesson-tab";
import {
  useChangeLesson,
  useFetchCourse,
  useMonitorContentStatus,
} from "../../../hooks";
import LessonControl from "../../../components/organisms/lesson-control";
import LessonManual from "../../../components/molecules/lesson-manual";
import TestModal from "../../../components/organisms/test-modal";
import PrivatePage from "../../../components/templates/private-route";
import CourseCompletedModal from "../../../components/molecules/course-complete-modal";
import { useCallback, useEffect, useState } from "react";
import Player from "@vimeo/player";
import { saveTimeStamp } from "../../../services/course";
import {  useRouter } from "next/router";

const LessonPage: NextPage = () => {
  const { loadingCourse, course, setContentToCompleted } = useFetchCourse();
  const {
    currentLesson,
    goToPrev,
    goToNext,
    isFirstContent,
    isLastContent,
    goToLesson,
    loadingContent,
    setLoadContent,
    currentLessonStatus,
  } = useChangeLesson(loadingCourse, course.lessons, setContentToCompleted);
const router = useRouter()
  const {
    testModalOpen,
    setTestmodalOpen,
    openCourseCompleteModal,
    setOpenCourseCompleteModal,
  } = useMonitorContentStatus(
    loadingCourse,
    course,
    currentLesson,
    loadingContent,
    setLoadContent,
    goToNext
  );
  const [timeStamp, setTimeStamp] = useState(0);
  const toast = useToast();
  let breaker = 0;
  const updateTimestamp = useCallback(
    (time: number) => {
      breaker++;
      if (breaker > 50) {
        saveTimeStamp(
          Number(
            course.lessons[currentLesson[0]].contents[currentLesson[1]].id
          ),
          time
        )
          .then((res) => {
            // console.log(res.data);
          })
          .catch((err) => {});
        breaker = 0;
      }
      return;
    },
    [breaker, course.lessons, currentLesson]
  );
  const [videoPlaying, setVideoPlaying] = useState(false);
  useEffect(() => {
    if (!loadingCourse) {
      const iframe = document.querySelector(
        "#video-iframe"
      ) as HTMLIFrameElement;
      if (iframe) {
        const player = new Player(iframe);
        player
          .setCurrentTime(currentLessonStatus.timeStamp)
          .then((sec) => {})
          .catch((err) => {
            player.setCurrentTime(0);
          });
        player.on("timeupdate", (data) => {
          setTimeStamp(data.seconds);
          // setTimeStamp(sec);
        });
      }
    }
  }, [currentLessonStatus.timeStamp, loadingCourse]);
  useEffect(() => {
    updateTimestamp(timeStamp);
  }, [updateTimestamp, timeStamp]);
  return (
    <>
      <Head>
        <title>{course.title} - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar />
        <Box bgColor="text.lightBlue">
          <Flex pos="relative">
            <Skeleton
              isLoaded={!loadingCourse}
              pos={{ base: "sticky" }}
              height="100vh"
              top="-14px"
              zIndex="99"
            >
              <LessonSideBar
                onTakeTest={() => {
                  if (
                    course.lessons[currentLesson[0]].contents[currentLesson[1]]
                      .userStatus.contentStatus === "Completed"
                  ) {
                    setTestmodalOpen(true);
                  } else {
                    toast({
                      description: "Finish current lesson to take the test.",
                      status: "warning",
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                }}
                currentLesson={currentLesson}
                lessons={course.lessons}
                goToLesson={goToLesson}
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
                ml={{ base: "0", md: "32px" }}
                mr={{ base: "0", md: "32px", lg: "0" }}
                gap={{ base: "0", md: "24px" }}
              >
                <Box pos="relative" minW="calc(100% - 456px)" w="100%">
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
                    <Skeleton
                      isLoaded={
                        !loadingCourse &&
                        !!course.lessons[currentLesson[0]].contents[
                          currentLesson[1]
                        ].videoRetrievalId
                      }
                    >
                      <Box pos="relative" padding="56.5% 0 0 0" role="group">
                        <iframe
                          id="video-iframe"
                          // srcDoc={course.lessons[0].contents[0].videoRetrievalId}
                          src={`${
                            course.lessons[currentLesson[0]].contents[
                              currentLesson[1]
                            ].videoRetrievalId
                          }&autoplay=1&controls=1`}
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
                  <Skeleton isLoaded={!loadingCourse}>
                    <Box
                      bgColor="white"
                      mt="36px"
                      pb="56px"
                      borderRadius="12px 12px 0px 0px"
                      mb="70px"
                    >
                      <LessonTab
                        resources={
                          course.lessons[currentLesson[0]].contents[
                            currentLesson[1]
                          ].resources
                        }
                        overview={
                          course.lessons[currentLesson[0]].contents[
                            currentLesson[1]
                          ].overview
                        }
                        manual={
                          course.lessons[currentLesson[0]].contents[
                            currentLesson[1]
                          ].manual
                        }
                      />
                    </Box>
                  </Skeleton>
                </Box>
                <Skeleton isLoaded={!loadingCourse}>
                  <LessonManual
                    manual={
                      course.lessons[currentLesson[0]].contents[
                        currentLesson[1]
                      ].manual
                    }
                  />
                </Skeleton>
              </Flex>

              <Skeleton isLoaded={!loadingCourse}>
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
      {course.lessons[currentLesson[0]].contents[currentLesson[1]].hasQuiz && (
        <TestModal
          testLink={
            course.lessons[currentLesson[0]].contents[currentLesson[1]].quizUrl
          }
          id={course.lessons[currentLesson[0]].contents[currentLesson[1]].id}
          title={
            course.lessons[currentLesson[0]].contents[currentLesson[1]].title
          }
          onTestModalCLose={() => {
            setTestmodalOpen(false);
          }}
          isOpen={testModalOpen}
          goToNext={goToNext}
        />
      )}
      <CourseCompletedModal
        isOpen={openCourseCompleteModal}
        onClose={() => {
          router.push(`/course/${course.id}`)
          // setOpenCourseCompleteModal(false);
        }}
        courseTitle={course.title}
      />
    </>
  );
};

export default PrivatePage(LessonPage);
