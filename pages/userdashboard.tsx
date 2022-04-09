import { NextPage } from "next";
import UserDashboardBanner from "../components/molecules/user-dashboard-banner";
import UserDashboardContent from "../components/molecules/user-dashboard-content";
import Footer from "../components/organisms/footer";
import NavigationBar from "../components/organisms/navigation-bar";

const UserDashboard: NextPage = () => {
    return (
        <div className="">
            <div>
                <NavigationBar />
                <UserDashboardBanner />
                <UserDashboardContent />
                <Footer />
            </div>
        </div>
    );
}
export default UserDashboard;