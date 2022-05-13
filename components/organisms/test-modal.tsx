import {
  Box,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { takeQuiz } from "../../services/course";
import TestModalCloseButton from "../molecules/test-modal-close-button";

interface ITestModalProps {
  title: string;
  id: string;
  testLink: string;
  isOpen: boolean;
  onTestModalCLose: () => void;
  goToNext: () => void;
}

const TestModal: React.FunctionComponent<ITestModalProps> = ({
  isOpen,
  onTestModalCLose,
  title,
  id,
  testLink,
  goToNext,
}) => {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onTestModalCLose}
    >
      <ModalOverlay background="rgba(0, 0, 0, 0.5)" />
      <ModalContent
        top="10%"
        // transform="translateY(-50%)"
        maxW="458px"
        p="48px 60px"
      >
        <ModalBody p="0" pos="relative">
          <TestModalCloseButton onModalCLose={onTestModalCLose} />
          <Text fontSize="24px" fontWeight="600" mb="1rem">
            {title}
          </Text>
          <Text color="#5F5F5F">
            You’ve finished this lesson. Please, take the lesson test to move
            the next lesson.
          </Text>
          <Button
            fontWeight="600"
            fontSize="20px"
            w="100%"
            mt="40px"
            borderRadius="4px"
            bgColor="text.orange"
            boxShadow="0px 3px 26px rgba(253, 211, 132, 0.9)"
            color="white"
            h="60px"
            mb="20px"
            _hover={{
              bgColor: "white",
              border: "2px solid #EE9938",
              color: "text.orange",
            }}
            onClick={() => {
              takeQuiz(id).then((res) => {
                window.open(testLink, "_blank");
                goToNext();
                onTestModalCLose();
              });
            }}
          >
            TAKE TEST
          </Button>
        </ModalBody>

        <ModalFooter p="0">
          <Button
            onClick={onTestModalCLose}
            w="100%"
            bgColor="transparent"
            border="2px solid #000000"
            textColor="#000000"
            h="60px"
            fontWeight="600"
          >
            CANCEL
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TestModal;
