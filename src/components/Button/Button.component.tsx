import React, { forwardRef } from 'react';
import { Props, defaultProps } from './Button.props';
import { StyledButton } from './Button.style';

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { as, primary = defaultProps.primary, ...rest } = props;

  return <StyledButton ref={ref} data-primary={primary} {...rest} />;
});

export default Button;
