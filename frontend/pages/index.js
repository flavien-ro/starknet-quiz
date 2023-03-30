import Head from "next/head";
import Header from "@/components/Header/Header";
import Allquizz from "@/components/AllQuizz/Allquizz";
import { getAllQuizz } from "@/requests/useQuizz";

export default function Home() {
  const { data, error, mutateQuizz, isLoading } = getAllQuizz();

  return (
    <>
      <Head>
        <title>Starknet Quizz</title>
        <meta name="description" content="A simple starknet quizz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/starknetLogo.svg" />
      </Head>
      <Header mutateQuizz={mutateQuizz} />
      <Allquizz
        data={data}
        isLoading={isLoading}
        error={error}
        mutateQuizz={mutateQuizz}
      />
    </>
  );
}
