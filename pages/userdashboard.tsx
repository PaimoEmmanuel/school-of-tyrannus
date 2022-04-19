import type { NextPage } from "next";
import UserDashboardBanner from "../components/molecules/user-dashboard-banner";
import UserDashboardContent from "../components/molecules/user-dashboard-content";
import Footer from "../components/organisms/footer";
import NavigationBar from "../components/organisms/navigation-bar";

const UserDashboard: NextPage = () => {
    return (
        <>
            <NavigationBar />
            <UserDashboardBanner />
            <UserDashboardContent />
            <Footer />
        </>

    );
}
export default UserDashboard