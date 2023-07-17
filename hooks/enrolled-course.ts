import { useContext, useEffect, useState } from "react";
import { getCourseEnrollmentStatus } from "../services/course";
import { useRouter } from "next/router";
import { UserContext } from "../context/user-context";
import { useToast } from "@chakra-ui/react";

const useEnrolledForCourse = () => {
  const [enrollmentStatus, setEnrollmentStatus] = useState("");
  const [loadingEnrolled, setLoadingEnrolled] = useState(true);
  const [shouldGoToLesson, setShouldGoToLesson] = useState(false);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const toast = useToast();
  const query = router.query;
  useEffect(() => {
    if (!user.isLoggedIn) {
      return setLoadingEnrolled(false);
    }
    if (query.course && query.course.length) {
      getCourseEnrollmentStatus(String(query.course))
        .then((res) => {
          setEnrollmentStatus(res.data.courseStatus);
          if (res.data.courseStatus === "Applied") {
            setShouldGoToLesson(false);
          } else if (res.data.courseStatus === "Started") {
            setShouldGoToLesson(true);
          } else if (res.data.courseStatus === "Completed") {
            setShouldGoToLesson(true);
          } else if (res.data.courseStatus === "Enrolled") {
            if (res.data.inSession) {
              setShouldGoToLesson(true);
            } else {
              setShouldGoToLesson(false);
            }
          }
          setLoadingEnrolled(false);
        })
        .catch((err) => {
          toast({
            description: "An error occurred, please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          setLoadingEnrolled(false);
        });
    }
  }, [query.course, toast, user.isLoggedIn]);
  return { loadingEnrolled, enrollmentStatus, shouldGoToLesson };
};

export default useEnrolledForCourse;
