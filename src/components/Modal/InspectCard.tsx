import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Backdrop, DialogProps } from "@material-ui/core";
import { PokemoonNft } from "constants/nfts";
import { Grid } from "@material-ui/core";
import NftInfo from "../NftInfo";
import styled from "styled-components";

interface InspectorProps extends DialogProps {
  handleClose: () => void;
  nft?: PokemoonNft;
  title?: string;
  content?: string;
}

const ERROR_NFT: PokemoonNft = {
  tokenId: "error",
  imageUrl: "error.png",
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledImage = styled(Grid)`
  justify-content: flex-end;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const StyledInfo = styled(Grid)`
  justify-content: flex-start;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const InspectCard: React.FC<InspectorProps> = ({
  open,
  handleClose,
  nft,
  children,
  ...props
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      TransitionComponent={Transition}
      {...props}
      PaperProps={{
        elevation: 0,
        style: {
          backgroundColor: "transparent",
          overflow: "hidden",
        },
      }}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Sound</Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <StyledImage
          item
          xs={12}
          sm={6}
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            height={"270vh"}
            src={`/images/cards/${nft?.imageUrl}`}
            alt={nft?.imageUrl}
          />
        </StyledImage>
        <StyledInfo
          item
          xs={12}
          sm={6}
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {nft && <NftInfo nft={nft} />}
        </StyledInfo>
      </Grid>
    </Dialog>
  );
};

export default InspectCard;
