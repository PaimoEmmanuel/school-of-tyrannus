import { useToast } from "@chakra-ui/react";
import Player from "@vimeo/player";
import { useEffect, useState } from "react";
import {
  completeCourse,
  finishContent,
  startContent,
} from "../services/course";
import { ICourseLessons } from "../types/course";

interface course {
  title: string;
  id: string;
  lessons: {
    title: string;
    contents: { title: string; videoRetrievalId: string; id: string }[];
  }[];
}
const useMonitorContentStatus = (
  loadingCourse: boolean,
  course: ICourseLessons,
  currentLesson: number[],
  loadingContent: boolean,
  setLoadContent: (value: boolean) => void,
  goToNext: () => void
) => {
  const [testModalOpen, setTestmodalOpen] = useState(false);
  const [openCourseCompleteModal, setOpenCourseCompleteModal] = useState(false);
  const [lastCourseContent, setLastCourseContent] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (
      course.lessons.length - 1 === currentLesson[0] &&
      course.lessons[currentLesson[0]].contents.length - 1 === currentLesson[1]
    ) {
      setLastCourseContent(true);
    } else {
      setLastCourseContent(false);
    }
  }, [course, currentLesson]);
  useEffect(() => {
    setTestmodalOpen(false);
  }, [currentLesson]);

  // Call completeCourse endpoint if it is the last content of the last lesson
  const handleCourseCompleted = () => {
    setLoadContent(true);
    completeCourse(course.id)
      .then((res) => {
        setLoadContent(false);
        setOpenCourseCompleteModal(true);
      })
      .catch((err) => {
        toast({
          description: "An error occurred, please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleFinishContent = () => {
    if (
      (course.lessons[currentLesson[0]].contents[currentLesson[1]].hasQuiz &&
        course.lessons[currentLesson[0]].contents[currentLesson[1]].userStatus
          .quizStatus === "Completed") ||
      (!course.lessons[currentLesson[0]].contents[currentLesson[1]].hasQuiz &&
        course.lessons[currentLesson[0]].contents[currentLesson[1]].userStatus
          .contentStatus === "Completed")
    ) {
      if (lastCourseContent) {
        return setOpenCourseCompleteModal(true);
      }
      return goToNext();
    }
    setLoadContent(true);
    finishContent(
      course.lessons[currentLesson[0]].contents[currentLesson[1]].id
    )
      .then((res) => {
        setLoadContent(false);
        if (
          course.lessons[currentLesson[0]].contents[currentLesson[1]].hasQuiz &&
          course.lessons[currentLesson[0]].contents[currentLesson[1]].userStatus
            .quizStatus !== "Completed"
        ) {
          setTestmodalOpen(true);
        } else if (lastCourseContent) {
          handleCourseCompleted();
        } else {
          goToNext();
        }
      })
      .catch((err) => {
        toast({
          description: "Error in finishing content",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    if (loadingCourse) {
      return;
    }
    const iframe = document.querySelector("#video-iframe") as HTMLIFrameElement;

    if (iframe) {
      const player = new Player(iframe);
      player.on("play", () => {
        startContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            player.off("play");
          })
          .catch((err) => {});
      });
      player.getDuration().then(function (duration) {
        player.on("timeupdate", (data) => {
          if (data.seconds > duration * 0.8) {
            finishContent(
              course.lessons[currentLesson[0]].contents[currentLesson[1]].id
            )
              .then((res) => {})
              .catch((err) => {});
          }
        });
      });
      player.on("ended", () => {
        handleFinishContent();

        player.off("ended");
      });
    }
  }, [
    // course.id,
    // course.lessons,
    currentLesson,
    // goToNext,
    loadingContent,
    loadingCourse,
    // toast,
  ]);
  return {
    testModalOpen,
    setTestmodalOpen,
    openCourseCompleteModal,
    setOpenCourseCompleteModal,
  };
};
export default useMonitorContentStatus;
