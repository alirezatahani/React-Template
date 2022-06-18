import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import {
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalSection,
  ModalWrapper,
} from '../styles/modal.styles';
import { ModalProps } from './modal_types';

const Modal: React.FC<ModalProps> = ({ visible, ...props }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <ModalWrapper visible={visible}>
        <ModalSection visible={visible}>
          <ModalContainer>
            <ModalContent>{props.children}</ModalContent>
            <ModalClose onClick={props.onClose}>
              <FaTimes size={18} />
            </ModalClose>
          </ModalContainer>
        </ModalSection>
      </ModalWrapper>
    </>,
    document.getElementById('modal')
  );
};
Modal.defaultProps = {
  visible: false,
};
export default Modal;
