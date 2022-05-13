import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link as ChakraLink,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

interface ILessonSideBarItemProps {
  contents: { title: string; contents: { title: string }[] };
  parentIndex: number;
  currentLesson: number[];
  goToLesson: (lesson: number[]) => void;
}
const LessonSideBarItem: React.FC<ILessonSideBarItemProps> = ({
  contents,
  parentIndex,
  currentLesson,
  goToLesson,
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple mb="36px">
      <AccordionItem border="none">
        {({ isExpanded }: { isExpanded: boolean }) => (
          <>
            <h2>
              <AccordionButton
                p="0"
                mb="12px"
                _hover={{ background: "none", boxShadow: "none" }}
                outline="none"
                css={{
                  svg: {
                    transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
                    transition: "all .3s",
                    outline: "none",
                  },
                }}
              >
                <Box flex="1" textAlign="left" fontWeight="600" fontSize="14px">
                  {contents.title}
                </Box>
                <svg
                  width="19"
                  height="11"
                  viewBox="0 0 19 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35716 9.64784L9.57702 1.42798L17.7969 9.64784"
                    stroke="#0B0966"
                    strokeWidth="1.7305"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              {contents.contents.map((content, index) => (
                <Text
                  as="button"
                  w="100%"
                  textAlign="left"
                  key={content.title}
                  fontSize="12px"
                  fontWeight={
                    parentIndex === currentLesson[0] &&
                    index === currentLesson[1]
                      ? "700"
                      : "400"
                  }
                  p="15px 0px"
                  borderBottom={
                    index === content.title.length - 1
                      ? ""
                      : "1px solid #E8E8E8"
                  }
                  onClick={() => {
                    goToLesson([parentIndex, index]);
                  }}
                >
                  {index + 1 + ". " + content.title}
                </Text>
              ))}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default LessonSideBarItem;
