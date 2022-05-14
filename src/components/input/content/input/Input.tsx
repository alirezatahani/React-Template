import * as React from 'react';
import { StyledInput, InputContainer } from '../styles/Input.styles';
import { InputProps } from './input_types';

const Input = ({
  type = 'text',
  label,
  variant = 'outlined',
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      {label && (
        <label htmlFor={label} className="input-span">
          {label}
        </label>
      )}
      <StyledInput id={label} variant={variant} {...props} />
    </InputContainer>
  );
};

export default Input;
