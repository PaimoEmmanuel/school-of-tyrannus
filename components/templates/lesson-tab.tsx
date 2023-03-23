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
  manual: string;
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
        <TabPanel
          mt="36px"
          maxH="30vh"
          overflowY="scroll"
          p="0"
          css={{
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
            "scrollbar-width": "none" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "none" /* Safari and Chrome */,
            },
          }}
        >
          <Box
            css={{
              p: {
                marginBottom: "24px",
              },
              li: { marginLeft: "24px", marginBottom: "1rem" },
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
        <TabPanel
          mt="36px"
          maxH="30vh"
          overflowY="scroll"
          p="0"
          css={{
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
            "scrollbar-width": "none" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "none" /* Safari and Chrome */,
            },
          }}
        >
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
        <TabPanel
          mt="36px"
          maxH="30vh"
          overflowY="scroll"
          p="0"
          css={{
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
            "scrollbar-width": "none" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "none" /* Safari and Chrome */,
            },
          }}
          display={{ base: "block", xl: "none" }}
        >
          <Text
            fontSize="14px"
            css={{
              li: { marginLeft: "24px", marginBottom: "1rem" },
              p: { marginBottom: "16px" },
              strong: {
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
                marginBottom: "8px",
              },
            }}
            dangerouslySetInnerHTML={{
              __html: manual ? manual : "No manual available for this lesson.",
            }}
          ></Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default LessonTab;
