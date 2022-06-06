import React from 'react';
import {
  StyledInput,
  InputContainer,
  InputLeftAddon,
  InputRightAddon,
  InputLabel,
} from '../../styles/Input.styles';
import { InputProps } from './input_types';

const Input: React.FC<InputProps> = ({ ...props }: InputProps) => {
  return (
    <InputContainer>
      {props.label && (
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      )}
      {props.leftAddon && (
        <InputLeftAddon scale={props.scale}>{props.leftAddon}</InputLeftAddon>
      )}
      <StyledInput id={props.name} {...props} />
      {props.rightAddon && (
        <InputRightAddon scale={props.scale}>
          {props.rightAddon}
        </InputRightAddon>
      )}
    </InputContainer>
  );
};

Input.defaultProps = {
  scale: 'md',
  rounded: false,
  variant: 'outlined',
};

export default Input;
