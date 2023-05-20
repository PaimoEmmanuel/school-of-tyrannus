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
    currentLessonStatus,
  } = useChangeLesson(loadingCourse, course.lessons, setContentToCompleted);

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
    goToNext
  );
  const [timeStamp, setTimeStamp] = useState(0);
  const toast = useToast();
  let breaker = 0;
  const updateTimestamp = useCallback(
    (time: number) => {
      breaker++;
      if (breaker > 50) {
        console.log(time);

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
      const iframe = document.querySelector("iframe");
      if (iframe) {
        const player = new Player(iframe);
        player.setCurrentTime(currentLessonStatus.timeStamp).then((sec) => {});
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
                  if (currentLessonStatus.videoStatus === "Completed") {
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
                    <Skeleton isLoaded={!loadingCourse}>
                      <Box pos="relative" padding="56.5% 0 0 0" role="group">
                        {currentLessonStatus.videoStatus === "Completed" ? (
                          ""
                        ) : (
                          <Box
                            as="button"
                            h="4rem"
                            w="4rem"
                            borderRadius="50%"
                            backgroundColor="#DAE0F4"
                            opacity="0"
                            pos="absolute"
                            top="50%"
                            left="50%"
                            display="flex"
                            transition="all .5s"
                            justifyContent="center"
                            alignItems="center"
                            transform="translate(-50%, -50%)"
                            _groupHover={{ opacity: "1" }}
                            zIndex={999}
                            onClick={() => {
                              const iframe = document.querySelector("iframe");
                              if (iframe) {
                                const player = new Player(iframe);
                                if (videoPlaying) {
                                  player
                                    .pause()
                                    .then(() => {
                                      setVideoPlaying(false);
                                    })
                                    .catch((err) => {});
                                } else {
                                  player
                                    .play()
                                    .then(() => {
                                      setVideoPlaying(true);
                                    })
                                    .catch((err) => {});
                                }
                              }
                            }}
                          >
                            {!videoPlaying ? (
                              <svg
                                width="20"
                                height="26"
                                viewBox="0 0 20 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.785156 0.295654L19.5562 12.8097L0.785156 25.3237V0.295654Z"
                                  fill="#333331"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="#000000"
                                viewBox="0 0 256 256"
                              >
                                <path
                                  d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"
                                  fill="#333331"
                                ></path>
                              </svg>
                            )}
                          </Box>
                        )}
                        <iframe
                          // srcDoc={course.lessons[0].contents[0].videoRetrievalId}
                          src={`${
                            course.lessons[currentLesson[0]].contents[
                              currentLesson[1]
                            ].videoRetrievalId
                          }&autoplay=1&controls=${
                            currentLessonStatus.videoStatus === "Completed"
                              ? 1
                              : 0
                          }`}
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
          setOpenCourseCompleteModal(false);
        }}
        courseTitle={course.title}
      />
    </>
  );
};

export default PrivatePage(LessonPage);
