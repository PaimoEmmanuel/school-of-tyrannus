import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CourseAboutTab from "../organisms/course-about-tab";
import CourseContent from "../organisms/course-content";
import FAQs from "../organisms/faqs";
import Instructors from "../organisms/instructors";
import Reviews from "../organisms/reviews";

const LessonTab: React.FC = ({}) => {
  return (
    <Tabs isFitted mx="34px">
      <TabList pt="38px">
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "700",
          }}
          fontWeight="500"
          _focus={{ outline: "none" }}
        >
          Overview
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "700",
          }}
          fontWeight="500"
          _focus={{ outline: "none" }}
        >
          Manual
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "700",
          }}
          fontWeight="500"
          _focus={{ outline: "none" }}
        >
          Resources
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "700",
          }}
          fontWeight="500"
          _focus={{ outline: "none" }}
        >
          Test
        </Tab>
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "700",
          }}
          fontWeight="500"
          _focus={{ outline: "none" }}
        >
          Discussions
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel mt="36px" p="0">
          <Text
            css={{
              strong: {
                color: "#161087",
                fontWeight: "600",
                display: "block",
                marginBottom: "8px",
              },
            }}
          >
            <strong>Time Stamp - 0:00 - 0:30</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa
            pulvinar lacus posuere pretium ac, turpis molestie. Egestas
            ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo
            egestas ut neque, tincidunt. Orci lorem convallis cursus feugiat
            aliquam cras at. Curabitur consequat vel nulla nunc. Morbi congue mi
            tincidunt odio ut. Sed quam gravida interdum ut habitasse porttitor
            aliquam egestas purus. Nibh in sed mollis dui nisi, massa. Mi tempus
            nec, porttitor lacus felis nisi fringilla vestibulum. A nam eu
            semper id adipiscing. <br /> <br />
            <strong>Time Stamp - 0:30 - 1:00</strong> Eleifend vestibulum
            vestibulum urna viverra pulvinar. Eget felis arcu sollicitudin dolor
            mus. Augue cras varius proin nunc varius enim. Tristique sed non
            pretium, accumsan amet donec. Ipsum tellus metus quam viverra.
            Sollicitudin dolor mauris ultrices orci consequat aliquet vitae ut
            pellentesque. Nec dui nec vitae accumsan nibh pulvinar faucibus
            volutpat ut. Facilisis justo, sed lectus dui sed sem habitasse.
            Quisque blandit leo euismod sit libero vitae neque eget. Ut
            accumsan, in eget neque tristique posuere amet neque.
          </Text>
        </TabPanel>
        <TabPanel mt="36px" p="0">
          <Text
            css={{
              strong: {
                color: "#161087",
                fontWeight: "600",
                display: "block",
                marginBottom: "8px",
              },
            }}
          >
            <strong>Introduction</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, massa
            pulvinar lacus posuere pretium ac, turpis molestie. Egestas
            ultricies sed sit ornare nunc, eu tempus. A molestie elementum, leo
            egestas ut neque, tincidunt. Orci lorem convallis cursus feugiat
            aliquam cras at. Curabitur consequat vel nulla nunc. Morbi congue mi
            tincidunt odio ut. Sed quam gravida interdum ut habitasse porttitor
            aliquam egestas purus. Nibh in sed mollis dui nisi, massa. Mi tempus
            nec, porttitor lacus felis nisi fringilla vestibulum. A nam eu
            semper id adipiscing. <br /> <br />
            <strong>Memory Verse</strong> Eleifend vestibulum vestibulum urna
            viverra pulvinar. Eget felis arcu sollicitudin dolor mus. Augue cras
            varius proin nunc varius enim. Tristique sed non pretium, accumsan
            amet donec. Ipsum tellus metus quam viverra. Sollicitudin dolor
            mauris ultrices orci consequat aliquet vitae ut pellentesque. Nec
            dui nec vitae accumsan nibh pulvinar faucibus volutpat ut. Facilisis
            justo, sed lectus dui sed sem habitasse. Quisque blandit leo euismod
            sit libero vitae neque eget. Ut accumsan, in eget neque tristique
            posuere amet neque.
            <br /> <br />
            <strong>Why men should be strong</strong> Eleifend vestibulum
            vestibulum urna viverra pulvinar. Eget felis arcu sollicitudin dolor
            mus. Augue cras varius proin nunc varius enim. Tristique sed non
            pretium, accumsan amet donec. Ipsum tellus metus quam viverra.
            Sollicitudin dolor mauris ultrices orci consequat aliquet vitae ut
            pellentesque. Nec dui nec vitae accumsan nibh pulvinar faucibus
            volutpat ut. Facilisis justo, sed lectus dui sed sem habitasse.
            Quisque blandit leo euismod sit libero vitae neque eget. Ut
            accumsan, in eget neque tristique posuere amet neque.
          </Text>
        </TabPanel>
        <TabPanel mt="36px" p="0">
          <a href="" download>
            Lesson Manual.pdf
          </a>
        </TabPanel>
        <TabPanel mt="36px" p="0">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf7siUyF_0FsNulz95mIyX_PkXMIReccuSZANwCgqIt8ZbSVQ/viewform?embedded=true"
            width="760"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </TabPanel>
        <TabPanel mt="36px" p="0">
          Discussions
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default LessonTab;
