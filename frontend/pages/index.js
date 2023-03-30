import Head from "next/head";

import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starknet Quizz</title>
        <meta name="description" content="A simple starknet quizz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/starknetLogo.svg" />
      </Head>
      <Header />
    </>
  );
}
