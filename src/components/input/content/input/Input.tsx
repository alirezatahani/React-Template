import * as React from 'react';
import { StyledInput } from '../styles/Input.styles';
type InputProps = {
  type?: 'text';
  placeholder?: string;
  size?: string;
};

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
