import "../styles/globals.css";
import type { AppProps } from "next/app";

// Context
import { TransactionProvider } from "../context/TransactionContext";

// Next
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <Head>
        <title>Cointrading ICO</title>
      </Head>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}

export default MyApp;
