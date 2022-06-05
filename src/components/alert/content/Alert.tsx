import React from 'react';
import {
  StyledAlert,
  AlertTitle,
  AlertDescription,
  AlertContent,
  AlertClose,
  ActionContainer,
} from '../styles/Alert.styles';
import { AlertProps } from './alert_types';

const Alert: React.FC<AlertProps> = ({
  type,
  variant,
  action,
  onClose,
  ...props
}: AlertProps) => {
  const [isClosed, setIsClosed] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setIsClosed(true);
    onClose && onClose();
  }, []);

  return (
    <>
      <StyledAlert
        action={action}
        variant={variant}
        type={type}
        isClosed={isClosed}
      >
        <AlertContent>
          <AlertTitle>{props.message}</AlertTitle>
          {props.description && (
            <AlertDescription>{props.description}</AlertDescription>
          )}
        </AlertContent>
        <ActionContainer>
          <div>{action}</div>
          {props.closable && (
            <AlertClose onClick={handleClose} {...props}>
              x
            </AlertClose>
          )}
        </ActionContainer>
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
