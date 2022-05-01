import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Grid,
    GridItem
} from "@chakra-ui/react";
import CourseInProgressCard from "../organisms/course-in-progress-card";


export interface ICoursesInProgressProps { };

const CoursesInProgress: React.FunctionComponent<ICoursesInProgressProps> = () => {
    return (
        <Accordion defaultIndex={[0]}
            allowMultiple allowToggle
            mx='175px' mb='50px'
        >
            <AccordionItem>
                <AccordionButton>
                    <Box flex='1' textAlign='left' textColor='black'>My Courses (In progress)</Box>
                    <Box flex='1' textAlign='right' textColor='rgba(19, 18, 117, 1)'> show more </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Grid flexDirection='row' gap={2} >
                        <GridItem>
                            <CourseInProgressCard id={0} title={""} value={0} completed={false} lessonCount={0} contentCount={0} maxValue={0} />
                        </GridItem>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default CoursesInProgress;