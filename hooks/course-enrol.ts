import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import { enrollCourse } from "../services/course";

const useCourseEnrol = (
  courseId: number,
  enrolledForCourse: boolean,
  loadingEnrolled: boolean
) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();
  const { user } = useContext(UserContext);

  const onEnrol = () => {
    if (!user.isLoggedIn) {
      return router.push("/signin?redirect=" + router.asPath);
    }
    if (!loadingEnrolled) {
      setError("");
      if (enrolledForCourse) {
        return router.push(`${courseId}/lesson`);
      }
      setLoading(true);
      enrollCourse(courseId)
        .then((res) => {
          if (res.data.courseType === "Regular") {
            router.push(`${courseId}/lesson`);
          } else {
            if (res.data.isSuccessful) {
              toast({
                description: res.data.responseMessage,
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            } else {
              toast({
                description: res.data.responseMessage,
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred, please try again.");
          toast({
            description: "An error occurred, please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };
  return { onEnrol, loading, error };
};

export default useCourseEnrol;
