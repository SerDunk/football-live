"use server";

interface OpinionData {
  title: string;
  opinion: string;
}

interface OpinionDataReturn {
  data?: OpinionData;
  error?: string;
}

export default async function addOpinion(
  formData: FormData
): Promise<OpinionDataReturn> {
  const titleValue = formData.get("title");
  const opinionValue = formData.get("opinion");

  if (!titleValue || titleValue == "") {
    return { error: "Title is missing" };
  }

  if (!opinionValue || opinionValue == "") {
    return { error: "Opinion is missing" };
  }

  const title = titleValue.toString();
  const opinion = opinionValue.toString();

  if (title.length < 5 || opinion.length < 10) {
    return { error: "You don't deserve to have an opinion" };
  }

  const opinionData: OpinionData = {
    title,
    opinion,
  };

  return { data: opinionData };
}
