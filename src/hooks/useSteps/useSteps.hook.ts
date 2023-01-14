import { useReducer } from 'react';
import UseStepsReducer, { State, initialState } from './useSteps.reducer';

export type UseSteps = (useStepsProps?: {
  initialStep?: State['activeStep'];
}) => {
  activeStep: State['activeStep'];
  direction: State['direction'];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
};

const useSteps: UseSteps = (useStepProps = {}) => {
  const { initialStep = 0 } = useStepProps;

  const [state, dispatch] = useReducer(UseStepsReducer, {
    ...initialState,
    activeStep: initialStep,
  });

  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePreviousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  return {
    activeStep: state.activeStep,
    direction: state.direction,
    handleNextStep,
    handlePreviousStep,
  };
};

export default useSteps;
