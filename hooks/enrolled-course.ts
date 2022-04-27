import {useContext, useEffect, useState} from "react";
import {getCourseEnrollmentStatus} from "../services/course";
import {useRouter} from "next/router";
import {UserContext} from "../context/user-context";

const useEnrolledForCourse = () => {
  const [enrolled, setEnrolled] = useState(false)
  const [loadingEnrolled, setLoadingEnrolled] = useState(true)
  const {user} = useContext(UserContext);
  const router = useRouter();
  const query = router.query;
  useEffect(() => {
    if (!user.isLoggedIn) {
      return setLoadingEnrolled(false)
    }
    getCourseEnrollmentStatus(String(query.course)).then((res) => {
      setEnrolled(res.data.enrolled)
      setLoadingEnrolled(false)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return {loadingEnrolled, enrolled}
}

export default useEnrolledForCourse