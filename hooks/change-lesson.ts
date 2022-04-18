import { useEffect, useState } from "react";

interface Lessons {
  title: string;
  contents: { title: string; videoRetrievalId: string }[];
}

const useChangeLesson = (lessons: Lessons[]) => {
  // First value for changing lesson, second value for changing the content/video
  const [currentLesson, setCurrentLesson] = useState([0, 0]);
  const [isFirstContent, setIsFirstContent] = useState(true);
  const [isLastContent, setIsLastContent] = useState(false);
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

  useEffect(() => {}, [currentLesson]);

  const goToNext = () => {
    if (currentLesson[0] < lessons.length - 1) {
      if (currentLesson[1] < lessons[currentLesson[0]].contents.length - 1) {
        return setCurrentLesson([currentLesson[0], currentLesson[1] + 1]);
      }
      if (currentLesson[1] === lessons[currentLesson[0]].contents.length - 1) {
        return setCurrentLesson([currentLesson[0] + 1, 0]);
      }
    }
    return;
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
  return { currentLesson, goToPrev, goToNext, isFirstContent, isLastContent, setCurrentLesson };
};

export default useChangeLesson;
