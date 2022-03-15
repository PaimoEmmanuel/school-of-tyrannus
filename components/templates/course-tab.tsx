import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CourseAboutTab from "../organisms/course-about-tab";
import CourseContent from "../organisms/course-content";
import FAQs from "../organisms/faqs";
import Instructors from "../organisms/instructors";
import Reviews from "../organisms/reviews";

const CourseTab: React.FC = ({}) => {
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
        <Tab
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
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel mt="36px" mb="56px">
          <CourseAboutTab
            courseTitle="About this course: Principles of faith - asking and believing"
            aboutCourse="About this course: Principles of faith - asking and believing Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa pulvinar lacus posuere pretium ac, turpis molestie. Egestas ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo egestas ut neque, tincidunt. Orci lorem convallis cursus feugiat aliquam cras at. Curabitur consequat vel nulla nunc. Morbi congue mi tincidunt odio ut. Sed quam gravida interdum ut habitasse porttitor aliquam egestas purus. Nibh in sed mollis dui nisi, massa. Mi tempus nec, porttitor lacus felis nisi fringilla vestibulum. A nam eu semper id adipiscing. <br><br> Eleifend vestibulum vestibulum urna viverra pulvinar. Eget felis arcu sollicitudin dolor mus. Augue cras varius proin nunc varius enim. Tristique sed non pretium, accumsan amet donec. Ipsum tellus metus quam viverra. Sollicitudin dolor mauris ultrices orci consequat aliquet vitae ut pellentesque. Nec dui nec vitae accumsan nibh pulvinar faucibus volutpat ut. Facilisis justo, sed lectus dui sed sem habitasse. Quisque blandit leo euismod sit libero vitae neque eget. Ut accumsan, in eget neque tristique posuere amet neque."
            thumbnail="/assets/images/video-poster.png"
            videoLink="https://media.istockphoto.com/videos/microscopy-of-human-hair-magnification-150x-root-and-hair-stalk-in-video-id1289550962"
            duration={8}
            resources={3}
          />
        </TabPanel>
        <TabPanel p="0">
          <CourseContent />
        </TabPanel>
        <TabPanel p="0">
          <Instructors />
        </TabPanel>
        <TabPanel p="0" bgColor="text.pink">
          <Reviews />
        </TabPanel>
        <TabPanel p="0">
          <FAQs />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default CourseTab;
