import React from 'react';
import {
  HeroInput,
  SliderResult,
  SliderWrapper,
} from '../styles/Slider.styles';
import { SliderProps } from './slider_types';

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min,
  max,
}: SliderProps) => {
  return (
    <SliderWrapper>
      <HeroInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <SliderResult>{value}</SliderResult>
    </SliderWrapper>
  );
};

Slider.defaultProps = {};
export default Slider;
