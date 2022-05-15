import * as React from 'react';
import { StyledButton } from '../styles/Button.styles';
import { ButtonProps } from './button_types';

const Button: React.FC<ButtonProps> = ({
  children,
  kind = 'default',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton kind={kind} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
