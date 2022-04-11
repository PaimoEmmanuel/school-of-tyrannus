import { NextPage } from "next";
import UserDashboardBanner from "../components/molecules/user-dashboard-banner";
import UserDashboardContent from "../components/molecules/user-dashboard-content";
import Footer from "../components/organisms/footer";
import NavigationBar from "../components/organisms/navigation-bar";

const UserDashboard: NextPage = () => {
    return (
        <div>
            <div>
                <NavigationBar />
                <UserDashboardBanner />
            </div>
            <div>
                <UserDashboardContent />
            </div>
            <Footer />
        </div>

    );
}
export default UserDashboard;