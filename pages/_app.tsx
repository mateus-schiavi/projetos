import { AppProps } from "next/app";
import React from "react";
import GlobalStyle from "src/theme/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <Component {...pageProps} />
    </>
  )
}
