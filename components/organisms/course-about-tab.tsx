import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface ICourseAboutTabProps {
  courseTitle: string;
  aboutCourse: string;
  thumbnail: string;
  duration: number;
  resources: number;
  videoLink: string;
}

const CourseAboutTab: React.FC<ICourseAboutTabProps> = ({
  courseTitle,
  aboutCourse,
  thumbnail,
  duration,
  resources,
  videoLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex gap="50px" px="175px">
      <Box>
        <Text fontWeight="600" mb="32px">
          {courseTitle}
        </Text>
        <Text
          dangerouslySetInnerHTML={{
            __html: aboutCourse,
          }}
        ></Text>
      </Box>
      <Box
        bgColor="text.blue"
        maxW="448px"
        minW="448px"
        borderRadius="8px"
        p="30px"
        pb="50px"
        pos="relative"
      >
        <Box pos="absolute" bottom="0" right="0">
          <svg
            width="448"
            height="192"
            viewBox="0 0 448 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-72.9998 660.257C6.71058 381.919 151.359 -35.8527 375.065 46.9687C596.619 128.993 591.267 487.537 556.871 647.568"
              stroke="#ECF0FF"
              strokeWidth="73"
            />
          </svg>
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <ModalOverlay />
          <ModalContent
            minW="71vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ModalCloseButton />
            <ModalBody w="100%" padding="0">
              <Box>
                <video
                  width="100%"
                  src={videoLink}
                  controls
                  controlsList="nodownload"
                  loop
                  poster="/assets/images/video-poster.png"
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box
          pos="relative"
          zIndex="1"
          h="234px"
          cursor="pointer"
          background={`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${thumbnail})`}
          bgSize="cover"
          borderRadius="4px"
          css={{
            svg: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="39.5001"
              cy="39.3344"
              r="38.0543"
              stroke="white"
              strokeWidth="2.11413"
            />
            <path
              d="M55.3564 39.3345L31.5725 53.0662L31.5725 25.6028L55.3564 39.3345Z"
              fill="white"
            />
          </svg>
        </Box>
        <Box pos="relative">
          <Text fontWeight="600" mt="30px" mb="10px">
            This course includes:
          </Text>
          <Text
            display="flex"
            mb="10px"
            alignItems="center"
            css={{ svg: { marginRight: "12px" } }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#E2E8F9"
                stroke="#0B0966"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8L16 12L10 16V8Z"
                stroke="#0B0966"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {duration} hours on-demand video
          </Text>

          <Text
            display="flex"
            mb="10px"
            alignItems="center"
            css={{ svg: { marginRight: "12px" } }}
          >
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.08333"
                y="1.08333"
                width="23.8333"
                height="15.1667"
                rx="3.25"
                fill="#E2E8F9"
                stroke="#0B0966"
                strokeWidth="2.16667"
              />
              <path
                d="M10.5625 7.04163H19.5"
                stroke="#0B0966"
                strokeWidth="1.625"
                strokeLinecap="round"
              />
              <path
                d="M15.4375 10.2916L6.5 10.2916"
                stroke="#0B0966"
                strokeWidth="1.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 7.04163H8.125"
                stroke="#0B0966"
                strokeWidth="1.625"
                strokeLinecap="round"
              />
              <path
                d="M19.5 10.2916L17.875 10.2916"
                stroke="#0B0966"
                strokeWidth="1.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Subtitle in Polish
          </Text>

          <Text
            display="flex"
            mb="10px"
            alignItems="center"
            css={{ svg: { marginRight: "12px" } }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#E2E8F9"
                stroke="#0B0966"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8L16 12L10 16V8Z"
                stroke="#0B0966"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {resources} downloadable resources
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
export default CourseAboutTab;
