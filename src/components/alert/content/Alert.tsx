import * as React from 'react';
import {
  StyledAlert,
  AlertTitle,
  AlertDescription,
  AlertContent,
  AlertClose,
  ToastWrapper,
  StyledToast,
} from '../styles/Alert.styles';
import { AlertProps, ToastProps } from './alert_types';

const Alert: React.FC<AlertProps> = ({ ...props }: AlertProps) => {
  const [isClose, setIsClose] = React.useState(false);
  return (
    <>
      <StyledAlert isClose={isClose} {...props}>
        <AlertContent>
          <AlertTitle {...props}>{props.message}</AlertTitle>
          <AlertDescription {...props}>{props.description}</AlertDescription>
        </AlertContent>
        {props.closable && (
          <AlertClose onClick={() => setIsClose(true)}>x</AlertClose>
        )}
      </StyledAlert>
    </>
  );
};

const Toast: React.FC<ToastProps> = ({ children, ...props }: ToastProps) => {
  return <ToastWrapper {...props}>{children}</ToastWrapper>;
};

Alert.defaultProps = {
  variant: 'outlined',
  type: 'info',
  closable: false,
  kind: 'alert',
};

export { Alert, Toast };
