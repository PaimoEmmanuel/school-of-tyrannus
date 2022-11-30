import type { NextPage } from "next";
import Head from "next/head";
import HomeBanner from "../components/molecules/home-banner";
import NavigationBar from "../components/organisms/navigation-bar";
import HomeCourseTemplate from "../components/templates/home-course-template";
import Footer from "../components/organisms/footer";
import { getLandingPageCourses } from "../services/home-page";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface ICoursesProps {
  courses: any[];
}

const Home: NextPage<ICoursesProps> = ({ courses }) => {
  return (
    <div className="">
      <Head>
        <title>Courses - School of Tyrannus</title>
      </Head>
      <div>
        <NavigationBar />
        <Box
          //   bg="linear-gradient(91.54deg, rgba(11, 9, 102, 0.8) 27.31%, rgba(22, 16, 135, 0.736) 52.67%, rgba(23, 13, 89, 0) 111.41%), url(/assets/images/banner.png)"
          bg="linear-gradient(91.54deg, rgba(11, 9, 102, 0.8) 27.31%, rgba(22, 16, 135, 0.736) 111.41%), url(/assets/images/banner.png)"
          bgSize="cover"
        >
          <Box
            p={{ base: "107px 1.5rem", lg: "107px 0 128px 0" }}
            ml="175px"
            maxW="489px"
            mx="auto"
            textAlign="center"
            color="white"
          >
            <Text fontWeight="500" fontSize="48px" lineHeight="72px" mb="24px">
              All Courses
              {/* School of Tyrannus */}
            </Text>
            <Text fontSize="14px" lineHeight="21px" mb="45px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              odit aliquam, assumenda neque architecto nam ut voluptatum omnis
              in? Vel consequuntur rem natus nam nemo laboriosam, ut ea possimus
              nesciunt!
            </Text>
          </Box>
        </Box>
        {courses.map((item, index) => (
          <HomeCourseTemplate
            key={index + "oo"}
            index={index}
            title={item.name}
            about={item.description}
            courses={item.courses}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await getLandingPageCourses();
  const courses = await res.data;
  return {
    props: {
      courses,
    },
  };
};

export default Home;
