import {
  Box,
  Text,
  Flex,
  Img,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";

interface IFAQsProps {}

const FAQs: React.FunctionComponent<IFAQsProps> = (props) => {
  const faqs = [
    {
      title: "Is this course free?",
      content:
        "Young Believers' Course is FREE for all, but enrollees are admitted in batches.",
    },
    {
      title: "How do I enrol for the course?",
      content:
        "To register for the course, please click 'start course'. You will get an email on the status of your registration.",
    },
    {
      title: "What do I need to take the course?",
      content:
        "To have a seamless experience while taking this course. You will need to have an internet connection, a Bible, writing material and a copy of the course manual (Laying a Strong Spiritual Foundation by Pastor Emeka Egwuchukwu)",
    },
    {
      title: "Are there graded exercises",
      content:
        "Yes, there are graded exercises after each section of the course.",
    },
    {
      title: "How do I ask questions if I have one?",
      content:
        "If you have any questions or need clarity on a concept, truth or doctrine taught during this course. Kindly contact Pastor Ademola Akogun at +234 803 085 8479 (via Whatsapp/Calls).",
    },
    {
      title: "What is the duration of the course?",
      content:
        "This course is self-paced, but you must complete the classes within 3 months after registration.",
    },
    {
      title: "Is the course online?",
      content:
        "Yes, the course is entirely online, but a live class is scheduled for everyone once a month.",
    },
  ];
  return (
    <Box pt="53px" pb="200px" px={{ base: "1.5rem", lg: "175px" }}>
      <Text fontWeight="600" mb="54px">
        FAQs - Frequently asked questions
      </Text>
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.title + index}
              border="none"
              boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
              bgColor="#FAFBFF"
              mb="8px"
            >
              <h2>
                <AccordionButton
                  p={{ base: "24px 16px", sm: "24px 40px" }}
                  boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
                  _focus={{ outline: "none" }}
                >
                  <Box flex="1" textAlign="left">
                    {index + 1 + ". " + faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel my="30px" mx={{ sm: "47px" }} fontSize="14px">
                {faq.content}
              </AccordionPanel>
            </AccordionItem>
          ))}{" "}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQs;
