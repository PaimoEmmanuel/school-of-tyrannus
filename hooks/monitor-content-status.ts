import Player from "@vimeo/player";
import { useEffect } from "react";
import { finishContent, startContent } from "../services/course";

interface course {
  title: string;
  id: string;
  lessons: {
    title: string;
    contents: { title: string; videoRetrievalId: string; id: string }[];
  }[];
}
const useMonitorContentStatus = (
  course: course,
  currentLesson: number[],
  loading: boolean,
  loadingContent: boolean
) => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const player = new Player(iframe);
      player.on("play", () => {
        startContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            console.log("content succesfully started", res.data);
            player.off("play");
          })
          .catch((err) => {
            console.log("Error in starting content", err.response);
          });
      });

      player.on("ended", () => {
        finishContent(
          course.lessons[currentLesson[0]].contents[currentLesson[1]].id
        )
          .then((res) => {
            console.log("content succesfully finished", res.data);
            player.off("ended");
          })
          .catch((err) => {
            console.log("Error in finishing content", err.response);
          });
      });
    }
  }, [course.lessons, currentLesson, loading, loadingContent]);
};
export default useMonitorContentStatus;
