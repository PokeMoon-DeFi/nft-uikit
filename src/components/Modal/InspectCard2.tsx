import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import {
  Backdrop,
  DialogProps,
  DialogTitle,
  useMediaQuery,
} from "@material-ui/core";
import { PokemoonNft } from "constants/nfts";
import { Grid } from "@material-ui/core";
import NftInfo from "../NftInfo";
import styled from "styled-components";
import { render } from "react-dom";
import Container from "@material-ui/core/Container";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface InspectorProps {
  nft?: PokemoonNft;
}

const Wrapper = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  padding: 36px;
  @media (max-width: 600px) {
    min-width: 300px;
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
  min-width: 300px;
`;

export const WrapperMQ = (nft: PokemoonNft | undefined) => {
  const matches = useMediaQuery("(max-width:600px)");
  const bi = `url("/images/types/${nft?.card?.type}${
    matches ? "wide 1" : "tall 1"
  }.png")`;

  return (
    <>
      <Wrapper
        style={{
          backgroundImage: bi,
        }}
        maxWidth="lg"
      >
        <StyledImage
          height={"380vh"}
          src={`/images/cards/${nft?.imageUrl}`}
          alt={nft?.imageUrl}
        />
        <StyledInfo>{nft && <NftInfo nft={nft} />}</StyledInfo>
      </Wrapper>
    </>
  );
};

const InspectCard: React.FC<InspectorProps> = ({ nft, children, ...props }) => {
  return <>{nft && WrapperMQ(nft)}</>;
};

export default InspectCard;
