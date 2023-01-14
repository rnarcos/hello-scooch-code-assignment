import { BASE_URL, endpoints, EndpointsResponses } from './useFetch.data';

type UseFetch = () => {
  [Endpoint in keyof EndpointsResponses]: (
    requestProps: Omit<RequestInit, 'method'>,
  ) => Promise<EndpointsResponses[Endpoint]>;
};

const useFetch: UseFetch = () => {
  const getAllergiesQuiz: ReturnType<UseFetch>['getAllergiesQuiz'] = (
    requestProps,
  ) => {
    return fetch(`${BASE_URL}${endpoints.getAllergiesQuiz.resource}`, {
      ...requestProps,
      method: endpoints.getAllergiesQuiz.method,
    }).then(
      (response) =>
        response.json() as Promise<EndpointsResponses['getAllergiesQuiz']>,
    );
  };

  const answerAllergiesQuiz: ReturnType<UseFetch>['answerAllergiesQuiz'] = (
    requestProps,
  ) => {
    return fetch(`${BASE_URL}${endpoints.answerAllergiesQuiz.resource}`, {
      ...requestProps,
      method: endpoints.answerAllergiesQuiz.method,
    }).then(
      (response) =>
        response.json() as Promise<EndpointsResponses['answerAllergiesQuiz']>,
    );
  };

  return {
    getAllergiesQuiz,
    answerAllergiesQuiz,
  };
};

export default useFetch;
