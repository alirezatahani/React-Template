import * as React from 'react';
import {
  StyledAlert,
  AlertTitle,
  AlertDescription,
  AlertContent,
  AlertClose,
} from '../styles/Alert.styles';
import { AlertProps } from './Alert_types';

const Alert: React.FC<AlertProps> = ({ ...props }: AlertProps) => {
  const [isClose, setIsClose] = React.useState(false);
  return (
    <StyledAlert isClose={isClose} {...props}>
      <AlertContent>
        <AlertTitle {...props}>{props.message}</AlertTitle>
        <AlertDescription {...props}>{props.description}</AlertDescription>
      </AlertContent>
      {props.closable && (
        <AlertClose onClick={() => setIsClose(true)}>x</AlertClose>
      )}
    </StyledAlert>
  );
};

Alert.defaultProps = {
  variant: 'outlined',
  type: 'info',
  closable: false,
};

export default Alert;
