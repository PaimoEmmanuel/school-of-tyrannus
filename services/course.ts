import { request } from ".";

export const getAllCourses = () => {
    return request.get(`/Course/RetrieveAll`);
};

export const getCourse = (id: string) => {
    return request.get(`/LandingPage/RetrieveCourseById/${id}`);
}
export const getCourseDetails = (id: string) => {
    return request.get(`Course/RetrieveById/${id}`);
}