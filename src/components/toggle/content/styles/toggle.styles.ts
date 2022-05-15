import styled, { css } from 'styled-components';
import {
  ToggleContainerProps,
  ToggleInputProps,
  ToggleSliderProps,
} from '../toggle/toggle_types';
import {
  handleTheme,
  calculateContainerHeight,
  calculateSliderSize,
} from '../../utils/utils';

export const ToggleContainer = styled.label<ToggleContainerProps>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size + 'px'};
  height: ${({ size, indent }) => calculateContainerHeight(size, indent)};
`;

export const ToggleInput = styled.input.attrs({
  type: 'checkbox',
})<ToggleInputProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .toggle__slider {
    background-color: ${({ theme }) => handleTheme(theme)};
  }

  &:checked + .toggle__slider::before {
    transform: translateX(
      ${({ size, indent }) => calculateSliderSize(size, indent)}
    );
  }
`;

export const ToggleSlider = styled.span.attrs({
  className: 'toggle__slider',
})<ToggleSliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: ${({ size, indent }) =>
    calculateContainerHeight(size, indent)};

  &::before {
    position: absolute;
    content: '';
    height: ${({ size, indent }) => calculateSliderSize(size, indent)};
    width: ${({ size, indent }) => calculateSliderSize(size, indent)};
    left: ${({ indent }) => indent + 'px'};
    bottom: ${({ indent }) => indent + 'px'};
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
