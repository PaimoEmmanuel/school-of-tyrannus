import {
  Box,
  Input as ChakraInput,
  InputGroup,
  InputProps,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface IInputProps extends InputProps {
  label: string;
}

const Input: React.FC<IInputProps> = ({ label, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Box pos="relative" h="37px" w="300px" mb="30px">
      <Text
        as="label"
        pos={"absolute"}
        top={focus ? "-8px" : "-24px"}
        fontSize={focus ? "8px" : "12px"}
        lineHeight="18px"
        left={focus ? "20px" : "0"}
        transition="all .3s"
        px="3px"
        zIndex={focus ? "2" : "1"}
        bgColor="white"
      >
        {label}
      </Text>
      <ChakraInput
        type="text"
        w="100%"
        h="100%"
        bgColor="text.blue"
        border="none"
        fontSize="12px"
        color="text.gray"
        _focus={{
          border: "1px solid rgba(238, 153, 56, 0.6)",
          boxShadow: "0px 0px 10px rgba(247, 174, 90, 0.22)",
          bgColor: "white",
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        {...props}
        placeholder={focus ? "" : props.placeholder}
      />
    </Box>
  );
};

export default Input;
