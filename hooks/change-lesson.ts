import { useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/course-context";
import { getContentTakenStatus } from "../services/course";
import { ICourseLessons } from "../types/course";
import useLessonHelpers from "./lesson-helpers";

const useChangeLesson = () => {
  const {
    courseDetails,
    currentLesson,
    currentLessonIndex,
    setCurrentLessonIndex,
  } = useContext(CourseContext);
  const { getPreviousLesson } = useLessonHelpers();
  const toast = useToast();

  const triggerToast = () => {
    toast({
      title: "Can't proceed.",
      description:
        "Finish current lesson and take test to proceed to the next.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const goToLesson = (lessonIndex: [number, number]) => {
    if (
      getPreviousLesson(lessonIndex).hasQuiz &&
      getPreviousLesson(lessonIndex).userStatus.quizStatus !== "Completed"
    ) {
      triggerToast();
    } else if (
      getPreviousLesson(lessonIndex).userStatus.contentStatus !== "Completed"
    ) {
      triggerToast();
    } else {
      setCurrentLessonIndex(lessonIndex);
    }
  };

  const goToNext = () => {
    if (
      currentLesson.hasQuiz &&
      currentLesson.userStatus.quizStatus !== "Completed"
    ) {
      return triggerToast();
    } else if (currentLesson.userStatus.contentStatus !== "Completed") {
      return triggerToast();
    }
    // Update current lesson to next lesson
    if (currentLessonIndex[0] === courseDetails.lessons.length - 1) {
      return;
    } else if (
      currentLessonIndex[1] <
      courseDetails.lessons[currentLessonIndex[0]].contents.length - 1
    ) {
      setCurrentLessonIndex([currentLessonIndex[0], currentLessonIndex[1] + 1]);
    } else if (
      currentLessonIndex[1] ===
      courseDetails.lessons[currentLessonIndex[0]].contents.length - 1
    ) {
      return setCurrentLessonIndex([currentLessonIndex[0] + 1, 0]);
    }
  };

  const goToPrev = () => {
    if (currentLessonIndex[0] === 0 && currentLessonIndex[1] === 0) {
      return;
    } else if (currentLessonIndex[1] > 0) {
      return setCurrentLessonIndex([
        currentLessonIndex[0],
        currentLessonIndex[1] - 1,
      ]);
    } else if (currentLessonIndex[1] === 0 && currentLessonIndex[0] > 0) {
      return setCurrentLessonIndex([
        currentLessonIndex[0] - 1,
        courseDetails.lessons[currentLessonIndex[0] - 1].contents.length - 1,
      ]);
    }
  };

  return {
    goToPrev,
    goToNext,
    goToLesson,
  };
};

export default useChangeLesson;
