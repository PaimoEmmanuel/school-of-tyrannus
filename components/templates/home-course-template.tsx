import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import HomeCourseIconA from "../atoms/home-course-icon-a";
import HomeCourseIconB from "../atoms/home-course-icon-b";
import CourseCard from "../organisms/course-card";
import {
  HomeCourseBgA,
  HomeCourseBgB,
  HomeCourseBgC,
} from "../atoms/home-course-bg";
import HomeCourseIconC from "../atoms/home-course-icon-c";

interface IHomeCourseTemplateProps {
  index: number;
  title: string;
  about: string;
  courses: {
    title: string;
    lessonsCount: number;
    contentsCount: number;
    id: number;
  }[];
}

const HomeCourseTemplate: React.FunctionComponent<IHomeCourseTemplateProps> = ({
  index,
  title,
  about,
  courses,
}) => {
  const getMedia = (index: number) => {
    if (index === 0) {
      return {
        courseIcon: HomeCourseIconA,
        courseBg: HomeCourseBgA({ pos: "absolute", left: "0", bottom: "0" }),
        bgColor: "#FAFBFF",
      };
    } else if (index === 1) {
      return {
        courseIcon: HomeCourseIconB,
        courseBg: HomeCourseBgB({ pos: "absolute", right: "0", bottom: "0" }),
        bgColor: "#FFFFFF",
      };
    } else if (index === 2) {
      return {
        courseIcon: HomeCourseIconC,
        courseBg: HomeCourseBgC({
          pos: "absolute",
          left: "50%",
          bottom: "0",
          transform: "translateX(-50%)",
        }),
        bgColor: "#FFF7FA",
      };
    }
    return {
      courseIcon: HomeCourseIconA,
      courseBg: HomeCourseBgA,
      bgColor: "#FFFFFF",
    };
  };
  return (
    <Box
      p="56px 175px 114px"
      bgColor={getMedia(index).bgColor}
      overflowX="hidden"
      pos="relative"
    >
      {getMedia(index).courseBg}
      <Text
        display="flex"
        alignItems="center"
        fontSize="26px"
        lineHeight="39px"
        fontWeight="500"
        mb="30px"
        // gap="24px"
      >
        {getMedia(index).courseIcon({})}
        {title}
      </Text>
      <Flex justifyContent="space-between" mb="40px" pos="relative">
        <Text maxW="583px" fontSize="14px" lineHeight="21px" color="#514F4F">
          {about}
        </Text>
        {/*<Link href="" passHref>*/}
        {/*  <ChakraLink*/}
        {/*    h="42px"*/}
        {/*    w="164px"*/}
        {/*    bgColor="text.orange"*/}
        {/*    display="flex"*/}
        {/*    alignItems="center"*/}
        {/*    justifyContent="center"*/}
        {/*    borderRadius="4px"*/}
        {/*    fontWeight="500"*/}
        {/*    boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"*/}
        {/*    color="white"*/}
        {/*  >*/}
        {/*    View all courses*/}
        {/*  </ChakraLink>*/}
        {/*</Link>*/}
      </Flex>
      <Flex justifyContent="space-between" gap="1%">
        {courses.map((course) => (
          <Box key={course.title} minW="260px" maxW="24%">
            <CourseCard {...course} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HomeCourseTemplate;
