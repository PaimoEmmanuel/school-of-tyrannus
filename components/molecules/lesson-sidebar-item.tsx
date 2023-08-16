import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { ICourseLessons } from "../../types/course";

interface ILessonSideBarItemProps {
  lesson: ICourseLessons["lessons"][0];
  parentIndex: number;
  currentLessonIndex: [number, number];
  onTakeTest: () => void;
  goToLesson: (lesson: [number, number]) => void;
}
const LessonSideBarItem: React.FC<ILessonSideBarItemProps> = ({
  lesson,
  parentIndex,
  currentLessonIndex,
  onTakeTest,
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
                  {lesson.title}
                </Box>

                <svg
                  width="14"
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
              {lesson.contents.map((content, index) => (
                <Box
                  w="100%"
                  key={content.title}
                  fontSize="12px"
                  p="15px 0px"
                  borderBottom={
                    index === content.title.length - 1
                      ? ""
                      : "1px solid #E8E8E8"
                  }
                >
                  <Text
                    as="button"
                    display="flex"
                    justifyContent="space-between"
                    textAlign="left"
                    w="100%"
                    gap="12px"
                    mb="12px"
                    fontWeight={
                      parentIndex === currentLessonIndex[0] &&
                      index === currentLessonIndex[1]
                        ? "700"
                        : "400"
                    }
                    onClick={() => {
                      goToLesson([parentIndex, index]);
                    }}
                    css={{ svg: { minWidth: "17px" } }}
                  >
                    {index + 1 + ". " + content.title}

                    {content.hasQuiz &&
                    content.userStatus.quizStatus === "Completed" ? (
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#A0E874" />
                        <path
                          d="M12 6.34717L7.1875 11.1597L5 8.97217"
                          stroke="white"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : content.userStatus.contentStatus === "Completed" ? (
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#A0E874" />
                        <path
                          d="M12 6.34717L7.1875 11.1597L5 8.97217"
                          stroke="white"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="9.5"
                          cy="9.5"
                          r="8.5"
                          fill="#ECFFE0"
                          stroke="#A0E874"
                          strokeDasharray="3 0"
                        />
                      </svg>
                    )}
                  </Text>
                  {content.hasQuiz &&
                  parentIndex === currentLessonIndex[0] &&
                  index === currentLessonIndex[1] ? (
                    <Button
                      bgColor="text.orange"
                      fontSize="12px"
                      fontWeight="500"
                      _hover={{
                        bgColor: "white",
                        border: "1px solid #EE9938",
                        color: "text.orange",
                      }}
                      onClick={onTakeTest}
                    >
                      Take test
                    </Button>
                  ) : (
                    ""
                  )}
                </Box>
              ))}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default LessonSideBarItem;
