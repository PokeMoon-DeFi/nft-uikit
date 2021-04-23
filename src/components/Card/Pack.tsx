import { FC } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "components/Button";

const Pack: FC = () => {
  return (
    <Card style={{ maxWidth: 400, backgroundColor: "grey" }}>
      <CardMedia
        image={"/images/packs/Blastoff.png"}
        component="img"
        style={{ paddingTop: 20 }}
      ></CardMedia>
      <CardContent>
        <Typography>Blastoff Pack #13</Typography>
        <Typography>2x rares 1x uncommon 3x common</Typography>
        <CardActions>
          <Button label="View Pack" />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Pack;
