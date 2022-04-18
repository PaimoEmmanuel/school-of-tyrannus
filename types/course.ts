export interface ICourseDetails {
    course: {
        title: string;
        instructors: { name: string; thumbnail: string }[];
        lessons: {
            title: string;
            description: string;
            duration: number;
            contentsCount: number;
            resourcesCount: number;
            contents: {}[];
        }[];
        lessonsCount: number;
        contentsCount: number;
        about: string;
        introVideoRetrievalId: string;
        thumbnail: string;
        totalDuration: number;
        totalResources: number;
    };
}
export interface ICourseTabProps {
    about: string;
    title: string;
    thumbnail: string;
    introVideoRetrievalId: string;
    totalDuration: number;
    totalResources: number;
    instructors: { name: string; thumbnail: string }[];
    lessons: {
        title: string;
        description: string;
        duration: number;
        contents: {}[];
        contentsCount: number;
        resourcesCount: number;
    }[];
}