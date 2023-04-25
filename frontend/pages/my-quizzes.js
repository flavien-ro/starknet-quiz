import React from "react";
import Header from "@/components/Header/Header";
import Myquizz from "@/components/MyQuizzes/MyQuizz";

import { getMyQuizzes } from "@/requests/useQuizz";

const MyQuizzes = () => {
  const { data, mutateMyQuizz, isLoading } = getMyQuizzes();

  return (
    <div>
      <Header mutateMyQuizz={mutateMyQuizz} />
      <Myquizz data={data} isLoading={isLoading} mutateQuizz={mutateMyQuizz} />
    </div>
  );
};

export default MyQuizzes;
