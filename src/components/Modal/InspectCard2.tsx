import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Backdrop, DialogProps, DialogTitle } from "@material-ui/core";
import { PokemoonNft } from "constants/nfts";
import { Grid } from "@material-ui/core";
import NftInfo from "../NftInfo";
import styled from "styled-components";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface InspectorProps extends DialogProps {
  handleClose: () => void;
  nft?: PokemoonNft;
  title?: string;
  content?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  background: none;
  padding: 36px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  margin-bottom: 0;
  margin-right: 36px;
  @media (max-width: 600px) {
    margin-bottom: 36px;
    margin-right: 0;
    justify-content: center;
  }
`;

const StyledInfo = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
`;

const InspectCard: React.FC<InspectorProps> = ({
  open,
  handleClose,
  nft,
  children,
  ...props
}) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Wrapper>
          <StyledImage
            height={"270vh"}
            src={`/images/cards/${nft?.imageUrl}`}
            alt={nft?.imageUrl}
          />
          <StyledInfo>{nft && <NftInfo nft={nft} />}</StyledInfo>
        </Wrapper>
      </Dialog>
    </>
  );
};

export default InspectCard;
