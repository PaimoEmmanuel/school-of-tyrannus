import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

interface HomeCourseBgProps extends BoxProps {}
export const HomeCourseBgA: React.FunctionComponent<HomeCourseBgProps> = ({
  ...props
}) => {
  return (
    <Box zIndex="0" {...props}>
      <svg
        width="558"
        height="466"
        viewBox="0 0 558 466"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-196.493 92.6343C65.0572 33.8835 470.12 -32.6333 515.851 199.214C561.142 428.83 272.826 588.834 128.156 632.52"
          stroke="#F3F6FF"
          strokeWidth="73"
        />
      </svg>
    </Box>
  );
};

export const HomeCourseBgB: React.FunctionComponent<HomeCourseBgProps> = ({
  ...props
}) => {
  return (
    <Box zIndex="0" {...props}>
      <svg
        width="491"
        height="464"
        viewBox="0 0 491 464"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.1881 724.989C26.4868 457.506 23.2503 47.0312 259.377 37.612C493.231 28.2834 606.845 337.831 627.691 487.507"
          stroke="#F8F9FF"
          strokeWidth="73"
        />
      </svg>
    </Box>
  );
};

export const HomeCourseBgC: React.FunctionComponent<HomeCourseBgProps> = ({
  ...props
}) => {
  return (
    <Box zIndex="0" {...props}>
      <svg
        width="1154"
        height="654"
        viewBox="0 0 1154 654"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.0001 689.923C181.299 467.279 429.361 140.223 622.115 276.936C813.014 412.334 713.991 726.852 639.112 858.118"
          stroke="#FFEEF6"
          strokeWidth="73"
        />
      </svg>
    </Box>
  );
};
