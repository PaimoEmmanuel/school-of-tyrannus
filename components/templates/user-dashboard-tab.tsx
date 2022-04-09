import { Tab, TabList, Tabs } from "@chakra-ui/react";


const UserDashboardTab: React.FC = ({ }) => {
    return (
        <Tabs>
            <TabList mx="175px">
                <Tab
                    _selected={{
                        borderBottom: "3px solid #0B0966",
                        color: "text.deepBlue",
                        fontWeight: "600",
                    }}
                    _focus={{ outline: "none" }}
                >
                    My Courses
                </Tab>

                <Tab
                    _selected={{
                        borderBottom: "3px solid #0B0966",
                        color: "text.deepBlue",
                        fontWeight: "600",
                    }}
                    _focus={{ outline: "none" }}
                >
                    Available Courses
                </Tab>

                <Tab
                    _selected={{
                        borderBottom: "3px solid #0B0966",
                        color: "text.deepBlue",
                        fontWeight: "600",
                    }}
                    _focus={{ outline: "none" }}
                >
                    History
                </Tab>

                <Tab
                    _selected={{
                        borderBottom: "3px solid #0B0966",
                        color: "text.deepBlue",
                        fontWeight: "600",
                    }}
                    _focus={{ outline: "none" }}
                >
                    Saved Course
                </Tab>

                <Tab
                    _selected={{
                        borderBottom: "3px solid #0B0966",
                        color: "text.deepBlue",
                        fontWeight: "600",
                    }}
                    _focus={{ outline: "none" }}
                >
                    Updates
                </Tab>
            </TabList>
        </Tabs>
    );

}

export default UserDashboardTab;
