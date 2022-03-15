import { Box, Text, Flex, Img } from "@chakra-ui/react";
import { useState } from "react";
import Testimony from "../molecules/testimony";

interface IReviewsProps {
  page?: string;
}

const Reviews: React.FunctionComponent<IReviewsProps> = ({ page }) => {
  const reviews = [
    {
      name: "Gbemi Adebayo",
      occupation: "Lawyer",
      image: "/assets/images/video-poster.png",
      testimony:
        "Since I started the course on Charity, a rush of grace has come with relating better with my brethren and my mum. I now see how much change has to occur in me first.",
    },
    {
      name: "Gbemi Lawal",
      occupation: "Accountant",
      image: "/assets/images/banner.png",
      testimony:
        "Since I started the course on Charity, a rush of grace has come with relating better me first.",
    },
    {
      name: "Seun Adebayo",
      occupation: "Doctor",
      image: "/assets/images/video-poster.png",
      testimony: "I now see how much change has to occur in me first.",
    },
  ];
  const [translate, setTranslate] = useState(0);
  return (
    <Box pt="53px" pb="90px" px="175px">
      {page !== "home" && (
        <Text fontWeight="600" mb="54px">
          Reviews
        </Text>
      )}
      <Box overflow="hidden">
        <Flex
          justifyContent="space-between"
          gap="68px"
          transform={`translateX(-${translate}%)`}
          transition="all .3s"
        >
          {reviews.map((review, index) => (
            <Box minW="47%" key={review.name}>
              <Testimony
                name="Gbemi Adebayo"
                image={review.image}
                occupation="Accountant"
                testimony="Since I started the course on Charity, a rush of grace 
                has come with relating better with my brethren and
                my mum. I now see how much change has to occur
                in me first."
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <Flex mt="95px" justifyContent="space-between">
        <Flex gap="22px">
          {reviews.map(
            (review, index) =>
              index < reviews.length / 2 && (
                <Box
                  key={review.name}
                  as="span"
                  h="10px"
                  w="10px"
                  bgColor={translate / 104 >= index ? "text.orange" : "#C4C4C4"}
                  display="inline-block"
                  borderRadius="50%"
                ></Box>
              )
          )}
        </Flex>
        <Flex>
          <Flex
            transform="rotate(180deg)"
            w="42px"
            h="59px"
            bgColor="white"
            justifyContent="center"
            alignItems="center"
            boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
            borderRadius="4px"
            mr="9px"
            cursor="pointer"
            opacity={translate > 0 ? "1" : "0.4"}
            onClick={() => {
              if (translate > 0) {
                setTranslate(translate - 104);
              }
            }}
          >
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0361328 0.216553H5.01947L15.5061 10.1399L5.01947 20.1066H0.0361328L10.5228 10.1399L0.0361328 0.216553Z"
                fill="black"
              />
            </svg>
          </Flex>
          <Flex
            w="42px"
            h="59px"
            bgColor="white"
            justifyContent="center"
            alignItems="center"
            boxShadow="2px 7px 18px rgba(67, 108, 212, 0.13)"
            borderRadius="4px"
            cursor="pointer"
            opacity={translate < (reviews.length - 2) * 104 ? "1" : "0.4"}
            onClick={() => {
              if (translate < (reviews.length - 2) * 104) {
                setTranslate(translate + 104);
              }
            }}
          >
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0361328 0.216553H5.01947L15.5061 10.1399L5.01947 20.1066H0.0361328L10.5228 10.1399L0.0361328 0.216553Z"
                fill="black"
              />
            </svg>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Reviews;
