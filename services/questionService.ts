export const getAllQuestions = async () => {
  return fetch(`${process.env.API_URI_PROXY}/question/page`)
    .then((resp) => resp)
    .then((questions) => questions.json());
};

export const findQuestionById = (id: string) => {
  return fetch(`${process.env.API_URI_PROXY}/question/info?id=${id}`)
    .then((resp) => resp)
    .then((question) => question.json());
};

export const getAllComments = (id: string) => {
  return fetch(
    `${process.env.API_URI_PROXY}/answer/page?order=default&question_id=${id}`
  )
    .then((resp) => resp)
    .then((answers) => answers.json());
};

export const getAllRelatedQuestions = (id: string) => {
  return fetch(
    `${process.env.API_URI_PROXY}/question/similar/tag?question_id=${id}`
  )
    .then((resp) => resp)
    .then((questions) => questions.json());
};
