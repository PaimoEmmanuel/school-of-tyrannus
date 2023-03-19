import { useContext, useEffect, useState } from "react";
import { getCourseEnrollmentStatus } from "../services/course";
import { useRouter } from "next/router";
import { UserContext } from "../context/user-context";
import { useToast } from "@chakra-ui/react";

const useEnrolledForCourse = () => {
  const [enrolled, setEnrolled] = useState(false);
  const [loadingEnrolled, setLoadingEnrolled] = useState(true);
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
          setEnrolled(res.data.enrolled);
          setLoadingEnrolled(false);
        })
        .catch((err) => {
          toast({
            description: "An error occurred, please try again.",
            status: "error",
            duration: null,
            isClosable: true,
          });
        });
    }
  }, [query.course, toast, user.isLoggedIn]);
  return { loadingEnrolled, enrolled };
};

export default useEnrolledForCourse;
