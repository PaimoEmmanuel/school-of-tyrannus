import { useContext } from "react";
import { CourseContext } from "../context/course-context";

const useLessonHelpers = () => {
  const { courseDetails, setCourseDetails, currentLessonIndex } =
    useContext(CourseContext);

  const setVideoToCompleted = (lessonIndex: [number, number]) => {
    const newCourseObject = { ...courseDetails };
    newCourseObject.lessons[lessonIndex[0]].contents[
      lessonIndex[1]
    ].userStatus.contentStatus = "Completed";
    setCourseDetails({ ...newCourseObject });
  };

  const setQuizToCompleted = (lessonIndex: [number, number]) => {
    const newCourseObject = { ...courseDetails };
    if (
      newCourseObject.lessons[lessonIndex[0]].contents[lessonIndex[1]].hasQuiz
    ) {
      newCourseObject.lessons[lessonIndex[0]].contents[
        lessonIndex[1]
      ].userStatus.quizStatus = "Completed";
      newCourseObject.lessons[lessonIndex[0]].contents[
        lessonIndex[1]
      ].userStatus.contentStatus = "Completed";
    }
    setCourseDetails({ ...newCourseObject });
  };

  const setContentTimeStamp = (
    lessonIndex: [number, number],
    timeStamp: number
  ) => {
    const newCourseObject = { ...courseDetails };
    newCourseObject.lessons[lessonIndex[0]].contents[
      lessonIndex[1]
    ].userStatus.timeStamp = timeStamp;
    setCourseDetails({ ...newCourseObject });
  };

  const getPreviousLessonIndex = (lessonIndex: [number, number]) => {
    let prevLesson = [0, 0];
    if (lessonIndex[0] < 1 && lessonIndex[1] < 1) {
    } else if (lessonIndex[0] < 1 && lessonIndex[1] >= 1) {
      prevLesson[1] = lessonIndex[1] - 1;
    } else if (lessonIndex[0] >= 1 && lessonIndex[1] < 1) {
      prevLesson[0] = lessonIndex[0] - 1;
      prevLesson[1] = courseDetails.lessons[prevLesson[0]].contents.length - 1;
    } else if (lessonIndex[0] >= 1 && lessonIndex[1] > 1) {
      prevLesson[0] = lessonIndex[0];
      prevLesson[1] = lessonIndex[1] - 1;
    }
    return prevLesson;
  };
  const getPreviousLesson = (lessonIndex: [number, number]) =>
    courseDetails.lessons[getPreviousLessonIndex(lessonIndex)[0]].contents[
      getPreviousLessonIndex(lessonIndex)[1]
    ];

  return {
    setVideoToCompleted,
    setQuizToCompleted,
    getPreviousLessonIndex,
    getPreviousLesson,
    setContentTimeStamp,
  };
};

export default useLessonHelpers;
