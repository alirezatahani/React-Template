import styled, { css, keyframes } from 'styled-components';
import { AlertProps, StyledAlertProps } from '../content/alert_types';

const slideIn = keyframes`
from {
    opacity: 0;
    transform: translateX(calc(100% + 32px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }

`;
const fadeOut = keyframes`
to {
    opacity: 0;
    
  }


`;
export const AlertTitle = styled.div(({ theme }) => ({
  ...theme.typography.h5,
}));
export const AlertDescription = styled.div(({ theme }) => ({
  ...theme.typography.subtitle1,
}));
export const AlertContent = styled.div(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContentL: 'flex-start',
}));
export const AlertClose = styled.div(() => ({
  marginLeft: 'auto',
  cursor: 'pointer',
}));

export const StyledAlert = styled.div<StyledAlertProps>(
  ({ theme, type, variant, isClose }) => ({
    display: isClose ? 'none' : 'flex',
    marginBottom: 16,
    border: `solid 2px ${
      theme.palette[type === 'info' ? 'primary' : type].main
    }`,
    color:
      variant === 'outlined'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.common.white,
    background:
      variant === 'filled'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.transparent,
    padding: '6px 16px',
    borderRadius: 4,
  })
);
