import CoursesInactive from "./course-in-active";
import CoursesInProgress from "./courses-in-progress";
import UserDashboardTab from "./user-dashboard-tab";


interface IUserDashboardContentProps { };

const UserDashboardContent: React.FunctionComponent<IUserDashboardContentProps> = () => {
    return (
        <div>
            <UserDashboardTab />
            <CoursesInProgress />
            <CoursesInactive />

        </div>

    )
}

export default UserDashboardContent;