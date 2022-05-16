import styled, { css } from 'styled-components';
import {
  ToggleContainerProps,
  ToggleInputProps,
  ToggleSliderProps,
} from '../toggle/toggle_types';
import {
  getSize,
  colorName,
  getVariantColor,
  calculateContainerHeight,
  calculateSliderSize,
  calculateIndent,
} from '../../utils/utils';

export const ToggleContainer = styled.label<ToggleContainerProps>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => getSize(size) + 'px'};
  height: ${({ size }) => calculateContainerHeight(size) + 'px'};
`;

export const ToggleInput = styled.input.attrs({
  type: 'checkbox',
})<ToggleInputProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .toggle__slider {
    background-color: ${({ variant }) => getVariantColor(variant)};
  }

  &:checked + .toggle__slider::before {
    transform: translateX(
      ${({ sliderSize }) => calculateSliderSize(sliderSize) + 'px'}
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
  border-radius: ${({ size }) => calculateContainerHeight(size) + 'px'};

  &::before {
    position: absolute;
    content: '';
    height: ${({ size }) => calculateSliderSize(size) + 'px'};
    width: ${({ size }) => calculateSliderSize(size) + 'px'};
    left: ${({ size }) => calculateIndent(size) + 'px'};
    bottom: ${({ size }) => calculateIndent(size) + 'px'};
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
