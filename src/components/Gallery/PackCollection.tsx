import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Pack from "components/Card/Pack";
import Content from "components/layout/Content";

const pack = { packId: 0 };
const packs = new Array(13).fill(() => pack);

const PackCollection: FC = () => {
  return (
    <>
      <Content>
        <Grid container spacing={2} justify="center">
          {packs.map((pack) => (
            <Grid item>
              <Pack />
            </Grid>
          ))}
        </Grid>
      </Content>
    </>
  );
};

export default PackCollection;
