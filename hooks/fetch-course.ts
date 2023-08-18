import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/course-context";
import { getCourseDetails } from "../services/course";
import useEnrolledForCourse from "./enrolled-course";

const useFetchCourse = () => {
  const { setCourseDetails } = useContext(CourseContext);
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
        setCourseDetails(res.data);
        setLoadingCourse(false);
      });
    }
  }, [query, loadingEnrolled, shouldGoToLesson, router, setCourseDetails]);

  return { loadingCourse };
};

export default useFetchCourse;
