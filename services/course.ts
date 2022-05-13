import { request } from ".";
import getUser from "../utils/get-user";

export const getAllCourses = () => {
  return request.get(`/Course/RetrieveAll`);
};

export const getCourse = (id: string) => {
  return request.get(`/LandingPage/RetrieveCourseById/${id}`);
};
export const getCourseDetails = (id: string) => {
  return request.get(`/LandingPage/RetrieveCourseByIdExplicitly/${id}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
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

export const startContent = (contentId: string) => {
  return request.get(`LandingPage/StartContent/${contentId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};

export const finishContent = (contentId: string) => {
  return request.get(`LandingPage/FinishContent/${contentId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};

export const takeQuiz = (contentId: string) => {
  return request.get(`LandingPage/TakeQuiz/${contentId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};
