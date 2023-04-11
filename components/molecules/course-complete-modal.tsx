import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Button as ChakraButton,
} from "@chakra-ui/react";
import * as React from "react";

interface ICourseCompletedModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const CourseCompletedModal: React.FunctionComponent<
  ICourseCompletedModalProps
> = ({ isOpen, onClose, courseTitle }) => {
  return (
    <Modal
      // preserveScrollBarGap
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay
        background="rgba(196, 196, 196, 0.65)"
        backdropFilter="blur(4px)"
      />
      <ModalContent
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        padding="0"
      >
        <ModalCloseButton _focus={{ outline: "none" }} />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="0"
          margin="68px 0"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="15" stroke="#037A07" strokeWidth="2" />
            <path
              d="M8 16.6569L12.9497 21.6066L23.5563 11"
              stroke="#037A07"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Text
            fontWeight="500"
            fontSize="20px"
            lineHeight="24px"
            color="#464255"
            mb="24px"
            align="center"
            px={{ base: "1rem", sm: "4rem" }}
            mt="2rem"
          >
            Congratulations! Your have successfully completed the{" "}
            <Text as="span" fontWeight="700">
              {courseTitle}{" "}
            </Text>
            course.
          </Text>

          <Text
            fontWeight="400"
            w="340px"
            fontSize="18px"
            lineHeight="23px"
            color="#A3A3A3"
            align="center"
          >
            Your certificate of completion will be sent to your email.
          </Text>

          <Flex direction="row" mt="30px">
            <ChakraButton
              display="flex"
              gap="20px"
              justifyContent="center"
              alignItems="center"
              borderRadius="5px"
              bgColor="#037A07"
              fontWeight="500"
              fontSize="18px"
              lineHeight="23px"
              color="#FFFFFF"
              h="53px"
              w="196px"
              p="15px 30px"
              _focus={{ outline: "none" }}
              _hover={{}}
              type="submit"
              onClick={onClose}
            >
              Close
            </ChakraButton>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CourseCompletedModal;
