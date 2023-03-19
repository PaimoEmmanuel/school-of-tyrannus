import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
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

  const onEnrol = () => {
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
                duration: null,
                isClosable: true,
              });
            } else {
              toast({
                description: res.data.responseMessage,
                status: "error",
                duration: null,
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
            duration: null,
            isClosable: true,
          });
        });
    }
  };
  return { onEnrol, loading, error };
};

export default useCourseEnrol;
