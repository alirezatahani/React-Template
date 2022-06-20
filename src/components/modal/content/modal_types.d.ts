import { MouseEventHandler, ReactNode } from 'react';

export type ModalProps = {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
};
export type ModalWrapperProps = {
  visible: boolean;
};
