import React from 'react';
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

const Modal: React.FC<ModalProps> = ({ ...props }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <ModalWrapper>
        <ModalSection visible={props.visible}>
          <ModalContainer>
            <ModalContent>{props.children}</ModalContent>
            <ModalClose>
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
