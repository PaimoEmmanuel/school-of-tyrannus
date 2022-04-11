import { Box } from "@chakra-ui/react";
import UserDashboardTab from "./user-dashboard-tab";


interface IUserDashboardContentProps { };

const UserDashboardContent: React.FunctionComponent<IUserDashboardContentProps> = () => {
    return (
        <Box>
            <UserDashboardTab />
        </Box>
    )
}

export default UserDashboardContent;