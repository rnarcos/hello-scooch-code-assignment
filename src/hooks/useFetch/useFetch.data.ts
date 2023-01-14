export const BASE_URL = 'https://sch-health-backend-stage.herokuapp.com/';

export const endpoints = {
  getAllergiesQuiz: {
    method: 'GET',
    resource: 'quizzes/allergies',
  },
  answerAllergiesQuiz: {
    method: 'POST',
    resource: 'quizzes/allergies',
  },
} as const;

export type EndpointsResponses = {
  getAllergiesQuiz: GetAllergiesQuizResponse;
  answerAllergiesQuiz: unknown;
};

interface GetAllergiesQuizResponse {
  data: {
    title: string;
    questions: {
      slug: string;
      text: string;
      type: string;
      choices: {
        text: string;
        value: string;
      }[];
      skipConditions?: {
        slug: string;
        value: string;
      }[];
    }[];
  };
}
