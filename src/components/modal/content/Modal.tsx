import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { Divider } from '@components/divider';
import { ModalProps } from './modal_types';
import {
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalSection,
  ModalTitle,
  ModalWrapper,
} from '../styles/modal.styles';
/**
 * @children should be a React element
 * @visible should be set true/false when you enable/disable modal
 * @onClose should be set to close modal
 * @title  can be set modal title
 * @actions can be set as ReactElement | ReactElement[]
 * @closeClickOut can be set as true | false when you want close modal when clicked outside
 */

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
          {props.title && <Divider color="#ccc" />}
          <ModalContent>{props.children}</ModalContent>
          {props.actions && <Divider color="#ccc" />}
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
  closeClickOut: false,
};
export default Modal;
