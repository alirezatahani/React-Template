import styled, { css, keyframes } from 'styled-components';
import { AlertProps } from '../content/alert_types';

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
export const AlertContent = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContentL: 'flex-start',
}));
export const AlertClose = styled.div(({ theme }) => ({
  marginLeft: 'auto',
  cursor: 'pointer',
}));

export const StyledAlert = styled.div<AlertProps>`
  animation: ${slideIn} 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 1rem;
  width: 320px;
  margin: 10px;
  position: relative;
  display: ${({ isClose }) => (isClose ? 'none' : 'flex')};
  border: ${({ theme, type }) => `solid 2px
   ${theme.palette[type === 'info' ? 'primary' : type].main}`};
  color: ${({ theme, variant, type }) =>
    `${
      variant === 'outlined'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.common.white
    }`};

  background: ${({ theme, type, variant }) =>
    `${
      variant === 'filled'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.transparent
    }`};
`;

export const StyledToast = styled.div<AlertProps>`
  animation: ${slideIn} 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  display: ${({ isClose }) => (isClose ? 'none' : 'flex')};
  border: ${({ theme, type }) => `solid 2px
   ${theme.palette[type === 'info' ? 'primary' : type].main}`};
  color: ${({ theme, variant, type }) =>
    `${
      variant === 'outlined'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.common.white
    }`};

  background: ${({ theme, type, variant }) =>
    `${
      variant === 'filled'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.transparent
    }`};
`;
// animation: `${pulse} 1s infinite`,
// height: isClose ? '0px' : 'auto',
// display: isClose ? 'none' : 'flex',
// marginBottom: 16,
// border: `solid 2px ${
//   theme.palette[type === 'info' ? 'primary' : type].main
// }`,
// color:
//   variant === 'outlined'
//     ? theme.palette[type === 'info' ? 'primary' : type].main
//     : theme.palette.common.white,
// background:
//   variant === 'filled'
//     ? theme.palette[type === 'info' ? 'primary' : type].main
//     : theme.palette.transparent,
// padding: '6px 16px',
// borderRadius: 4,

export const ToastWrapper = styled.div<AlertProps>(
  ({ theme, type, variant, kind }) => ({
    position: 'fixed',
    top: '1em',
    left: '1em',
    zIndex: 9999,
  })
);
