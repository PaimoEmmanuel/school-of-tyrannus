import { Box, Input } from "@chakra-ui/react";
import * as React from "react";

interface INavSearchProps {}

const NavSearch: React.FunctionComponent<INavSearchProps> = (props) => {
  return (
    <Box
      w="424px"
      pos="relative"
      __css={{
        svg: {
          pos: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        },
      }}
    >
      <Input
        placeholder="Search course, topic, phrase e.t.c."
        _placeholder={{ fontSize: "14px", color: "#767474", fontWeight: "400" }}
        bgColor="#F7F9FB"
        borderRadius="4px"
        pl="44px"
        border="none"
        _focus={{ border: "1px" }}
      />
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.33333 11.6667C9.27885 11.6667 11.6667 9.27885 11.6667 6.33333C11.6667 3.38781 9.27885 1 6.33333 1C3.38781 1 1 3.38781 1 6.33333C1 9.27885 3.38781 11.6667 6.33333 11.6667Z"
          stroke="#A0A0A0"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9996 13.0001L10.0996 10.1001"
          stroke="#A0A0A0"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default NavSearch;
