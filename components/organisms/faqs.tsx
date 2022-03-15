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
      title: "What is Tyrannus",
      content:
        "Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But Spake Evil Of That Way Before The Multitude, He Departed From Them, And Separated The Disciples, Disputing Daily In The School Of One Tyrannus. And This Continued By The Space Of Two Years; So That All They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews And Greeks.",
    },
    {
      title: "What is Tyrannus",
      content:
        "Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But Spake Evil Of That Way Before The Multitude, He Departed From Them, And Separated The Disciples, Disputing Daily In The School Of One Tyrannus. And This Continued By The Space Of Two Years; So That All They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews And Greeks.",
    },
    {
      title: "What is Tyrannus",
      content:
        "Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But Spake Evil Of That Way Before The Multitude, He Departed From Them, And Separated The Disciples, Disputing Daily In The School Of One Tyrannus. And This Continued By The Space Of Two Years; So That All They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews And Greeks.",
    },
    {
      title: "What is Tyrannus",
      content:
        "Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But Spake Evil Of That Way Before The Multitude, He Departed From Them, And Separated The Disciples, Disputing Daily In The School Of One Tyrannus. And This Continued By The Space Of Two Years; So That All They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews And Greeks.",
    },
    {
      title: "What is Tyrannus",
      content:
        "Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But Spake Evil Of That Way Before The Multitude, He Departed From Them, And Separated The Disciples, Disputing Daily In The School Of One Tyrannus. And This Continued By The Space Of Two Years; So That All They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews And Greeks.",
    },
    {
      title: "What is Tyrannus",
      content:
        "Acts 19:9-10 But When Divers Were Hardened, And Believed Not, But Spake Evil Of That Way Before The Multitude, He Departed From Them, And Separated The Disciples, Disputing Daily In The School Of One Tyrannus. And This Continued By The Space Of Two Years; So That All They Which Dwelt In Asia Heard The Word Of The Lord Jesus, Both Jews And Greeks.",
    },
  ];
  return (
    <Box pt="53px" pb="200px" px="175px">
      <Text fontWeight="600" mb="54px">
        FAQs - Frequently asked questions
      </Text>
      <Box>
        {" "}
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
                  p="24px 40px"
                  boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
                  _focus={{ outline: "none" }}
                >
                  <Box flex="1" textAlign="left">
                    {index + 1 + ". " + faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel my="30px" mx="47px" fontSize="14px">
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
