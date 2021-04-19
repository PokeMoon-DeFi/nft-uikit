import React, { Children } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { DialogProps } from "@material-ui/core";
import { PokemoonNft } from "constants/nfts";
import { Grid } from "@material-ui/core";
import NftInfo from "../NftInfo";
import styled from "styled-components";

interface InspectorProps extends DialogProps {
  handleClose: () => void;
  nft?: PokemoonNft;
  handleConfirm?: () => void;
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
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        {...props}
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
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              <NftInfo nft={nft ?? ERROR_NFT} />
            </StyledInfo>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};

export default InspectCard;
