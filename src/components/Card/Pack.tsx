import { FC, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "components/Button";
import { BlastoffLookup } from "utils/StoryData";
import styled from "styled-components";

export interface Pack {
  packId: string;
  imgUrl: string;
  cards: string[];
}
export interface PackProps {
  pack: Pack;
  onPackSelected?: (packId: string) => void;
}

const StyledCard = styled(Card)`
  background: rgb(18 18 34 / 85%);
  border: #a637a9;
  border-radius: 5px;
  border-width: 6px;
  border-style: solid;
`;

const StyledCardContent = styled(CardContent)`
  background: #232340;
  border: #f572fa;
  border-radius: 0px 0px 0px 0px;
  /* border-width: 6px; */
  border-style: solid;
  box-shadow: 0 -4px 15px 1px black;
  text-align: center;
  color: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const PackCard: FC<PackProps> = ({ onPackSelected, pack }) => {
  const { packId, imgUrl, cards } = pack;

  const cardData = cards?.map((id: string) => {
    const uniqueId = id.slice(0, 2);
    const data = BlastoffLookup[Number(uniqueId)];
    return data;
  });

  return (
    <StyledCard
      elevation={10}
      style={{
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <CardHeader title="Pokemoon" /> */}

      {imgUrl && (
        <CardMedia
          image={imgUrl}
          component={"img"}
          style={{
            // paddingTop: "100%",

            paddingBottom: "10px",
          }}
        />
      )}
      <StyledCardContent>
        <Typography>{`Blastoff Pack #${packId}`}</Typography>
        {/* <Typography>2x rares 1x uncommon 3x common</Typography> */}
        <CardActions>
          <Button
            onClick={!!onPackSelected ? () => onPackSelected(packId) : () => {}}
          >
            View Pack
          </Button>
        </CardActions>
      </StyledCardContent>
    </StyledCard>
  );
};

export default PackCard;
