import { FC } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "components/Button";

interface Pack {
  packId: string;
}
interface PackProps {
  pack: Pack;
  onPackSelected?: (packId: string) => void;
}

const PackCard: FC<PackProps> = ({
  onPackSelected,
  pack = { packId: "1" },
}) => {
  const { packId } = pack;
  return (
    <Card
      elevation={10}
      style={{
        flex: 1,
        paddingTop: 20,
      }}
    >
      {/* <CardHeader title="Pokemoon" /> */}
      <CardMedia
        image={"/images/packs/Blastoff.png"}
        style={{
          paddingTop: "75.25%",
          backgroundPosition: "left 0px top 0px",
        }}
      />
      <CardContent>
        <Typography>Blastoff Pack #13</Typography>
        <Typography>2x rares 1x uncommon 3x common</Typography>
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
