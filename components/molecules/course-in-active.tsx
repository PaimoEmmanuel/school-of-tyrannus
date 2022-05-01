import {
    Accordion,
    AccordionButton,
    AccordionIcon, AccordionItem, AccordionPanel, Box
} from "@chakra-ui/react";
import CourseInactiveCard from "../organisms/course-in-active-card";


export interface ICoursesInactiveProps { };

const CoursesInactive: React.FC<ICoursesInactiveProps> = () => {
    return (
        <Accordion defaultIndex={[1]}
            allowMultiple allowToggle
            mx='175px' mb='10em'>
            <AccordionItem>
                <AccordionButton>
                    <Box flex='1' textAlign='left' textColor='black'>My Courses (In active)</Box>
                    <Box flex='1' textAlign='right' textColor=' rgba(19, 18, 117, 1);
'>
                        show more
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <CourseInactiveCard id={0} title={0} lessonCount={0} contentCount={0} />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default CoursesInactive;