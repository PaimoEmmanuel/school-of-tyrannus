import { Box, Img, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

interface IUserDashboardBannerProps { };

const UserDashboardBanner: React.FunctionComponent<IUserDashboardBannerProps> = () => {
    return (
        <Box
            bg="linear-gradient(91.54deg, rgba(11, 9, 102, 0.8) 27.31%, rgba(22, 16, 135, 0.736) 52.67%) "
            bgSize="cover"
            pos="relative" maxH="432px"
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
            </Box>
            <Box pos="absolute"
                right="175px"
                top="50px" minW="530px"
                minH="408px">
                <Img src="/assets/images/preview.png" />
            </Box>

            <Box pos="absolute" left="1000px" top="196px">
                <svg height="123px" width="123px" viewBox="0 0 123px 123px" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M61.495 123C95.3822 123 122.853 95.5289 122.853 61.6417C122.853 27.7545 95.3822 0.283447 61.495 0.283447C27.6077 0.283447 0.136719 27.7545 0.136719 61.6417C0.136719 95.5289 27.6077 123 61.495 123Z" fill="#DAE0F4" fillOpacity="0.1" />
                    <path d="M61.5067 111.003C88.7666 111.003 110.865 88.9043 110.865 61.6444C110.865 34.3846 88.7666 12.2861 61.5067 12.2861C34.2469 12.2861 12.1484 34.3846 12.1484 61.6444C12.1484 88.9043 34.2469 111.003 61.5067 111.003Z" fill="#DAE0F4" fillOpacity="0.3" />
                    <path d="M61.5078 99.135C82.2131 99.135 98.9981 82.3501 98.9981 61.6448C98.9981 40.9395 82.2131 24.1545 61.5078 24.1545C40.8025 24.1545 24.0176 40.9395 24.0176 61.6448C24.0176 82.3501 40.8025 99.135 61.5078 99.135Z" fill="#DAE0F4" fillOpacity="0.5" />
                    <path d="M61.5071 87.9759C76.0495 87.9759 87.8384 76.187 87.8384 61.6446C87.8384 47.1022 76.0495 35.3132 61.5071 35.3132C46.9647 35.3132 35.1758 47.1022 35.1758 61.6446C35.1758 76.187 46.9647 87.9759 61.5071 87.9759Z" fill="white" />
                    <path d="M56.2402 51.1121L72.039 61.6446L56.2402 72.1771V51.1121Z" fill="#333331" />
                </svg>
            </Box>
        </Box>
    )
}

export default UserDashboardBanner;