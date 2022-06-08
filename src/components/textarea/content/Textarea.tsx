import { Col } from '../../grid/index';
import React from 'react';
import { Input } from '../../input/index';
import {
  StyledTextarea,
  TextareaContainer,
  TextareaLabel,
} from '../styles/Textarea.styles';
import { TextareaProps } from './textarea_types';

const Textarea: React.FC<TextareaProps> = ({ ...props }: TextareaProps) => {
  return (
    <>
      <TextareaContainer direction={props.direction} align={props.align}>
        <TextareaLabel htmlFor={props.name}>{props.label}</TextareaLabel>
        <StyledTextarea {...props} id={props.name} />
      </TextareaContainer>
    </>
  );
};

Textarea.defaultProps = {
  scale: 'md',
  rounded: false,
  variant: 'outlined',
  width: '500px',
  height: '300px',
};

export default Textarea;
