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
  // loading: boolean,
  loadingContent: boolean,
  goToNext: () => void
) => {
  const [testModalOpen, setTestmodalOpen] = useState(false);
  const [openCourseCompleteModal, setOpenCourseCompleteModal] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setTestmodalOpen(false);
  }, [currentLesson]);
  useEffect(() => {
    if (loadingCourse) {
      return;
    }
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const player = new Player(iframe);
      player.on("play", () => {
        startContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            player.off("play");
          })
          .catch((err) => {
            toast({
              description: "Error in starting content",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          });
      });
      player.on("ended", () => {
        setTestmodalOpen(true);
      });
      const handleFinishContent = () => {
        finishContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            if (
              course.lessons[currentLesson[0]].contents[currentLesson[1]]
                .hasQuiz
            ) {
              setTestmodalOpen(true);
            } else {
              goToNext();
            }
            player.off("ended", handleFinishContent);
            // Call completeCourse endpoint if it is the last content of the last lesson
            if (
              course.lessons.length - 1 === currentLesson[0] &&
              course.lessons[currentLesson[0]].contents.length ===
                currentLesson[1]
            ) {
              completeCourse(course.id)
                .then((res) => {
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
      player.on("ended", handleFinishContent);
    }
  }, [
    course.id,
    course.lessons,
    currentLesson,
    goToNext,
    loadingContent,
    loadingCourse,
    toast,
  ]);
  return {
    testModalOpen,
    setTestmodalOpen,
    openCourseCompleteModal,
    setOpenCourseCompleteModal,
  };
};
export default useMonitorContentStatus;
