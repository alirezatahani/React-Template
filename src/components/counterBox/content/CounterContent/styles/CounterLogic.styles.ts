import styled from 'styled-components';
import { CounterLogicProps } from '../counterLogic_types';
import {
  positionObj,
  positionObjSquare,
} from '@components/counterBox/utils/constants';

export const DiamondShape = styled.div<CounterLogicProps>(({ position }) => ({
  ...positionObj[position],
  position: 'absolute',
}));
export const SquareShape = styled.div<CounterLogicProps>(({ position }) => ({
  ...positionObjSquare[position],
  position: 'absolute',
}));

export const LockBox = styled.div(({}) => ({
  position: 'absolute',
  left: 93,
  top: 40,
}));
