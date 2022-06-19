import { MouseEventHandler, ReactNode } from 'react';

export type ModalProps = {
  visible: boolean;
  children: ReactNode;
  onClose: MouseEventHandler;
};
export type ModalWrapperProps = {
  visible: boolean;
};
