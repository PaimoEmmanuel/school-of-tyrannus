import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ICourseTabProps } from "../../types/course";
import { COURSE_REVIEWS } from "../../utils/constants";
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
  const tabs =
    title === "Young Believers' Class 101"
      ? ["About", "Course content", "Instructors", "Reviews", "FAQ"]
      : ["About", "Course content", "Instructors"];

  return (
    <Tabs>
      <TabList
        mx={{ base: "1.5rem", lg: "175px" }}
        overflow={{ base: "scroll", lg: "visible" }}
        css={{
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            _selected={{
              borderBottom: "3px solid #0B0966",
              color: "text.deepBlue",
              fontWeight: "600",
            }}
            whiteSpace="nowrap"
            _focus={{ outline: "none" }}
          >
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel mt="36px" mb="56px" px="1.5rem">
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
        <TabPanel p="0" bgColor="text.pink">
          <Reviews reviews={COURSE_REVIEWS} />
        </TabPanel>
        <TabPanel p="0">
          <FAQs />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default CourseTab;
