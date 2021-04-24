import { FC, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "components/Button";
import { BlastoffLookup } from "utils/StoryData";

export interface Pack {
  packId: string;
  imgUrl: string;
  cards: string[];
}
export interface PackProps {
  pack: Pack;
  onPackSelected?: (packId: string) => void;
}

const PackCard: FC<PackProps> = ({ onPackSelected, pack }) => {
  const { packId, imgUrl, cards } = pack;

  const cardData = cards?.map((id: string) => {
    const uniqueId = id.slice(0, 2);
    const data = BlastoffLookup[Number(uniqueId)];
    return data;
  });

  return (
    <Card
      elevation={10}
      style={{
        flex: 1,
        paddingTop: 20,
      }}
    >
      {/* <CardHeader title="Pokemoon" /> */}

      {imgUrl && (
        <CardMedia
          image={imgUrl}
          style={{
            paddingTop: "100%",
          }}
        />
      )}
      <CardContent>
        <Typography>{`Blastoff Pack #${packId}`}</Typography>
        {/* <Typography>2x rares 1x uncommon 3x common</Typography> */}
        <CardActions>
          <Button
            label="View Pack"
            onClick={!!onPackSelected ? () => onPackSelected(packId) : () => {}}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PackCard;
