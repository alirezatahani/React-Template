import * as React from 'react';
import { CustomColorPicker } from '../styles/colorPicker.styles';
import { ColorPickerPropsType } from './colorPicker_types';

const ColorPicker: React.FC<ColorPickerPropsType> = ({
  ...props
}: ColorPickerPropsType) => {
  return <CustomColorPicker type="color" {...props} />;
};

export default ColorPicker;
