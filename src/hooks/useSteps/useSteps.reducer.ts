export interface State {
  activeStep: number;
  direction: 'previous' | 'next';
}

export const initialState: State = {
  activeStep: 0,
  direction: 'next',
};

interface PreviousStepAction {
  type: 'PREVIOUS_STEP';
}

interface NextStepAction {
  type: 'NEXT_STEP';
}

type Actions = PreviousStepAction | NextStepAction;

function UseStepsReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case 'PREVIOUS_STEP': {
      return {
        ...state,
        activeStep: state.activeStep - 1,
        direction: 'previous',
      };
    }

    case 'NEXT_STEP': {
      return {
        ...state,
        activeStep: state.activeStep + 1,
        direction: 'next',
      };
    }

    default: {
      return state;
    }
  }
}

export default UseStepsReducer;
