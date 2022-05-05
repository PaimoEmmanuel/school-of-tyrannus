import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getContentTakenStatus } from "../services/course";

interface Lessons {
  title: string;
  contents: { title: string; videoRetrievalId: string; id: number }[];
}

const useChangeLesson = (lessons: Lessons[]) => {
  // First value for changing lesson, second value for changing the content/video
  const [currentLesson, setCurrentLesson] = useState([0, 0]);
  const [isFirstContent, setIsFirstContent] = useState(true);
  const [isLastContent, setIsLastContent] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const toast = useToast();

  useEffect(() => {
    //   When it is the first lesson
    if (currentLesson[0] === 0 && currentLesson[1] === 0) {
      setIsFirstContent(true);
    } else {
      setIsFirstContent(false);
    }
    // When it is the last lesson
    if (
      currentLesson[0] === lessons.length - 1 &&
      currentLesson[1] === lessons[length - 1].contents.length - 1
    ) {
      setIsLastContent(true);
    } else {
      setIsLastContent(false);
    }
  }, [currentLesson, lessons]);

  useEffect(() => {
    if (nextDisabled) {
      toast({
        title: "Can't proceed.",
        description: "Can't go, you never finish this one",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [nextDisabled, toast]);

  const goToNext = () => {
    setNextDisabled(false);
    setLoadingContent(true);
    getContentTakenStatus(
      String(lessons[currentLesson[0]].contents[currentLesson[1]].id)
    )
      .then((res) => {
        if (res.data.contentStatus === "NotStarted") {
          setNextDisabled(true);
          return setLoadingContent(false);
        }
        if (currentLesson[0] < lessons.length - 1) {
          if (
            currentLesson[1] <
            lessons[currentLesson[0]].contents.length - 1
          ) {
            setCurrentLesson([currentLesson[0], currentLesson[1] + 1]);
            return setLoadingContent(false);
          }
          if (
            currentLesson[1] ===
            lessons[currentLesson[0]].contents.length - 1
          ) {
            setCurrentLesson([currentLesson[0] + 1, 0]);
            return setLoadingContent(false);
          }
        }
        return;
      })
      .catch((err) => {
        console.log(err);
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
    setCurrentLesson,
    loadingContent,
  };
};

export default useChangeLesson;
