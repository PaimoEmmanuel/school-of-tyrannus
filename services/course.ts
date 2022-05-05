import { request } from ".";
import getUser from "../utils/get-user";

export const getAllCourses = () => {
  return request.get(`/Course/RetrieveAll`);
};

export const getCourse = (id: string) => {
  return request.get(`/LandingPage/RetrieveCourseById/${id}`);
};
export const getCourseDetails = (id: string) => {
  return request.get(`Course/RetrieveById/${id}`);
};

export const enrollCourse = (id: number) => {
  return request.get(`LandingPage/EnrollForACourse/${id}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};

export const getCourseEnrollmentStatus = (id: string) => {
  return request.get(`LandingPage/RetrieveUsersCourseStatus/1`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};

export const getContentTakenStatus = (contentId: string) => {
  return request.get(`LandingPage/RetrieveUsersContentStatus/${contentId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};
