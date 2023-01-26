import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
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
    thumbnail: string;
  }[];
}

const HomeCourseTemplate: React.FunctionComponent<IHomeCourseTemplateProps> = ({
  index,
  title,
  about,
  courses,
  // thumbnail,
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

  const [translate, setTranslate] = useState(0);
  const [translatePeak, setTranslatePeak] = useState(false);
  const [isLargeScreen] = useMediaQuery("(min-width: 992px)");
  const [isMediumScreen] = useMediaQuery("(min-width: 480px)");
  const showArrows = () => {
    if (courses.length <= 1) return false;
    if (isMediumScreen && courses.length <= 2) return false;
    if (isLargeScreen && courses.length <= 4) return false;
    return true;
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTranslate(0);
    });
  }, []);
  return (
    <Box
      p={{ base: "2.5rem 1.5rem 5rem", lg: "56px 175px 114px" }}
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
        zIndex="10"
        pos="relative"
        // gap="24px"
      >
        {getMedia(index).courseIcon({})}
        {title}
      </Text>
      <Flex justifyContent="space-between" pos="relative">
        <Text maxW="583px" fontSize="14px" lineHeight="21px" color="#514F4F">
          {about}
        </Text>
      </Flex>
      <Box pos="relative">
        <Flex
          display={showArrows() ? "flex" : "none"}
          minW="42px"
          h="59px"
          bgColor="white"
          justifyContent="center"
          alignItems="center"
          boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
          borderRadius="4px"
          mr="9px"
          cursor="pointer"
          zIndex="9999"
          pos="absolute"
          left={{ lg: "-80px" }}
          top={{ lg: "50%" }}
          bottom={{ base: "-80px", lg: "unset" }}
          right={{ base: "60px", lg: "unset" }}
          transform="translateY(-50%)"
          opacity={translate < 0 ? "100%" : "50%"}
          onClick={() => {
            if (translate < 0) {
              if (isLargeScreen || isMediumScreen) {
                setTranslate(translate + 102);
              } else {
                setTranslate(translate + 106.5);
              }
              setTranslatePeak(false);
            }
          }}
        >
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9639 20.7833L10.9805 20.7833L0.493865 10.86L10.9805 0.893326L15.9639 0.893326L5.4772 10.86L15.9639 20.7833Z"
              fill="#000000"
            />
          </svg>
        </Flex>
        <Box overflowX="hidden">
          <Flex
            gap="20px"
            py="40px"
            transform={`translateX(${translate}%)`}
            transition="all .3s"
          >
            {courses.map((course) => (
              <Box
                key={course.title}
                minW={{
                  base: "100%",
                  sm: "calc((100% - 20px) / 2)",
                  lg: "calc((100% - 60px) / 4)",
                }}
                maxW={{
                  base: "100%",
                  sm: "calc((100% - 20px) / 2)",
                  lg: "calc((100% - 60px) / 4)",
                }}
              >
                <CourseCard {...course} />
              </Box>
            ))}
          </Flex>
        </Box>
        <Flex
          display={showArrows() ? "flex" : "none"}
          minW="42px"
          h="59px"
          bgColor="white"
          justifyContent="center"
          alignItems="center"
          boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
          borderRadius="4px"
          mr="9px"
          cursor="pointer"
          zIndex="9999"
          pos="absolute"
          right={{ base: "0", lg: "-80px" }}
          top={{ lg: "50%" }}
          bottom={{ base: "-80px", lg: "unset" }}
          transform="translateY(-50%) rotate(180deg)"
          opacity={translatePeak ? "50%" : "100%"}
          onClick={() => {
            if (isLargeScreen) {
              if (translate > -((courses.length - 4) / 4) * 102) {
                setTranslate(translate - 102);
              } else setTranslatePeak(true);
            } else if (isMediumScreen) {
              if (translate > (-(courses.length - 2) / 2) * 100) {
                setTranslate(translate - 102);
              } else setTranslatePeak(true);
            } else {
              if (translate > (-(courses.length - 1) / 1) * 106.5) {
                setTranslate(translate - 106.5);
              } else setTranslatePeak(true);
            }
          }}
        >
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9639 20.7833L10.9805 20.7833L0.493865 10.86L10.9805 0.893326L15.9639 0.893326L5.4772 10.86L15.9639 20.7833Z"
              fill="#000000"
            />
          </svg>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeCourseTemplate;
