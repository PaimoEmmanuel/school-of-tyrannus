import { NextPage } from "next";
import Footer from "../components/organisms/footer";
import NavigationBar from "../components/organisms/navigation-bar";

const userDashboard: NextPage = () => {
    return (
        <>
            <NavigationBar />
            <Footer />
        </>
    );
}
export default userDashboard;