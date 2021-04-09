import React, { ReactNode, useContext, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { GlobalContext } from '../../contexts/GlobalContext';
import {
  ModalContainer,
  ModalOverlay,
  ModalCloseButton,
} from './styles';

interface ModalProps {
  children: ReactNode;
  insideButtonElement: ReactNode;
  modalTitle: ReactNode;
}

const Modal = ({ children, insideButtonElement, modalTitle }: ModalProps) => {
  const { innerWidth } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>{insideButtonElement}</button>
      { showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContainer innerWidth={innerWidth}>
            <h1>{modalTitle}</h1>
            {children}
            <ModalCloseButton onClick={() => setShowModal(false)} type="button">
              <FaWindowClose size={30} />
            </ModalCloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};
export default Modal;
