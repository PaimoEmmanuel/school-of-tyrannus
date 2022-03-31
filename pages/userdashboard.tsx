import { NextPage } from "next";
import UserDashboardBanner from "../components/molecules/user-dashboard-banner";
import Footer from "../components/organisms/footer";
import NavigationBar from "../components/organisms/navigation-bar";

const UserDashboard: NextPage = () => {
    return (
        <div className="">
            <div>
                <NavigationBar />
                <UserDashboardBanner />
                <Footer />
            </div>
        </div>
    );
}
export default UserDashboard;