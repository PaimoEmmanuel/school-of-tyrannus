import { useState } from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

interface ICourseAboutTabProps {
  title: string;
  about: string;
  thumbnail: string;
  totalDuration: number;
  totalResources: number;
  introVideoRetrievalId: string;
}

const CourseAboutTab: React.FC<ICourseAboutTabProps> = ({
  title,
  about,
  thumbnail,
  totalDuration,
  totalResources,
  introVideoRetrievalId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      flexDir={{ base: "column", xl: "row" }}
      gap="50px"
      px={{ lg: "175px" }}
    >
      <Box w="100%">
        <Text
          fontWeight="600"
          mb="32px"
          dangerouslySetInnerHTML={{ __html: title }}
        >
          {/* {title} */}
        </Text>
        {/* {about} */}
        <Box
          textAlign="justify"
          __css={{ p: { marginBottom: "1.5rem" } }}
          dangerouslySetInnerHTML={{
            __html: about,
          }}
        ></Box>
      </Box>
      <Box
        bgColor="text.blue"
        maxW={{ lg: "448px" }}
        minW={{ lg: "448px" }}
        borderRadius="8px"
        p="30px"
        pb="50px"
        pos="relative"
      >
        
        <Box
          pos="relative"
          zIndex="1"
          h="234px"
          backgroundImage={thumbnail}
          bgPos="50%"
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
        >

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
            {totalDuration} hours on-demand video
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
            {totalResources} downloadable resources
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
export default CourseAboutTab;
