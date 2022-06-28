import styled from 'styled-components';
import { ColorPickerPropsType } from '../content/colorPicker_types';

export const CustomColorPicker = styled.input<ColorPickerPropsType>({
  border: 'none',
  width: '70%',
  height: 30,
});
