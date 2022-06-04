import { FC } from 'react';
import React from 'react';
import {
  ProgressContainer,
  ProgressFiller,
  ProgressLabel,
} from '../styles/progress.styles';
import { ProgressProps } from './progress_types';

const Progress: FC<ProgressProps> = ({
  completed,
  color,
  variant,
  label,
}: ProgressProps) => {
  const [completing, setCompleting] = React.useState(1);
  const loadingProgresss = () => {
    setTimeout(() => {
      if (completing < 100) {
        setCompleting(completing + 1);
      } else setCompleting(1);
    }, 100);
  };
  if (variant) {
    loadingProgresss();
  }
  return (
    <ProgressContainer>
      <ProgressFiller
        completed={variant ? completing : completed}
        color={color}
      >
        <ProgressLabel>
          {label ? (variant ? `${completing}%` : `${completed}%`) : ''}
        </ProgressLabel>
      </ProgressFiller>
    </ProgressContainer>
  );
};

export default Progress;
