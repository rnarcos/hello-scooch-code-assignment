import { ButtonProps } from 'ariakit/button';

export interface Props extends ButtonProps {
  primary?: boolean;
}

export interface DefaultProps extends Props {
  primary: NonNullable<Props['primary']>;
}

export const defaultProps: DefaultProps = {
  primary: false,
};
