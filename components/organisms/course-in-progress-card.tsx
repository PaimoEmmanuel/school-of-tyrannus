import { Box, Img } from "@chakra-ui/react";

export interface ICourseInProgressCard {
    id: number;
    title: string;
    percentageValue: number;
    completed?: boolean
    lessonCount: number;
    contentCount: number;
};

const CourseInProgressCard: React.FC<ICourseInProgressCard> = ({ }) => {
    return (
        <Box
            bg="white"
            borderRadius="4px"
            overflow="hidden"
            filter="drop-shadow(2px 7px 18px rgba(67, 108, 212, 0.13))"
            h="100%"
        >
            <Img
                height="114px"
                w="100%"
                objectFit="cover"
                src="/assets/images/course-card-img.png" />

        </Box>
    );
}
export default CourseInProgressCard