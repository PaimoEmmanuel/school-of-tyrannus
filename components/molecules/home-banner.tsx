import * as React from "react";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface IHomeBannerProps {}

const HomeBanner: React.FunctionComponent<IHomeBannerProps> = () => {
  return (
    <Box
      bg="linear-gradient(91.54deg, rgba(11, 9, 102, 0.8) 27.31%, rgba(22, 16, 135, 0.736) 52.67%, rgba(23, 13, 89, 0) 111.41%), url(/assets/images/banner.png)"
      bgSize="cover"
    >
      <Box p="107px 0 128px 0" ml="175px" maxW="489px" color="white">
        <Text fontWeight="500" fontSize="48px" lineHeight="72px" mb="24px">
          School of Tyrannus
        </Text>
        <Text fontSize="14px" lineHeight="21px" mb="45px">
          Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But
          Spake Evil Of That Way Before The Multitude, He Departed From Them,
          And Separated The Disciples, Disputing Daily In The School Of One
          Tyrannus. And This Continued By The Space Of Two Years; So That All
          They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews
          And Greeks.
        </Text>
        <Link href="/courses" passHref>
          <ChakraLink
            h="50px"
            w="300px"
            color="black"
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
    </Box>
  );
};

export default HomeBanner;
