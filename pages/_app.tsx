import GlobalStyle from "@src/theme/GlobalStyle";
import { AppProps } from "next/app";
import React from "react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <Component {...pageProps} />
    </>
  )
}
