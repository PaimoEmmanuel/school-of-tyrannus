import { useToast } from "@chakra-ui/react";
import Player from "@vimeo/player";
import { useCallback, useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/course-context";
import {
  completeCourse,
  finishVideoContent,
  saveTimeStamp,
  startContent,
  takeQuiz,
} from "../services/course";
import useLessonHelpers from "./lesson-helpers";
import Bugsnag from "@bugsnag/js";

const useMonitorContentStatus = (
  loadingCourse: boolean,
  goToNext: () => void
) => {
  const { courseDetails, currentLessonIndex, currentLesson } =
    useContext(CourseContext);
  const { setVideoToCompleted, setQuizToCompleted, setContentTimeStamp } =
    useLessonHelpers();
  const [testModalOpen, setTestmodalOpen] = useState(false);
  const [openCourseCompleteModal, setOpenCourseCompleteModal] = useState(false);
  const [lastCourseContent, setLastCourseContent] = useState(false);
  const [loadContent, setLoadContent] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (
      courseDetails.lessons.length - 1 === currentLessonIndex[0] &&
      courseDetails.lessons[currentLessonIndex[0]].contents.length - 1 ===
        currentLessonIndex[1]
    ) {
      setLastCourseContent(true);
    } else {
      setLastCourseContent(false);
    }
  }, [courseDetails, currentLessonIndex]);

  useEffect(() => {
    setTestmodalOpen(false);
  }, [currentLessonIndex]);

  // Call completeCourse endpoint if it is the last content of the last lesson
  const handleCourseCompleted = useCallback(() => {
    setLoadContent(true);
    completeCourse(courseDetails.id)
      .then((res) => {
        setLoadContent(false);
        setOpenCourseCompleteModal(true);
      })
      .catch((err) => {
        Bugsnag.notify(err);
        toast({
          description: "An error occurred, please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, [courseDetails.id, toast]);

  const handleFinishContent = useCallback(() => {
    if (
      (currentLesson.hasQuiz &&
        currentLesson.userStatus.quizStatus === "Completed") ||
      (!currentLesson.hasQuiz &&
        currentLesson.userStatus.contentStatus === "Completed")
    ) {
      if (lastCourseContent) {
        return setOpenCourseCompleteModal(true);
      }
      return goToNext();
    }
    setLoadContent(true);
    finishVideoContent(currentLesson.id)
      .then((res) => {
        setVideoToCompleted(currentLessonIndex);
        setLoadContent(false);
        if (currentLesson.hasQuiz) {
          setTestmodalOpen(true);
        } else if (lastCourseContent) {
          handleCourseCompleted();
        } else {
          goToNext();
        }
      })
      .catch((err) => {
        Bugsnag.notify(err);
        toast({
          description: "Error in finishing content",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, [
    currentLesson,
    currentLessonIndex,
    goToNext,
    handleCourseCompleted,
    lastCourseContent,
    setVideoToCompleted,
    toast,
  ]);

  const handleTakeQuiz = () => {
    window.open(currentLesson.quizUrl, "_blank", "popup=1");
    takeQuiz(currentLesson.id).then((res) => {
      setTestLoading(false);
      setQuizToCompleted(currentLessonIndex);
      if (lastCourseContent) {
        handleCourseCompleted();
      } else {
        goToNext();
      }
    });
  };

  useEffect(() => {
    let updateTimeStampBreaker = 0;
    const updateTimeStamp = (time: number) => {
      updateTimeStampBreaker++;
      if (updateTimeStampBreaker > 50) {
        setContentTimeStamp(currentLessonIndex, time);
        saveTimeStamp(Number(currentLesson.id), time)
          .then((res) => {})
          .catch((err) => {
            Bugsnag.notify(err);
          });
        updateTimeStampBreaker = 0;
      }
    };
    if (loadingCourse) {
      return;
    }
    const iframe = document.querySelector("#video-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.onload = () => {
        const player = new Player(iframe);
        player.off("play");
        player.off("ended");
        player.off("timeupdate");
        player.off("seeked");
        player.getDuration().then(function (duration) {
          if (duration > currentLesson.userStatus.timeStamp) {
            player
              .setCurrentTime(currentLesson.userStatus.timeStamp)
              .then((data) => {})
              .catch((err) => {
                Bugsnag.notify(err);
              });
          } else {
            player
              .setCurrentTime(duration - 20)
              .then((data) => {})
              .catch((err) => {
                Bugsnag.notify(err);
              });
          }
        });
        player.on("play", () => {
          startContent(currentLesson.id)
            .then((res) => {
              let breaker = 0;
              player.getDuration().then(function (duration) {
                player.on("timeupdate", (data) => {
                  /*
                   *Call finishVideoContent endpoint roughly every 2.5s when 80% of the content has been watched.
                   *This is to increase chances of a successful API call so user can proceed to  the next lesson.
                   */
                  // Save TimeStammp
                  if (currentLesson.userStatus.timeStamp < data.seconds) {
                    updateTimeStamp(data.seconds);
                  }
                  if (data.seconds > duration * 0.8 && breaker === 20) {
                    breaker = 0;
                    finishVideoContent(currentLesson.id)
                      .then((res) => {
                        setVideoToCompleted(currentLessonIndex);
                      })
                      .catch((err) => {
                        Bugsnag.notify(err);
                      });
                  } else {
                    breaker++;
                  }
                });
              });
              player.on("ended", () => {
                handleFinishContent();
              });
            })
            .catch((err) => {
              Bugsnag.notify(err);
            });
        });
        let timeWatched = currentLesson.userStatus.timeStamp;
        if (currentLesson.userStatus.contentStatus !== "Completed") {
          player.on("timeupdate", function (data) {
            if (data.seconds - 1 < timeWatched && data.seconds > timeWatched) {
              timeWatched = data.seconds;
            }
          });
          player.on("seeked", function (data) {
            if (timeWatched < data.seconds) {
              // -5 to give a padding of 5secs
              player.setCurrentTime(timeWatched - 5);
              toast({
                description:
                  "Finish this lesson to seek (drag the slider) to anywhere in the video)",
                status: "warning",
                duration: 5000,
                isClosable: true,
              });
            }
          });
        }
      };
    }
  }, [
    currentLesson.id,
    currentLesson.userStatus.contentStatus,
    currentLesson.userStatus.timeStamp,
    currentLesson.videoRetrievalId,
    currentLessonIndex,
    handleFinishContent,
    loadingCourse,
    setContentTimeStamp,
    setVideoToCompleted,
    toast,
  ]);
  return {
    testModalOpen,
    setTestmodalOpen,
    openCourseCompleteModal,
    setOpenCourseCompleteModal,
    loadContent,
    handleTakeQuiz,
  };
};
export default useMonitorContentStatus;
