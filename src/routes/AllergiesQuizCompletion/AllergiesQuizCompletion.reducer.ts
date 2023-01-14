import { EndpointsResponses } from '../../hooks/useFetch/useFetch.data';

export type State =
  | {
      status: 'idle' | 'loading';
      payload: undefined;
    }
  | {
      status: 'complete';
      payload: EndpointsResponses['answerAllergiesQuiz'];
    }
  | {
      status: 'failed';
      payload: Error;
    };

export const initialState: State = {
  status: 'idle',
  payload: undefined,
};

interface AnswerAllergiesQuizInitiate {
  type: 'answerAllergiesQuizInitiate';
}

interface AnswerAllergiesQuizFetchComplete {
  type: 'answerAllergiesQuizComplete';
  payload: EndpointsResponses['answerAllergiesQuiz'];
}

interface AnswerAllergiesQuizFetchFailed {
  type: 'answerAllergiesQuizFailed';
  payload: Error;
}

type Action =
  | AnswerAllergiesQuizInitiate
  | AnswerAllergiesQuizFetchComplete
  | AnswerAllergiesQuizFetchFailed;

function AllergiesQuizCompletionReducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case 'answerAllergiesQuizInitiate': {
      return {
        ...state,
        status: 'loading',
        payload: undefined,
      };
    }

    case 'answerAllergiesQuizComplete': {
      return {
        ...state,
        status: 'complete',
        payload: action.payload,
      };
    }

    case 'answerAllergiesQuizFailed': {
      return {
        ...state,
        status: 'failed',
        payload: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default AllergiesQuizCompletionReducer;
