import styled from 'styled-components';
import { CounterLogicProps } from '../counterLogic_types';
import {
  positionObj,
  positionObjSquare,
  positionObjInline,
  positionObjTriangle,
} from '@components/counterBox/utils/constants';

export const DiamondShape = styled.div<CounterLogicProps>(({ position }) => ({
  ...positionObj[position],
  position: 'absolute',
}));
export const SquareShape = styled.div<CounterLogicProps>(({ position }) => ({
  ...positionObjSquare[position],
  position: 'absolute',
}));
export const InlineShape = styled.div<CounterLogicProps>(({ position }) => ({
  ...positionObjInline[position],
  position: 'absolute',
}));
export const TriangleShape = styled.div<CounterLogicProps>(({ position }) => ({
  ...positionObjTriangle[position],
  position: 'absolute',
}));

export const LockBox = styled.div(({}) => ({
  position: 'absolute',
  left: 93,
  top: 40,
}));
