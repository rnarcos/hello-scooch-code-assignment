import React, { useEffect, useRef, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormSubmit, useFormState } from 'ariakit/form';
import { useFetch, useSteps } from '../../hooks';
import {
  CardHeader,
  CardHeading,
  CardBody,
  MultipleChoiceInput,
} from '../../components';
import AllergiesQuizReducer, { initialState } from './AllergiesQuiz.reducer';
import {
  Container,
  StyledCard,
  ButtonsContainer,
  StyledButton,
} from './AllergiesQuiz.style';

function AllergiesQuizPage() {
  const navigate = useNavigate();
  const requestAbortControllerRef = useRef<undefined | AbortController>(
    undefined,
  );

  const { getAllergiesQuiz } = useFetch();
  const { activeStep, handleNextStep, handlePreviousStep } = useSteps();

  const [state, dispatch] = useReducer(AllergiesQuizReducer, initialState);

  const form = useFormState();
  form.useSubmit(() => {
    navigate('/complete', {
      state: {
        quizAnswers: form.values,
      },
    });
  });

  useEffect(() => {
    requestAbortControllerRef.current = new AbortController();

    dispatch({ type: 'getAllergiesQuizInitiate' });
    getAllergiesQuiz({
      signal: requestAbortControllerRef.current.signal,
    })
      .then((response) => {
        requestAbortControllerRef.current = undefined;

        dispatch({ type: 'getAllergiesQuizComplete', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'getAllergiesQuizFailed', payload: error });
      });

    return () => {
      if (typeof requestAbortControllerRef.current === 'undefined') return;

      requestAbortControllerRef.current.abort();
    };
  }, []);

  if (state.status !== 'complete') {
    return null;
  }

  const filteredSteps = state.payload.data.questions.filter(
    (allergyQuestion) => {
      if (typeof allergyQuestion.skipConditions === 'undefined') return true;

      const hasFormStateConditionsToSkipQuestion = allergyQuestion.skipConditions.every(
        (skipCondition) => {
          const formValueKey = skipCondition.slug;

          return form.values[formValueKey] === skipCondition.value;
        },
      );

      return !hasFormStateConditionsToSkipQuestion;
    },
  );

  const currentQuestionStep = filteredSteps[activeStep];

  const onPreviousStepClick = () => {
    const currentQuestionFormKey = currentQuestionStep.slug;
    form.setValue(currentQuestionFormKey, undefined);

    handlePreviousStep();
  };

  const onNextStepClick = () => {
    handleNextStep();
  };

  const isLastStep = activeStep === filteredSteps.length - 1;

  return (
    <Container>
      <StyledCard>
        <CardHeader>
          <CardHeading>{state.payload.data.title}</CardHeading>
        </CardHeader>
        <CardBody>
          <Form state={form}>
            <MultipleChoiceInput
              state={form}
              name={currentQuestionStep.slug}
              label={currentQuestionStep.text}
              choices={currentQuestionStep.choices}
            />
            <ButtonsContainer>
              <StyledButton
                disabled={activeStep === 0}
                onClick={onPreviousStepClick}
              >
                Previous step
              </StyledButton>
              {isLastStep ? (
                <FormSubmit
                  primary
                  as={StyledButton}
                  disabled={
                    typeof form.getValue(currentQuestionStep.slug) ===
                    'undefined'
                  }
                >
                  Submit
                </FormSubmit>
              ) : (
                <StyledButton
                  primary
                  disabled={
                    typeof form.getValue(currentQuestionStep.slug) ===
                    'undefined'
                  }
                  onClick={onNextStepClick}
                >
                  Next step
                </StyledButton>
              )}
            </ButtonsContainer>
          </Form>
        </CardBody>
      </StyledCard>
    </Container>
  );
}

export default AllergiesQuizPage;
