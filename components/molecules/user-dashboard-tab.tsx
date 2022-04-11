import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";


const UserDashboardTab: React.FC = ({ }) => {
    return (
        <Tabs mt="100px" mb="30px">
            <TabList mx="370px" height="50px"
                maxW="900px">
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
