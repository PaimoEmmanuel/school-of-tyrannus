import { createContext, useEffect, useState } from "react";
import { ICourseLessons } from "../types/course";
import { defaultCourse } from "../utils/constants";

const defaultValue = {
  courseDetails: defaultCourse,
  setCourseDetails: (courseDetails: ICourseLessons) => {},
  currentLesson: defaultCourse.lessons[0].contents[0],
  currentLessonIndex: [0, 0] as [number, number],
  isFirstContent: true,
  isLastContent: false,
  setCurrentLessonIndex: (currentLessonIndex: [number, number]) => {},
};

export const CourseContext = createContext(defaultValue);

const CourseContextProvider: React.FC = ({ children }) => {
  const [courseDetails, setCourseDetails] =
    useState<ICourseLessons>(defaultCourse);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<
    [number, number]
  >([0, 0]);
  const [currentLesson, setCurrentLesson] = useState(
    defaultCourse.lessons[0].contents[0]
  );
  const [isFirstContent, setIsFirstContent] = useState(true);
  const [isLastContent, setIsLastContent] = useState(false);

  useEffect(() => {
    if (currentLessonIndex[0] === 0 && currentLessonIndex[1] === 0) {
      setIsFirstContent(true);
    } else {
      setIsFirstContent(false);
    }
    // When it is the last lesson
    if (
      currentLessonIndex[0] === courseDetails.lessons.length - 1 &&
      currentLessonIndex[1] ===
        courseDetails.lessons[courseDetails.lessons.length - 1].contents
          .length -
          1
    ) {
      setIsLastContent(true);
    } else {
      setIsLastContent(false);
    }
  }, [currentLessonIndex, courseDetails.lessons]);

  useEffect(() => {
    setCurrentLesson(
      courseDetails.lessons[currentLessonIndex[0]].contents[
        currentLessonIndex[1]
      ]
    );
  }, [courseDetails, currentLessonIndex]);
  return (
    <CourseContext.Provider
      value={{
        courseDetails,
        setCourseDetails,
        currentLesson,
        currentLessonIndex,
        isFirstContent,
        isLastContent,
        setCurrentLessonIndex,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
export default CourseContextProvider;
