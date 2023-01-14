import styled from 'styled-components';
import {
  FormRadioGroup,
  FormGroupLabel,
  FormLabel,
  FormRadio,
} from 'ariakit/form';

export const StyledFormRadioGroup = styled(FormRadioGroup)`
  display: flex;

  flex-direction: column;
  row-gap: 0.2rem;
`;

export const StyledFormGroupLabel = styled(FormGroupLabel)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 0.25rem;
`;

export const StyledFormLabel = styled(FormLabel)`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

export const StyledFormRadio = styled(FormRadio)`
  margin: 0;
  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid hsl(204 100% 40%);
    outline-offset: 2px;
  }

  accent-color: rgb(25, 118, 210);
`;
