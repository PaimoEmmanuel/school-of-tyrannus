import type { NextPage } from "next";
import Head from "next/head";
import NavigationBar from "../../components/organisms/navigation-bar";
import {
  Box,
  Button,
  Flex,
  Img,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import SigninBg from "../../components/molecules/signin-bg";
import CourseTab from "../../components/templates/course-tab";
import Footer from "../../components/organisms/footer";
import { useRouter } from "next/router";
import { getAllCourses, getCourse } from "../../services/course";
import { ICourseDetails } from "../../types/course";
import Link from "next/link";

const CourseDetailsPage: NextPage<ICourseDetails> = ({ course }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{course.title} - School of Tyrannus</title>
      </Head>
      <Box pos="relative">
        <NavigationBar />
        <Box bgColor="text.blue" textAlign="center" pos="relative">
          <Box pos="relative" pt="88px" pb="77px" overflow="hidden">
            <SigninBg course={true} />
            <Box pos="relative">
              <Text
                fontWeight="300"
                fontSize="14px"
                textTransform="uppercase"
                mb="28px"
              >
                Home / young believers / {course.title}
              </Text>
              <Text fontSize="36px" fontWeight="500" color="#131275" mb="52px">
                {course.title}
              </Text>
              <Text
                pos="relative"
                background="rgba(67, 108, 212, 0.5)"
                border="2px solid rgba(19, 18, 117, 0.1)"
                borderRadius="4px"
                w="min-content"
                p="10px 50px"
                mx="auto"
                fontWeight="600"
                color="white"
                textTransform="uppercase"
              >
                instructors
              </Text>
              <Flex
                justifyContent="center"
                alignItems="center"
                mt="34px"
                gap="55px"
              >
                {course.instructors.map((instructor) => (
                  <Flex key={instructor.name} alignItems="center">
                    <Img
                      h="57px"
                      w="57px"
                      objectFit="cover"
                      borderRadius="50%"
                      mr="23px"
                      border="8px solid rgba(253, 211, 132, 0.4)"
                      src={
                        instructor.thumbnail
                          ? instructor.thumbnail
                          : "/assets/images/video-poster.png"
                      }
                      // alt={instructor.name}
                    />
                    <Text maxW="120px" textAlign="left">
                      {instructor.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <Text
                fontWeight="500"
                color="rgba(19, 18, 117, 0.7)"
                mt="48px"
                textTransform="uppercase"
              >
                {course.lessonsCount} lessons . {course.contentsCount} videos
              </Text>
            </Box>
          </Box>
          <Link href={`${router.asPath}/lesson`} passHref>
            <ChakraLink
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="600"
              borderRadius="4px"
              h="60px"
              w="300px"
              pos="absolute"
              left="50%"
              bottom="-30px"
              transform={"translateX(-50%)"}
              bgColor="text.orange"
              boxShadow="0px 3px 26px rgba(253, 211, 132, 0.9)"
              color="white"
              _hover={{
                bgColor: "white",
                border: "1px solid #EE9938",
                color: "text.orange",
              }}
            >
              START COURSE
            </ChakraLink>
          </Link>
        </Box>
      </Box>
      <Box mt="117px">
        <CourseTab
          title={course.title}
          about={course.about}
          introVideoRetrievalId={course.introVideoRetrievalId}
          thumbnail={course.thumbnail}
          lessons={course.lessons}
          totalDuration={course.totalDuration}
          totalResources={course.totalResources}
          instructors={course.instructors}
        />
      </Box>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;

export const getStaticPaths = async () => {
  const res = await getAllCourses();
  const courses = await res.data;
  const paths = courses.map((course: { id: string }) => ({
    params: { course: String(course.id) },
  }));
  return { paths, fallback: false };
};

interface ICourseParams {
  params: { course: string };
}
export const getStaticProps = async ({ params }: ICourseParams) => {
  const res = await getCourse(params.course);
  const course = await res.data;
  return {
    props: {
      course,
    },
  };
};
