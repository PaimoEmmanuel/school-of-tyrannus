import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import CourseCard from "../organisms/course-card";
import HomeCourseTemplate from "../templates/home-course-template";

export interface ICoursesInactiveProps { };

const CoursesInactive: React.FC<ICoursesInactiveProps> = () => {
    return (
        <Accordion defaultIndex={[0]}
            allowMultiple allowToggle
            mx='175px' mb='50px'>
            <AccordionItem>
                <AccordionButton>
                    <Box flex='1' textAlign='left' textColor='black'>My Courses (In active)</Box>
                    <Box flex='1' textAlign='right' textColor='deepBlue'>
                        show more
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    {/* <CourseCard title={""} lessonsCount={0} contentsCount={0} id={0} /> */}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default CoursesInactive;