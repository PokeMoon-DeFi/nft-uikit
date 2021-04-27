import { FC, useState } from "react";
import styled from "styled-components";
import { PokemoonNft } from "../../constants";
import CardContent from "@material-ui/core/CardContent";
import useModal from "hooks/useModal";
import { InspectorDialog } from "components/Modal";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "components/Button";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import { Sleeve } from "./CardSleeve";

interface CardWrapper {
  imageUrl?: string;
  active?: boolean;
  nft: PokemoonNft;
}

interface CardContentProps {
  type?: string;
}

const StyledCardContent = styled(CardContent)<CardContentProps>`
  background: #232340;
  border: #a637a9;
  border-radius: 0px 0px 0px 0px;
  border-width: 6px;
  border-style: solid;
  box-shadow: 0 -4px 15px 1px black;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: flex;
  color: white;
  ${({ type }) => {
    switch (type) {
      default:
        return "";
    }
  }}
`;

const getImageUrl = (imageUrl: string | undefined) => {
  return `/images/cards/${imageUrl}`;
};

export const NftCard: FC<CardWrapper> = ({ nft }) => {
  const { imageUrl } = nft;
  const [isLoaded, setLoaded] = useState(false);
  const [showModal, hideModal] = useModal(<InspectorDialog nft={nft} />);
  return (
    <Paper
      elevation={6}
      style={{
        display: "flex",
        position: "relative",
        maxWidth: 250,
        height: 347,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        background: "transparent",
        borderRadius: 18,
      }}
    >
      {!isLoaded && (
        <Skeleton variant="rect" height={"100%"} style={{ flex: 1 }} />
      )}
      <img
        alt="asd"
        onLoad={() => setLoaded(true)}
        src={getImageUrl(imageUrl)}
        style={{ width: "100%" }}
      />
      {!!isLoaded && <Sleeve nft={nft} />}
    </Paper>
  );
};
