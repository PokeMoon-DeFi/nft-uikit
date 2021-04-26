import InspectorCard from "./InspectCard2";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import { PortalHandler } from "providers/ModalContext";
import { PokemoonNft } from "constants/nfts";
import { FC, useEffect, useState } from "react";

interface InspectorDialogProps extends DialogProps, PortalHandler {
  nft: PokemoonNft;
}

export const InspectorDialog: FC<InspectorDialogProps> = ({
  nft,
  handleClose,
}) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (!open) {
      handleClose();
    }
  }, [open, handleClose]);
  return (
    <Dialog
      fullScreen
      open={open}
      onClick={() => {
        setOpen(false);
      }}
    >
      <InspectorCard nft={nft} />
    </Dialog>
  );
};
