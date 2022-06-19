import styled from 'styled-components';
import { SwitchProps } from '../content/switch_types';
import { SizeBtn, SizeSlider } from '../utils/constants';

export const Wrapper = styled.div<SwitchProps>(({}) => ({}));

export const Label = styled.div<SwitchProps>(({ theme }) => ({
  ...theme.typography.body1,
}));

export const ToggleButton = styled.div<SwitchProps>(
  ({ checked, size, color, theme }) => ({
    ...SizeBtn[size],
    backgroundColor: checked ? theme.palette[color].main : 'wheat',
    margin: '10px 0',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
  })
);

export const Slider = styled.span<SwitchProps>(({ checked, size }) => ({
  ...SizeSlider[size],
  position: 'absolute',
  top: 4,
  right: 0,
  backgroundColor: 'white',
  transition: 'all .4s',
  left: checked ? 30 : 4,
  bottom: 4,
  borderRadius: '50%',
}));
