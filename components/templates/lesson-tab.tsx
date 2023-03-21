import {
  Box,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import PrivatePage from "./private-route";

interface ILessonTab {
  resources: { title: string; link: string }[];
  overview: string;
  manual?: string;
}
const LessonTab: React.FC<ILessonTab> = ({ resources, overview, manual }) => {
  return (
    <Tabs mx={{ base: "24px", lg: "34px" }}>
      <TabList
        pt="38px"
        overflowX="scroll"
        css={{
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        }}
      >
        <Tab
          _selected={{
            borderBottom: "3px solid #0B0966",
            color: "text.deepBlue",
            fontWeight: "700",
          }}
          fontWeight="500"
          _focus={{ outline: "none" }}
          whiteSpace="nowrap"
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
          whiteSpace="nowrap"
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
          display={{ base: "block", xl: "none" }}
          whiteSpace="nowrap"
        >
          Lesson Manual
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel mt="36px" p="0">
          <Box
            css={{
              p: {
                marginBottom: "24px",
              },
              strong: {
                color: "#161087",
                fontWeight: "600",
                display: "block",
                marginBottom: "8px",
              },
            }}
            dangerouslySetInnerHTML={{ __html: overview }}
          ></Box>
        </TabPanel>
        <TabPanel mt="36px" p="0">
          {resources.length > 0 ? (
            resources.map((resource, index) => (
              <Link
                display="block"
                w="fit-content"
                textDecor="underline"
                mb="1rem"
                target="_blank"
                key={resource.link}
                href={resource.link}
                download
                rel="noreferrer"
              >
                {index + 1}. {resource.title}
              </Link>
            ))
          ) : (
            <Text>No resource available</Text>
          )}
        </TabPanel>
        <TabPanel mt="36px" p="0" display={{ base: "block", xl: "none" }}>
          <Text
            fontSize="14px"
            css={{
              strong: {
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
                marginBottom: "8px",
              },
            }}
          >
            {/* <strong>Time Stamp - 0:00 - 0:30</strong>
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
            accumsan, in eget neque tristique posuere amet neque. */}
            {manual ? manual : "No manual available for this lesson."}
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default LessonTab;
