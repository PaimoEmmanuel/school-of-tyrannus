import { useState } from "react";
import { Box, InputProps, Text } from "@chakra-ui/react";
import Input from "./input";

interface IPasswordInputProps extends InputProps {
  label: string;
}

const PasswordInput: React.FunctionComponent<IPasswordInputProps> = ({
  label,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box pos="relative">
      <Text
        as="button"
        color="black"
        pos="absolute"
        top="50%"
        transform="translateY(-50%)"
        right="20px"
        zIndex="2"
        fontWeight="600"
        fontSize="8px"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? "HIDE" : "SHOW"}
      </Text>
      <Input
        value={props.value}
        onChange={props.onChange}
        label={"Confirm Password"}
        placeholder="Confirm password"
        {...props}
        pr="48px"
        type={showPassword ? "text" : "password"}
      />
    </Box>
  );
};

export default PasswordInput;
