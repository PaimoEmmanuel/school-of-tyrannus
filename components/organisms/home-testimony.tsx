import { Box, Grid, Text } from "@chakra-ui/react";
import * as React from "react";
import { REVIEWS } from "../../utils/constants";
import Testimony from "../molecules/testimony";
import Reviews from "./reviews";

interface IHomeTestimonyProps {}

const HomeTestimony: React.FunctionComponent<IHomeTestimonyProps> = (props) => {
  
  return (
    <>
      <Box p="103px 1.5rem 1.5rem" pos={"relative"}>
        <Box pos="absolute" top={"0"} left="0" zIndex="-1" w="100%">
          <svg
            viewBox="0 0 1440 1072"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L1440 448V1072L0 592V0Z" fill="#FAFBFF" />
          </svg>
        </Box>
        <Text
          textAlign="center"
          fontSize={{ base: "24px", lg: "26px" }}
          fontWeight="500"
          lineHeight={{ lg: "39px" }}
          mb="33px"
        >
          Why you should enroll
        </Text>
        <Box maxW="716px" mx="auto">
          <video
            width="100%"
            src="https://media.istockphoto.com/videos/microscopy-of-human-hair-magnification-150x-root-and-hair-stalk-in-video-id1289550962"
            controls
            controlsList="nodownload"
            loop
            poster="/assets/images/video-poster.png"
          />
        </Box>
      </Box>
      <Box>
        <Text
          textAlign="center"
          mt={"108px"}
          mb="51px"
          fontWeight="500"
          fontSize={{ base: "24px", lg: "26px" }}
          lineHeight={{ lg: "39px" }}
        >
          What people say
        </Text>
        {/* <Grid
          p={"0 175px 0 270px"}
          templateColumns="repeat(2, minmax(0, 1fr))"
          gap="150px"
        >
          <Testimony />
          <Testimony />
        </Grid> */}
        <Reviews reviews={REVIEWS} page="home" />
      </Box>
    </>
  );
};

export default HomeTestimony;
