import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../style-config/theme";
import UserContextProvider from "../context/user-context";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
