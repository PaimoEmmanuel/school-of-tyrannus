import { Box, Text, Flex, Img } from "@chakra-ui/react";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Testimony from "../molecules/testimony";

interface IReviewsProps {
  reviews: { name: string; testimony: string }[];
  page?: string;
}

const Reviews: React.FunctionComponent<IReviewsProps> = ({ page, reviews }) => {
  const [translate, setTranslate] = useState(0);
  const [isLargeScreen] = useMediaQuery("(min-width: 992px)");
  return (
    <Box pt="53px" pb="90px" px={{ base: "1.5rem", lg: "175px" }}>
      {page !== "home" && (
        <Text fontWeight="600" mb="54px">
          Reviews
        </Text>
      )}
      <Box overflow="hidden">
        <Flex
          justifyContent="space-between"
          gap={{ lg: "68px" }}
          transform={`translateX(-${translate}%)`}
          transition="all .3s"
        >
          {reviews.map((review, index) => (
            <Box minW={{ base: "100%", lg: "47%" }} key={review.name}>
              <Testimony name={review.name} testimony={review.testimony} />
            </Box>
          ))}
        </Flex>
      </Box>

      {reviews.length > 1 ? (
        <Flex mt="95px" justifyContent="space-between">
          <Flex gap="22px">
            {reviews.map(
              (review, index) =>
                index <
                  (isLargeScreen ? reviews.length / 2 : reviews.length) && (
                  <Box
                    key={review.name}
                    as="span"
                    h="10px"
                    w="10px"
                    bgColor={
                      translate / 100 >= index ? "text.orange" : "#C4C4C4"
                    }
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
                  setTranslate(translate - 100);
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
              opacity={
                translate <
                (!isLargeScreen ? reviews.length - 1 : reviews.length / 2 - 1) *
                  100
                  ? "1"
                  : "0.4"
              }
              onClick={() => {
                if (isLargeScreen) {
                  if (translate < ((reviews.length - 1) / 2) * 100) {
                    setTranslate(translate + 100);
                  }
                } else {
                  if (translate < (reviews.length - 1) * 100) {
                    setTranslate(translate + 100);
                  }
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
      ) : (
        ""
      )}
    </Box>
  );
};

export default Reviews;
