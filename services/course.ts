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
  return request.get(`LandingPage/RetrieveUsersCourseStatus/${id}`, {
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

export const saveTimeStamp = (contentId: number, timeStamp: number) =>
  request.post(
    `LandingPage/UpdateUserContentTimeStamp/${contentId}?time=${timeStamp}`,
    {},
    {
      headers: { Authorization: `Bearer ${getUser().token}` },
    }
  );

export const finishVideoContent = (contentId: string) => {
  return request.get(`LandingPage/FinishContent/${contentId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};

export const takeQuiz = (contentId: string) => {
  return request.get(`LandingPage/TakeQuiz/${contentId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};

export const completeCourse = (courseId: string) => {
  return request.get(`LandingPage/CompleteACourse/${courseId}`, {
    headers: { Authorization: `Bearer ${getUser().token}` },
  });
};
