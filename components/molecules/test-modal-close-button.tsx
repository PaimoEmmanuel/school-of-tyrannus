import { Box } from "@chakra-ui/react";

interface ITestModalCloseButtonProps {
  onModalCLose: () => void;
}

const TestModalCloseButton: React.FunctionComponent<
  ITestModalCloseButtonProps
> = ({ onModalCLose }) => {
  return (
    <Box
      as="button"
      pos="absolute"
      right="-4.5rem"
      top="-8rem"
      onClick={onModalCLose}
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1074_3393)">
          <circle cx="36" cy="35" r="23" fill="white" />
          <circle cx="36" cy="35" r="22.5" stroke="#D9ECFF" />
        </g>
        <path
          d="M42 29L30 41"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 29L42 41"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_d_1074_3393"
            x="0"
            y="0"
            width="72"
            height="72"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="6.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.832587 0 0 0 0 0.87671 0 0 0 0 0.920833 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1074_3393"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1074_3393"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

export default TestModalCloseButton;
