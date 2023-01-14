import React, { useEffect, useReducer, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks';
import withAllergiesQuizCompletionState from './AllergiesQuizCompletion.hoc';
import AllergiesQuizCompletionReducer, {
  initialState,
} from './AllergiesQuizCompletion.reducer';
import {
  Container,
  StyledCard,
  StyledCardHeader,
  StyledCardHeading,
  StyledCardBody,
  CardBodyText,
  ButtonContainer,
  Button,
  StyledChevronLeftIcon,
  HeaderCenteringHelper,
} from './AllergiesQuizCompletion.style';

function AllergiesQuizCompletion() {
  const { state: formState } = useLocation();
  const navigate = useNavigate();
  const { answerAllergiesQuiz } = useFetch();

  const requestAbortControllerRef = useRef<undefined | AbortController>(
    undefined,
  );

  const [state, dispatch] = useReducer(
    AllergiesQuizCompletionReducer,
    initialState,
  );

  useEffect(() => {
    requestAbortControllerRef.current = new AbortController();

    dispatch({ type: 'answerAllergiesQuizInitiate' });
    answerAllergiesQuiz({
      signal: requestAbortControllerRef.current.signal,
      body: JSON.stringify(formState),
    })
      .then((response) => {
        requestAbortControllerRef.current = undefined;

        dispatch({ type: 'answerAllergiesQuizComplete', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'answerAllergiesQuizFailed', payload: error });
      });

    return () => {
      if (typeof requestAbortControllerRef.current === 'undefined') return;

      requestAbortControllerRef.current.abort();
    };
  }, []);

  const handleNavigateBackToAllergiesForm = () => {
    navigate('/');
  };

  switch (state.status) {
    case 'loading':
    case 'complete': {
      return (
        <Container>
          <StyledCard>
            <StyledCardBody>
              <CardBodyText>
                {state.status === 'loading'
                  ? 'Submitting your answers to our team...'
                  : 'Our team will evaluate your answers and get back to you as soon as possible!'}
              </CardBodyText>
            </StyledCardBody>
          </StyledCard>
        </Container>
      );
    }
    case 'failed': {
      return (
        <Container>
          <StyledCard>
            <StyledCardHeader>
              <ButtonContainer>
                <Button onClick={handleNavigateBackToAllergiesForm}>
                  <StyledChevronLeftIcon />
                </Button>
              </ButtonContainer>
              <StyledCardHeading>
                Go back to the allergies form
              </StyledCardHeading>
              <HeaderCenteringHelper />
            </StyledCardHeader>
            <StyledCardBody>
              <CardBodyText>
                Your answer could not be processed right now, please try again.
              </CardBodyText>
            </StyledCardBody>
          </StyledCard>
        </Container>
      );
    }

    default: {
      return null;
    }
  }
}

export default withAllergiesQuizCompletionState(AllergiesQuizCompletion);
