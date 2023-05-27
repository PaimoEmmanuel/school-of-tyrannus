import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../style-config/theme";
import UserContextProvider from "../context/user-context";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <Script
          id="whatsapp-widget"
          dangerouslySetInnerHTML={{
            __html: `!function(){var e,t,n,a;window.MyAliceWebChat||((t=document.createElement("div")).id="myAliceWebChat",(n=document.createElement("script")).type="text/javascript",n.async=!0,n.src="https://myalice-widget.netlify.app/index.js",(a=(e=document.body.getElementsByTagName("script"))[e.length-1]).parentNode.insertBefore(n,a),a.parentNode.insertBefore(t,a),n.addEventListener("load",(function(){MyAliceWebChat.init({selector:"myAliceWebChat",number:"2347010625108",message:"",color:"#25D366",channel:"wa",boxShadow:"none",text:"",theme:"light",position:"right",mb:"70px",mx:"20px",radius:"20px"})})))}();`,
          }}
        />
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
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
