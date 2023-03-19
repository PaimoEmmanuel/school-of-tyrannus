import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getContentTakenStatus } from "../services/course";
import { ICourseLessons } from "../types/course";

const useChangeLesson = (
  lessonsLoading: boolean,
  lessons: ICourseLessons["lessons"],
  setContentToCompleted: (lesson: [number, number]) => void
) => {
  // First value for changing lesson, second value for changing the content/video
  const [currentLesson, setCurrentLesson] = useState<[number, number]>([0, 0]);
  const [isFirstContent, setIsFirstContent] = useState(true);
  const [isLastContent, setIsLastContent] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [currentLessonStatus, setCurrentLessonStatus] = useState({
    videoStatus: "",
    quizStatus: "",
  });
  const toast = useToast();

  useEffect(() => {
    if (lessonsLoading) {
      return;
    }
    getContentTakenStatus(
      String(lessons[currentLesson[0]].contents[currentLesson[1]].id)
    ).then((res) => {
      // console.log("content taken status:", res.data);

      setCurrentLessonStatus({
        videoStatus: res.data.contentStatus,
        quizStatus: res.data.quizStatus,
      });
    });
    //   When it is the first lesson
    if (currentLesson[0] === 0 && currentLesson[1] === 0) {
      setIsFirstContent(true);
    } else {
      setIsFirstContent(false);
    }
    // When it is the last lesson
    if (
      currentLesson[0] === lessons.length - 1 &&
      currentLesson[1] === lessons[lessons.length - 1].contents.length - 1
    ) {
      setIsLastContent(true);
    } else {
      setIsLastContent(false);
    }
  }, [currentLesson, lessons, lessonsLoading]);

  useEffect(() => {
    if (nextDisabled) {
      toast({
        title: "Can't proceed.",
        description: "Finish current lesson to proceed to the next.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [nextDisabled, toast]);

  const goToLesson = (lesson: [number, number]) => {
    setNextDisabled(false);
    setLoadingContent(true);
    const prevLessonId =
      Number(lessons[lesson[0]].contents[lesson[1]].id) === 1
        ? 1
        : Number(lessons[lesson[0]].contents[lesson[1]].id) - 1;
    getContentTakenStatus(String(prevLessonId)).then((res) => {
      if (
        lessons[lesson[0]].contents[lesson[1]].hasQuiz &&
        res.data.quizStatus !== "Completed"
      ) {
        setNextDisabled(true);
        return setLoadingContent(false);
      } else if (res.data.contentStatus !== "Completed") {
        setNextDisabled(true);
        return setLoadingContent(false);
      }
      setCurrentLesson(lesson);
      setLoadingContent(false);
    });
  };

  const goToNext = () => {
    setNextDisabled(false);
    setLoadingContent(true);
    getContentTakenStatus(
      String(lessons[currentLesson[0]].contents[currentLesson[1]].id)
    )
      .then((res) => {
        if (
          lessons[currentLesson[0]].contents[currentLesson[1]].hasQuiz &&
          res.data.quizStatus !== "Completed"
        ) {
          setNextDisabled(true);
          return setLoadingContent(false);
        } else if (res.data.contentStatus !== "Completed") {
          setNextDisabled(true);
          return setLoadingContent(false);
        }
        if (currentLesson[0] < lessons.length - 1) {
          if (
            currentLesson[1] <
            lessons[currentLesson[0]].contents.length - 1
          ) {
            setContentToCompleted(currentLesson);
            setCurrentLesson([currentLesson[0], currentLesson[1] + 1]);
            return setLoadingContent(false);
          }
          if (
            currentLesson[1] ===
            lessons[currentLesson[0]].contents.length - 1
          ) {
            setContentToCompleted(currentLesson);
            setCurrentLesson([currentLesson[0] + 1, 0]);
            return setLoadingContent(false);
          }
        }
        return;
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

  const goToPrev = () => {
    if (currentLesson[0] === 0 && currentLesson[1] === 0) {
      return;
    }
    if (currentLesson[1] > 0) {
      return setCurrentLesson([currentLesson[0], currentLesson[1] - 1]);
    }
    if (currentLesson[1] === 0) {
      return setCurrentLesson([
        currentLesson[0] - 1,
        lessons[currentLesson[0] - 1].contents.length - 1,
      ]);
    }
  };

  return {
    currentLesson,
    goToPrev,
    goToNext,
    isFirstContent,
    isLastContent,
    goToLesson,
    loadingContent,
    currentLessonStatus,
  };
};

export default useChangeLesson;
