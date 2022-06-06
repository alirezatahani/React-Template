import * as React from 'react';
import { FaTimes} from 'react-icons/fa';
import { ModalClose, ModalContainer, ModalContent, ModalSection } from '../styles/modal.styles';
import { ModalProps } from './modal_types';

const Modal : React.FC<ModalProps> = ({...props}:ModalProps)=>{
return <>
        <ModalSection visible={props.visible}>
            <ModalContainer>
                <ModalContent>
                    {props.children}
                </ModalContent>
                <ModalClose>
                    <FaTimes size={18} />
                </ModalClose>
            </ModalContainer>
        </ModalSection>
</>
}
Modal.defaultProps={
   visible:false,
}
export default Modal;