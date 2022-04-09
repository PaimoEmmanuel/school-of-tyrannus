import { Box, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import UserDashboardVideoPreview from "./user-dashboard-video-preview";

export interface IUserDashboardFrameProps { };

const UserDashboardFrame: React.FC<IUserDashboardFrameProps> = () => {
    return (
        <Box p="107px 0 128px 0" ml="175px" maxW="489px" color="white">
            <Text fontWeight="400" fontSize="18px" lineHeight="27px">
                Welcome
            </Text>
            <Text fontWeight="600" fontSize="40px" lineHeight="60px" mb="24px">
                Joshua Balogun
            </Text>
            <Text fontWeight="400" fontSize="14px" lineHeight="21px" mb="20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                A, massa pulvinar lacus posuere pretium ac, turpis molestie.
            </Text>
            <Link href="/courses" passHref>
                <ChakraLink
                    h="50px"
                    w="166px"
                    bgColor="text.orange"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="4px"
                    fontWeight="500"
                    boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"
                    _hover={{ textDecoration: "none" }}
                >
                    View courses
                </ChakraLink>
            </Link>
            <UserDashboardVideoPreview />
        </Box>
    );
}

export default UserDashboardFrame;