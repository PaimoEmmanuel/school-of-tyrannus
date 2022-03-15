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
  lessons: string[];
}
const LessonSideBarItem: React.FC<ILessonSideBarItemProps> = ({ lessons }) => {
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
                <Box flex="1" textAlign="left" fontWeight="600" fontSize="20px">
                  Lesson 1
                </Box>
                <svg
                  width="22"
                  height="13"
                  viewBox="0 0 22 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.54492 11.3098L11.0449 1.80981L20.5449 11.3098"
                    stroke="#0B0966"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              {lessons.map((lesson, index) => (
                <Text
                  key={lesson}
                  p="15px 0px"
                  borderBottom={
                    index === lesson.length - 1 ? "" : "1px solid #E8E8E8"
                  }
                >
                  {index + 1 + ". " + lesson}
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
