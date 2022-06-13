import * as React from 'react';
import { SwitchProps } from './switch_types';
import { ToggleButton, Slider, Wrapper } from '../styles/Switch.styles';

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  ...rest
}: SwitchProps) => {
  const toggle = (e: any) => {
    onChange && onChange(!e.target.checked);
  };

  return (
    <Wrapper>
      <ToggleButton
        onClick={toggle}
        checked={checked}
        size={rest.size}
        color={rest.color}
      >
        <Slider checked={checked} size={rest.size} />
      </ToggleButton>
    </Wrapper>
  );
};

Switch.defaultProps = {
  size: 'md',
  color: 'primary',
};
export default Switch;
