import * as React from 'react';
import {
  StyledInput,
  InputContainer,
  InputLeftAddon,
  InputRightAddon,
} from '../styles/Input.styles';
import { InputProps } from './input_types';

const Input = ({
  type = 'text',
  label,
  variant = 'outlined',
  ...props
}: InputProps) => {
  return (
    <InputContainer hasAddon={props.leftAddon || props.rightAddon}>
      {label && (
        <label htmlFor={label} className="input-span">
          {label}
        </label>
      )}
      {props.leftAddon && (
        <InputLeftAddon size={props.size}>{props.leftAddon}</InputLeftAddon>
      )}
      <StyledInput id={label} variant={variant} {...props} />
      {props.rightAddon && (
        <InputRightAddon size={props.size}>{props.rightAddon}</InputRightAddon>
      )}
    </InputContainer>
  );
};

export default Input;
