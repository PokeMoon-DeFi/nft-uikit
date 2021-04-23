import React, { createContext, useState } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
interface ModalContextProps {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss: () => void;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = (node: React.ReactNode) => {
    setModalNode(node);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  return (
    <ModalContext.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      {modalNode && (
        <Modal open={isOpen} onClose={handleDismiss}>
          {/* @ts-ignore */}
          {modalNode}
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
