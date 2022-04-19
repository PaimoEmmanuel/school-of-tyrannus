import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ICourseTabProps } from "../../types/course";
import CourseAboutTab from "../organisms/course-about-tab";
import CourseContent from "../organisms/course-content";
import FAQs from "../organisms/faqs";
import Instructors from "../organisms/instructors";
import Reviews from "../organisms/reviews";

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
            title={"About this course: " + title}
            {...{
              about,
              thumbnail,
              introVideoRetrievalId,
              totalDuration,
              totalResources,
            }}
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