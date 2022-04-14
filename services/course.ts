import { request } from ".";

export const getAllCourses = () => {
    return request.get(`/Course/RetrieveAll`);
};

export const getCourse = (id: string) => {
    return request.get(`/LandingPage/RetrieveCourseById/${id}`)
}