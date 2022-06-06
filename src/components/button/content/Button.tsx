import React from 'react';
import { StyledButton } from '../styles/Button.styles';
import { ButtonProps } from './button_types';

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
  size: 'md',
  variant: 'filled',
  color: 'primary',
  rounded: false,
  block: false,
  disabled: false,
};
export default Button;
