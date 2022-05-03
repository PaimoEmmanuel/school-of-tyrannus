import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { enrollCourse } from "../services/course";
import useEnrolledForCourse from "./enrolled-course";

const useCourseEnrol = () => {
  const router = useRouter();
  const query = router.query;
  // const {user} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { loadingEnrolled, enrolled } = useEnrolledForCourse();
  const onEnrol = () => {
    if (!loadingEnrolled) {
      setError("");
      if (enrolled) {
        return setLoading(false);
      }
      enrollCourse(Number(query.course))
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setLoading(false);
          } else {
            setLoading(false);
            setError("An error occurred, please try again.");
          }
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred, please try again.");
          console.log(err.response);
        });
    }
  };
  useEffect(onEnrol, [loadingEnrolled]);
  return { loading, error };
};

export default useCourseEnrol;
