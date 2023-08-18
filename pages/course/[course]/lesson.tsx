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
import { useCallback, useContext, useEffect, useState } from "react";
import Player from "@vimeo/player";
import { saveTimeStamp } from "../../../services/course";
import { useRouter } from "next/router";
import { CourseContext } from "../../../context/course-context";

const LessonPage: NextPage = () => {
  const {
    courseDetails,
    currentLesson,
    currentLessonIndex,
    isFirstContent,
    isLastContent,
  } = useContext(CourseContext);

  const { loadingCourse } = useFetchCourse();
  const { goToPrev, goToNext, goToLesson } = useChangeLesson();

  const {
    testModalOpen,
    setTestmodalOpen,
    openCourseCompleteModal,
    loadContent,
    handleTakeQuiz,
  } = useMonitorContentStatus(loadingCourse, goToNext);
  const toast = useToast();

  return (
    <>
      <Head>
        <title>{courseDetails.title} - School of Tyrannus</title>
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
                  if (currentLesson.userStatus.contentStatus === "Completed") {
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
                currentLessonIndex={currentLessonIndex}
                lessons={courseDetails.lessons}
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
                {courseDetails.title}
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
                  {loadContent ? (
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
                        !loadingCourse && !!currentLesson.videoRetrievalId
                      }
                    >
                      <Box
                        id="content-video"
                        pos="relative"
                        padding="56.5% 0 0 0"
                        role="group"
                      >
                        <iframe
                          id="video-iframe"
                          src={`${currentLesson.videoRetrievalId}&autoplay=1&controls=1`}
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
                        resources={currentLesson.resources}
                        overview={currentLesson.overview}
                        manual={currentLesson.manual}
                      />
                    </Box>
                  </Skeleton>
                </Box>
                <Skeleton isLoaded={!loadingCourse}>
                  <LessonManual manual={currentLesson.manual} />
                </Skeleton>
              </Flex>

              <Skeleton isLoaded={!loadingCourse}>
                <LessonControl
                  goToNext={goToNext}
                  goToPrev={goToPrev}
                  isFirstContent={isFirstContent}
                  isLastContent={isLastContent}
                  title={currentLesson.title}
                  index={currentLessonIndex[1]}
                />
              </Skeleton>
            </Box>
          </Flex>
        </Box>
      </Box>
      {currentLesson.hasQuiz && (
        <TestModal
          closeModal={() => {
            setTestmodalOpen(false);
          }}
          isOpen={testModalOpen}
          handleTakeQuiz={() => {
            handleTakeQuiz();
          }}
        />
      )}
      <CourseCompletedModal
        isOpen={openCourseCompleteModal}
        courseId={courseDetails.id}
        courseTitle={courseDetails.title}
      />
    </>
  );
};

export default PrivatePage(LessonPage);
