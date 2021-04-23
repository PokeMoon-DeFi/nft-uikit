import React, { createContext, useState } from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import { TransitionProps } from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      <Dialog
        TransitionComponent={Transition}
        onClick={handleOverlayDismiss}
        open={isOpen}
        onClose={handleDismiss}
        fullScreen
      >
        {/* @ts-ignore */}
        {modalNode}
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
