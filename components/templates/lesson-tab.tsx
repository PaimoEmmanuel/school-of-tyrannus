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
import PrivatePage from "./private-route";

interface ILessonTab {
  resources: { title: string; link: string }[];
}
const LessonTab: React.FC<ILessonTab> = ({ resources }) => {
  return (
    <Tabs mx="34px">
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
          Resources
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
          {resources.length > 0 ? (
            resources.map((resource) => (
              <a key={resource.link} href={resource.link} download>
                {resource.title}
              </a>
            ))
          ) : (
            <Text>No resource available</Text>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default PrivatePage(LessonTab);
