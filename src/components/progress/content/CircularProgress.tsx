import React from 'react';
import { ProgressProps } from './progress_types';
import {
  CircularProgressCircle,
  CircularProgressFill,
  CircularProgressInsideCircle,
  CircularProgressMaskFull,
  CircularProgressMaskHalf,
  CircularProgressWrap,
} from '../styles/circularProgress.styles';
const CircularProgress = ({ color, completed, label }: ProgressProps) => {
  return (
    <CircularProgressWrap>
      <CircularProgressCircle>
        <CircularProgressMaskFull completed={completed > 100 ? 100 : completed}>
          <CircularProgressFill
            completed={completed > 100 ? 100 : completed}
            color={color}
          ></CircularProgressFill>
        </CircularProgressMaskFull>
        <CircularProgressMaskHalf>
          <CircularProgressFill
            completed={completed > 100 ? 100 : completed}
            color={color}
          ></CircularProgressFill>
        </CircularProgressMaskHalf>
        <CircularProgressInsideCircle>
          {label ? `${completed}%` : ''}
        </CircularProgressInsideCircle>
      </CircularProgressCircle>
    </CircularProgressWrap>
  );
};
export default CircularProgress;
