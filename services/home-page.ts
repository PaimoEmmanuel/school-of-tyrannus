import {request} from "./index";
import getUser from "../utils/get-user";

export const getLandingPageCourses = () => {
  return request.get(`/LandingPage/RetrieveAllGroupedCourses`, {headers: {"Authorization": `Bearer ${getUser().token}`}});
};