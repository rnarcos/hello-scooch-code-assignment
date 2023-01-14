import React, { ComponentType } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

function withAllergiesQuizCompletionState<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>,
) {
  return (props: T) => {
    const { state } = useLocation();

    if (state === null) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
}

export default withAllergiesQuizCompletionState;
