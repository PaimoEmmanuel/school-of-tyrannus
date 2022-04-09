import { Box, Img, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import UserDashboardVideoPreview from "./user-dashboard-video-preview";

export interface IUserDashboardBannerProps { };

const UserDashboardBanner: React.FunctionComponent<IUserDashboardBannerProps> = () => {
    return (
        <Box
            bg="linear-gradient(91.54deg, rgba(11, 9, 102, 0.8) 27.31%, rgba(22, 16, 135, 0.736) 52.67%)"
            bgSize="cover"
            pos="relative" maxH="430px"
        >

            <Box pos="absolute" right="0" top="64px">
                <svg width="466" height="345" viewBox="0 0 466 345" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.9982 724.258C115.709 417.86 260.357 -42.0276 484.063 49.1432C705.617 139.437 700.265 534.126 665.87 710.29"
                        stroke="#436CD4"
                        strokeOpacity="0.13"
                        strokeWidth="73" />
                </svg>
            </Box>

            <Box pos="absolute" left="0" top="40px">
                <svg width="617" height="394" viewBox="0 0 617 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-137.001 104.88C124.549 34.548 529.612 -45.0815 575.343 232.47C620.634 507.352 332.318 698.898 187.649 751.195"
                        stroke="#436CD4"
                        strokeOpacity="0.13"
                        strokeWidth="73" />
                </svg>
            </Box>

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

        </Box>
    );
}

export default UserDashboardBanner;