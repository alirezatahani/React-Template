import { MouseEventHandler, ReactElement, ReactNode } from 'react';

export type ModalProps = {
  visible: boolean;
  children: ReactNode;
  onClose: MouseEventHandler;
  title?: string;
  actions?: ReactElement | ReactElement[];
  closeClickOut?: boolean;
};
export type ModalWrapperProps = {
  visible: boolean;
};
