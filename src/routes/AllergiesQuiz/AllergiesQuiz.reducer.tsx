import { EndpointsResponses } from '../../hooks/useFetch/useFetch.data';

type State =
  | {
      status: 'idle' | 'loading';
      payload: undefined;
    }
  | {
      status: 'complete';
      payload: EndpointsResponses['getAllergiesQuiz'];
    }
  | {
      status: 'failed';
      payload: Error;
    };

export const initialState: State = {
  status: 'idle',
  payload: undefined,
};

interface GetAllergiesQuizInitiate {
  type: 'getAllergiesQuizInitiate';
}

interface GetAllergiesQuizFetchComplete {
  type: 'getAllergiesQuizComplete';
  payload: EndpointsResponses['getAllergiesQuiz'];
}

interface GetAllergiesQuizFetchFailed {
  type: 'getAllergiesQuizFailed';
  payload: Error;
}

type Action =
  | GetAllergiesQuizInitiate
  | GetAllergiesQuizFetchComplete
  | GetAllergiesQuizFetchFailed;

function AllergiesQuizReducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case 'getAllergiesQuizInitiate': {
      return {
        ...state,
        status: 'loading',
        payload: undefined,
      };
    }

    case 'getAllergiesQuizComplete': {
      return {
        ...state,
        status: 'complete',
        payload: action.payload,
      };
    }

    case 'getAllergiesQuizFailed': {
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

export default AllergiesQuizReducer;
