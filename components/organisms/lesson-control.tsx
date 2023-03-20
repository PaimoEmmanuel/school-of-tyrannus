import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

interface ILessonControlProps {
  goToNext: () => void;
  goToPrev: () => void;
  isFirstContent: boolean;
  isLastContent: boolean;
  title: string;
  index: number;
}

const LessonControl: React.FunctionComponent<ILessonControlProps> = ({
  goToNext,
  goToPrev,
  isFirstContent,
  isLastContent,
  title,
  index,
}) => {
  return (
    <Flex
      pos="fixed"
      left="0"
      bottom="0px"
      fontSize="14px"
      fontWeight="500"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p={{ base: "22px", lg: "22px 50px" }}
      gap="12px"
      bgColor="white"
      boxShadow="0px -4px 32px rgba(104, 104, 104, 0.17)"
      zIndex="99"
    >
      <Text
        as="button"
        display="flex"
        alignItems="center"
        gap="8px"
        onClick={goToPrev}
        opacity={isFirstContent ? "0.5" : "1"}
        disabled={isFirstContent}
      >
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.08239 0.364058C2.98906 0.606724 2.88639 0.830725 2.77439 1.03606C2.66239 1.25072 2.53639 1.45139 2.39639 1.63806L9.90039 1.63806L9.90039 2.78606L2.39639 2.78606C2.52706 2.97272 2.64839 3.16872 2.76039 3.37406C2.87239 3.58872 2.97506 3.81739 3.06839 4.06006L2.00439 4.06006C1.42572 3.37872 0.791058 2.86072 0.100391 2.50606L0.100391 1.90406C0.791058 1.56806 1.42572 1.05472 2.00439 0.364058L3.08239 0.364058Z"
            fill="black"
          />
        </svg>
        Previous
      </Text>
      <Text>
        <Text as="span" display={{ base: "none", lg: "inline" }}>
          Lesson {index + 1} -{" "}
        </Text>
        <Text as="span" fontWeight="700">
          {title}
        </Text>
      </Text>
      <Text
        as="button"
        display="flex"
        alignItems="center"
        gap="8px"
        onClick={goToNext}
        disabled={isLastContent}
        opacity={isLastContent ? "0.5" : "1"}
      >
        Next
        <svg
          width="10"
          height="4"
          viewBox="0 0 10 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.818 3.696C6.91133 3.45333 7.014 3.22933 7.126 3.024C7.238 2.80933 7.364 2.60867 7.504 2.422L4.23476e-07 2.422L2.22753e-07 1.274L7.504 1.274C7.37333 1.08733 7.252 0.891332 7.14 0.685999C7.028 0.471332 6.92533 0.242666 6.832 -1.19454e-06L7.896 -1.38058e-06C8.47467 0.681332 9.10933 1.19933 9.8 1.554L9.8 2.156C9.10933 2.492 8.47467 3.00533 7.896 3.696L6.818 3.696Z"
            fill="black"
          />
        </svg>
      </Text>
    </Flex>
  );
};

export default LessonControl;
