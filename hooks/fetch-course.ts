import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/course-context";
import { getCourseDetails, retrieveLastContent } from "../services/course";
import Bugsnag from "@bugsnag/js";
import useEnrolledForCourse from "./enrolled-course";

const useFetchCourse = () => {
  const { setCourseDetails, setCurrentLessonIndex } = useContext(CourseContext);
  const [loadingCourse, setLoadingCourse] = useState(true);
  const router = useRouter();
  const query = router.query;
  const { loadingEnrolled, shouldGoToLesson } = useEnrolledForCourse();
  useEffect(() => {
    if (!loadingEnrolled) {
      if (!shouldGoToLesson) {
        router.push(`/course/${query.course}`);
        return;
      }
      if (!query.course) {
        return;
      }
      getCourseDetails(String(query.course))
        .then((res) => {
          console.log(res.data);
          const courseDetail = res.data;
          setCourseDetails(courseDetail);
          retrieveLastContent(String(query.course))
            .then((lastContentRes) => {
              console.log(lastContentRes);
              if (lastContentRes.data && lastContentRes.data.contentId) {
                const lastWatchedId = lastContentRes.data.contentId;
                courseDetail.lessons.forEach(
                  (lesson: any, lessonIndex: number) => {
                    const contentIndex = lesson.contents.findIndex(
                      (content: any) => content.id === lastWatchedId
                    );
                    if (contentIndex >= 0) {
                      setCurrentLessonIndex([lessonIndex, contentIndex]);
                    }
                  }
                );
              } else {
                setCurrentLessonIndex([0, 0]);
              }
              setLoadingCourse(false);
            })
            .catch((err) => {
              Bugsnag.notify(err);
              console.log("err", err);
            });
        })
        .catch((err) => {
          Bugsnag.notify(err);
        });
    }
  }, [
    query,
    loadingEnrolled,
    shouldGoToLesson,
    router,
    setCourseDetails,
    setCurrentLessonIndex,
  ]);

  return { loadingCourse };
};

export default useFetchCourse;
