import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { PokemoonNft } from "constants/nfts";
import NftInfo from "../NftInfo";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

interface InspectorProps {
  nft?: PokemoonNft;
}

const StyledInfo = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  min-width: 300px;
`;

export const InspectCard: React.FC<InspectorProps> = ({ nft }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const bi = `url("/images/types/${nft?.card?.type}${
    matches ? "wide 1" : "tall 1"
  }.png")`;

  return (
    <Grid
      justify="center"
      spacing={6}
      container
      style={{
        backgroundImage: bi,
        backgroundSize: "cover",
        padding: 40,
        alignItems: "center",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Grid item>
        <img
          width={250}
          src={`/images/cards/${nft?.imageUrl}`}
          alt={nft?.imageUrl}
        />
      </Grid>
      <Grid item>
        <StyledInfo>{nft && <NftInfo nft={nft} />}</StyledInfo>
      </Grid>
    </Grid>
  );
};

export default InspectCard;
