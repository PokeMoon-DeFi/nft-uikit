import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import PackCard from "components/Card/Pack";
import Content from "components/layout/Content";

const pack = { packId: "0", imgUrl: "/images/packs/Blastoff.png" };
const packs = new Array(13).fill(pack);

const PackCollection: FC = () => {
  return (
    <Content>
      <Grid container spacing={2} justify="center">
        {packs.map((pack, index) => (
          <Grid item key={index.toString()} sm={6} md={3}>
            <PackCard pack={pack} onPackSelected={(id) => {}} />
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};

export default PackCollection;
