import * as React from 'react';
import { ToggleProps } from './toggle_types';
import {
  ToggleContainer,
  ToggleInput,
  ToggleSlider,
} from '../styles/toggle.styles';

function Toggle({
  variant = 'primary',
  size = 'sm',
  onChange = () => {},
  value = null,
}: ToggleProps) {
  return (
    <ToggleContainer size={size}>
      <ToggleInput
        variant={variant}
        sliderSize={size}
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.checked, e)
        }
      />
      <ToggleSlider size={size} />
    </ToggleContainer>
  );
}

export default Toggle;
