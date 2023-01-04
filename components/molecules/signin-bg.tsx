import {Box} from "@chakra-ui/react";

interface ISigninBgProps {
  course?: boolean
}

const SigninBg: React.FC<ISigninBgProps> = ({course}) => (
  <>
    <Box pos="absolute" left="0" top={course ? "50px" : "0"} bottom={course ? "" : "0"} w="100%" overflow="hidden">
      <svg
        width="616"
        height="667"
        viewBox="0 0 616 667"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-136.661 125.802C124.889 34.8608 529.952 -68.1017 575.683 290.778C620.974 646.206 332.658 893.878 187.988 961.5"
          stroke="#ECF0FF"
          strokeWidth="73"
        />
      </svg>
    </Box>
    <Box pos="absolute" right="0" top={course ? "50px" : ""} bottom={course ? "" : "0"}>
      <svg
        width="465"
        height="603"
        viewBox="0 0 465 603"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.338 926.027C115.048 529.849 259.697 -64.7952 483.403 53.0904C704.957 169.842 699.605 680.182 665.209 907.966"
          stroke="#ECF0FF"
          strokeWidth="73"
        />
      </svg>
    </Box>
  </>
);
export default SigninBg;
