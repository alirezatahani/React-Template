import * as React from 'react';
import { ToggleProps } from './toggle_types';
import {
  ToggleContainer,
  ToggleInput,
  ToggleSlider,
} from '../styles/toggle.styles';

function Toggle({
  theme = 'primary',
  size = 40,
  indent = 4,
  onChange = () => {},
}: ToggleProps) {
  return (
    <ToggleContainer size={size} indent={indent}>
      <ToggleInput
        theme={theme}
        size={size}
        indent={indent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.checked)
        }
      />
      <ToggleSlider size={size} indent={indent} />
    </ToggleContainer>
  );
}

export default Toggle;
