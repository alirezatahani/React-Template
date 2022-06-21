import { Divider } from '@components/divider';
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import {
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalSection,
  ModalTitle,
  ModalWrapper,
} from '../styles/modal.styles';
import { ModalProps } from './modal_types';

const Modal: React.FC<ModalProps> = ({ visible, ...props }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <ModalWrapper
        visible={visible}
        onClick={props.closeClickOut && props.onClose}
      />
        <ModalSection visible={visible}>
          <ModalContainer>
          <ModalTitle>{props.title}</ModalTitle>
            <Divider color='#ccc'/>
            <ModalContent>{props.children}</ModalContent>
            {props.actions && <Divider color='#ccc'/>}
            <ModalContent>{props.actions}</ModalContent>
            <ModalClose onClick={props.onClose}>
              <FaTimes size={18} />
            </ModalClose>
          </ModalContainer>
        </ModalSection>
     
    </>,
    document.getElementById('modal')
  );
};
Modal.defaultProps = {
  visible: false,
  closeClickOut:false,
};
export default Modal;
