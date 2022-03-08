import { Box, Img, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

interface ICourseCardProps {
  title: string;
  lessons: number;
  videos: number;
}

const CourseCard: React.FunctionComponent<ICourseCardProps> = ({
  title,
  lessons,
  videos,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="4px"
      overflow="hidden"
      filter="drop-shadow(2px 7px 18px rgba(67, 108, 212, 0.13))"
      h="100%"
    >
      <Img
        height="114px"
        w="100%"
        objectFit="cover"
        src="/assets/images/course-card-img.png"
      />
      <Box p="30px 30px 0 30px">
        <Text fontSize="14px" lineHeight="21px" color="text.gold">
          {lessons} lessons . {videos} videos
        </Text>
        <Text
          fontSize="18px"
          lineHeight="23px"
          pb="30px"
          borderBottom="1px solid #EDEDED"
        >
          {title}
        </Text>
        <Link href="" passHref>
          <ChakraLink
            color="#5B85F1"
            fontSize="14px"
            lineHeight="21px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="12px"
            mb="18px"
          >
            view course
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.769125 0.67H2.37913L5.76713 3.876L2.37913 7.096H0.769125L4.15713 3.876L0.769125 0.67Z"
                fill="#436CD5"
              />
            </svg>
          </ChakraLink>
        </Link>
      </Box>
    </Box>
  );
};

export default CourseCard;
