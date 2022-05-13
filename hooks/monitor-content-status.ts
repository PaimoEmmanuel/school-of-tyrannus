import Player from "@vimeo/player";
import { useEffect, useState } from "react";
import { finishContent, startContent } from "../services/course";
import { ICourseLessons } from "../types/course";

interface course {
  title: string;
  id: string;
  lessons: {
    title: string;
    contents: { title: string; videoRetrievalId: string; id: string }[];
  }[];
}
const useMonitorContentStatus = (
  loadingCourse: boolean,
  course: ICourseLessons,
  currentLesson: number[],
  loading: boolean,
  loadingContent: boolean,
  goToNext: () => void,
) => {
  const [testModalOpen, setTestmodalOpen] = useState(false);
  useEffect(() => {
    setTestmodalOpen(false);
  }, [currentLesson]);
  useEffect(() => {
    if (loadingCourse) {
      return;
    }
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const player = new Player(iframe);
      player.on("play", () => {
        startContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            player.off("play");
          })
          .catch((err) => {
            console.log("Error in starting content", err.response);
          });
      });
      player.on("ended", () => {
        setTestmodalOpen(true);
      });
      const handleFinishContent = () => {
        finishContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            if (
              course.lessons[currentLesson[0]].contents[currentLesson[1]]
                .hasQuiz
            ) {
              setTestmodalOpen(true);
            } else {
              goToNext();
            }
            player.off("ended", handleFinishContent);
          })
          .catch((err) => {
            console.log("Error in finishing content", err.response);
          });
      };
      player.on("ended", handleFinishContent);
    }
  }, [course.lessons, currentLesson, goToNext, loading, loadingContent, loadingCourse]);
  return { testModalOpen, setTestmodalOpen };
};
export default useMonitorContentStatus;
