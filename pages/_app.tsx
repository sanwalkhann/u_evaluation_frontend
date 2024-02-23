import Head from "next/head";
import { ComponentType } from "react";
import "../styles/style.scss";

interface MyAppProps {
  Component: ComponentType;
  pageProps: any; // You might want to replace 'any' with the appropriate type for pageProps
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Xtreme Starter Next Js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;