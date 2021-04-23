import { Story, Meta } from "@storybook/react";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import BuyInfo from "./index";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default {
  title: "BuyInfo",
  component: BuyInfo,
} as Meta;

const p: any = {
  pack: { name: "Blast Off", pokeball: "PB-2114", cards: BLAST_OFF_COLLECTION },
  price: 100,
  lastPackId: 42,
  pbPrice: 0.1,
};

const StyledImage = styled.img``;

export const Default: Story = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container justify="center" style={{ height: "100%" }}>
      <Grid
        item
        sm={6}
        xs={12}
        justify={matches ? "center" : "flex-end"}
        style={{ display: "flex", flex: 1 }}
      >
        <img
          src="/images/packs/Blastoff.png"
          alt="pack"
          style={{ maxWidth: "400px", maxHeight: "100%" }}
        />
      </Grid>
      {/* <Grid item md={6} /> */}
      <Grid
        item
        sm={6}
        xs={12}
        justify={matches ? "center" : "flex-start"}
        style={{ marginTop: matches ? 50 : 0, display: "flex", flex: 1 }}
      >
        <BuyInfo
          pack={p.pack}
          price={p.price}
          lastPackId={p.lastPackId}
          pbPrice={p.pbPrice}
        />
      </Grid>
    </Grid>
  );
};
