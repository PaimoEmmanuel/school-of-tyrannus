import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box
} from "@chakra-ui/react";
import CourseAboutTab from "../organisms/course-about-tab";
import CourseInProgressCard from "../organisms/course-in-progress-card";


export interface ICoursesInProgressProps { };

const CoursesInProgress: React.FunctionComponent<ICoursesInProgressProps> = () => {
    return (
        <Accordion defaultIndex={[1]}
            allowMultiple allowToggle
            mx='175px' mb='50px'>
            <AccordionItem>
                <AccordionButton>
                    <Box flex='1' textAlign='left' textColor='black'>My Courses (In progress)</Box>
                    <Box flex='1' textAlign='right' textColor='deepBlue'>
                        show more
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <CourseInProgressCard />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default CoursesInProgress;