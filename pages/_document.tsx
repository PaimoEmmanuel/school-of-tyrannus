import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="An online school for the learning of the doctrine of the new testament" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
