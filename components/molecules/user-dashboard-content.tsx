import { Box } from "@chakra-ui/react";
import UserDashboardTab from "./user-dashboard-tab";


interface IUserDashboardContentProps { };

const UserDashboardContent: React.FunctionComponent<IUserDashboardContentProps> = () => {
    return (
        <div>
            <Box>

            </Box>
            <UserDashboardTab />
        </div>

    )
}

export default UserDashboardContent;