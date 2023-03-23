import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCourseDetails } from "../services/course";
import { ICourseLessons } from "../types/course";

const defaultCourse: ICourseLessons = {
  title: "",
  id: "",
  lessons: [
    {
      title: "",
      contents: [
        {
          title: "",
          hasQuiz: true,
          quizUrl: "",
          videoRetrievalId: "",
          id: "",
          userStatus: {
            contentStatus: "",
            quizStatus: "",
          },
          resources: [{ title: "", link: "" }],
          overview: "",
          manual: "",
        },
      ],
    },
  ],
};
const useFetchCourse = () => {
  const [course, setCourse] = useState<ICourseLessons>(defaultCourse);
  const [loadingCourse, setLoadingCourse] = useState(true);
  const router = useRouter();
  const query = router.query;
  useEffect(() => {
    if (!query.course) {
      return;
    }
    getCourseDetails(String(query.course)).then((res) => {
      console.log(res.data);

      setCourse(res.data);
      setLoadingCourse(false);
    });
  }, [query.course]);

  const setContentToCompleted = (lesson: [number, number]) => {
    const newCourseObject = { ...course };
    if (newCourseObject.lessons[lesson[0]].contents[lesson[1]].hasQuiz) {
      newCourseObject.lessons[lesson[0]].contents[
        lesson[1]
      ].userStatus.quizStatus = "Completed";
      newCourseObject.lessons[lesson[0]].contents[
        lesson[1]
      ].userStatus.contentStatus = "Completed";
    } else {
      newCourseObject.lessons[lesson[0]].contents[
        lesson[1]
      ].userStatus.contentStatus = "Completed";
    }
    setCourse({ ...newCourseObject });
  };
  return { course, loadingCourse, setContentToCompleted };
};

export default useFetchCourse;
