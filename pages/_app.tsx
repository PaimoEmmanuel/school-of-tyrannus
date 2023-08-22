import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../style-config/theme";
import UserContextProvider from "../context/user-context";
import Script from "next/script";
import CourseContextProvider from "../context/course-context";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import React from "react";

Bugsnag.start({
  apiKey: process.env.NEXT_PUBLIC_API_BUGSNAG_KEY || "",
  plugins: [new BugsnagPluginReact()],
  // otherOptions: value,
});
// Create the error boundary...
const ErrorBoundary = (
  Bugsnag.getPlugin("react") ? (
    Bugsnag.getPlugin("react")?.createErrorBoundary(React)
  ) : (
    <></>
  )
) as React.ElementType;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <UserContextProvider>
          <CourseContextProvider>
            {/* Hotjar Tracking Code for https://tyrannus.nlwc.church */}
            <Script
              id="hotjar"
              dangerouslySetInnerHTML={{
                __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3509647,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            />
            <Script
              id="google-analytics-external"
              src="https://www.googletagmanager.com/gtag/js?id=G-TFR2JP0B3N"
              strategy="beforeInteractive"
            />
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TFR2JP0B3N');`,
              }}
            />
            <Component {...pageProps} />
          </CourseContextProvider>
        </UserContextProvider>
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
