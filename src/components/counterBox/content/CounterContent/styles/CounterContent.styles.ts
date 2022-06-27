import styled from 'styled-components';
import { CounterContentProps } from '../counterContent_types';
import { positionObj } from '@components/counterBox/utils/constants';

export const Main = styled.div<CounterContentProps>(({ position }) => ({
  ...positionObj[position],
  position: 'absolute',
}));

export const LockBox = styled.div(({}) => ({
  position: 'absolute',
  left: 93,
  top: 40,
}));
