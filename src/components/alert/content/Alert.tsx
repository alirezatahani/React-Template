import * as React from 'react';
import {
  StyledAlert,
  AlertTitle,
  AlertDescription,
  AlertContent,
  AlertClose,
} from '../styles/Alert.styles';
import { AlertProps } from './alert_types';

const Alert: React.FC<AlertProps> = ({
  type,
  variant,
  ...props
}: AlertProps) => {
  const [isClose, setIsClose] = React.useState(false);
  return (
    <>
      <StyledAlert variant={variant} type={type} isClose={isClose}>
        <AlertContent>
          <AlertTitle>{props.message}</AlertTitle>
          {props.description && (
            <AlertDescription>{props.description}</AlertDescription>
          )}
        </AlertContent>
        {props.closable && (
          <AlertClose onClick={() => setIsClose(true)}>x</AlertClose>
        )}
      </StyledAlert>
    </>
  );
};

Alert.defaultProps = {
  variant: 'outlined',
  type: 'info',
  closable: false,
};

export default Alert;
