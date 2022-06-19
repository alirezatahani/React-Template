import styled from 'styled-components';
import { SliderProps } from '../content/slider_types';

export const SliderWrapper = styled.div<SliderProps>(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
}));

export const SliderResult = styled.div<SliderProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.whiteSmoke,
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  marginLeft: 4,
  width: 50,
  height: 24,
  borderRadius: 4,
}));

export const HeroInput = styled.input<SliderProps>(({}) => ({}));
