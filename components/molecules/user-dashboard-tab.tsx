import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";


const UserDashboardTab: React.FC = ({ }) => {
    return (
        <Tabs mt="100" mb="50" mx="175" maxW="10000">
            <TabList height="50">
                <Tab
                    mr="10"
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
                    mr="10"
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
                    mr="10"
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
                    mr="10"
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
