import { FormRadioGroupProps, FormRadioProps } from 'ariakit/form';

export interface Props
  extends FormRadioGroupProps,
    Pick<FormRadioProps, 'name' | 'state'> {
  choices: { text: string; value: string | number }[];
  label?: string;
}
