import React from 'react';
import { Props } from './MultipleChoice.props';
import {
  StyledFormRadioGroup,
  StyledFormGroupLabel,
  StyledFormLabel,
  StyledFormRadio,
} from './MultipleChoice.style';

function MultipleChoice(props: Props) {
  const { as = 'fieldset', label, choices, state, name, ...rest } = props;

  return (
    <StyledFormRadioGroup
      state={state}
      forwardedAs={as}
      id={undefined}
      {...rest}
    >
      {typeof label !== 'undefined' && (
        <StyledFormGroupLabel forwardedAs="legend">
          {label}
        </StyledFormGroupLabel>
      )}
      {choices.map((choice) => (
        <StyledFormLabel
          forwardedAs="label"
          key={choice.value}
          state={state}
          name={name}
          htmlFor={undefined}
          id={undefined}
        >
          <StyledFormRadio
            value={choice.value}
            state={state}
            name={name}
            id={undefined}
          />
          {choice.text}
        </StyledFormLabel>
      ))}
    </StyledFormRadioGroup>
  );
}

export default MultipleChoice;
