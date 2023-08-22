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
  const { loadingEnrolled, enrollmentStatus, shouldGoToLesson } =
    useEnrolledForCourse();
  useEffect(() => {
    if (!loadingEnrolled) {
      if (!shouldGoToLesson) {
        router.push(`/course/${query.course}`);
        return;
      }
      if (!query.course) {
        return;
      }
      getCourseDetails(String(query.course)).then((res) => {
        const courseDetail = res.data;
        retrieveLastContent(String(query.course))
          .then((lastContentRes) => {
            const lastWatchedId = lastContentRes.data.contentId;
            courseDetail.lessons.forEach((lesson: any, lessonIndex: number) => {
              const contentIndex = lesson.contents.findIndex(
                (content: any) => content.id === lastWatchedId
              );
              if (contentIndex >= 0) {
                setCourseDetails(courseDetail);
                setCurrentLessonIndex([lessonIndex, contentIndex]);
              }
            });
            setLoadingCourse(false);
          })
          .catch((err) => {
            Bugsnag.notify(err)
            console.log("err", err);
          });
      });
    }
  }, [query, loadingEnrolled, shouldGoToLesson, router, setCourseDetails]);

  return { loadingCourse };
};

export default useFetchCourse;
