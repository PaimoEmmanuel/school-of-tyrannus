import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CourseAboutTab from "../organisms/course-about-tab";
import CourseContent from "../organisms/course-content";
import FAQs from "../organisms/faqs";
import Instructors from "../organisms/instructors";
import Reviews from "../organisms/reviews";

interface ICourseTabProps {
  about: string;
  title: string;
  thumbnail: string;
  introVideoRetrievalId: string;
  totalDuration: number;
  totalResources: number;
  instructors: { name: string; thumbnail: string }[];
  lessons: {
    title: string;
    description: string;
    duration: number;
    contents: {}[];
    contentsCount: number;
    resourcesCount: number;
  }[];
}
const CourseTab: React.FC<ICourseTabProps> = ({
  about,
  title,
  thumbnail,
  introVideoRetrievalId,
  lessons,
  instructors,
  totalDuration,
  totalResources,
}) => {
  return (
    <Tabs>
      <TabList mx="175px">
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "600",
          }}
          _focus={{ outline: "none" }}
        >
          About
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "600",
          }}
          _focus={{ outline: "none" }}
        >
          Course content
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "600",
          }}
          _focus={{ outline: "none" }}
        >
          Instructors
        </Tab>
        {/* <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "600",
          }}
          _focus={{ outline: "none" }}
        >
          Reviews
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "600",
          }}
          _focus={{ outline: "none" }}
        >
          FAQ
        </Tab> */}
      </TabList>

      <TabPanels>
        <TabPanel mt="36px" mb="56px">
          <CourseAboutTab
            courseTitle={"About this course: " + title}
            aboutCourse={about}
            thumbnail={
              thumbnail ? thumbnail : "/assets/images/video-poster.png"
            }
            videoLink={introVideoRetrievalId}
            duration={totalDuration}
            resources={totalResources}
          />
        </TabPanel>
        <TabPanel p="0">
          <CourseContent courseContent={lessons} />
        </TabPanel>
        <TabPanel p="0">
          <Instructors instructors={instructors} />
        </TabPanel>
        {/* <TabPanel p="0" bgColor="text.pink">
          <Reviews />
        </TabPanel>
        <TabPanel p="0">
          <FAQs />
        </TabPanel> */}
      </TabPanels>
    </Tabs>
  );
};
export default CourseTab;
