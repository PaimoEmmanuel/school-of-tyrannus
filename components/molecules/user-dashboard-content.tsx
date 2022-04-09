import { Box } from "@chakra-ui/react";
import CourseTab from "../templates/course-tab";
import UserDashboardTab from "../templates/user-dashboard-tab";


interface IUserDashboardContentProps { };

const UserDashboardContent: React.FunctionComponent<IUserDashboardContentProps> = () => {
    return (
        <Box>
            <Box
                display="flex"
                flexDir="column"

                pos="absolute"
                maxW="1090px"
                top="603px" left="175px"
                h="38px">

                {/* <CourseTab /> */}
                <UserDashboardTab />
            </Box>
        </Box>
    )
}

export default UserDashboardContent;