import { Story, Meta } from "@storybook/react";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import { BuyInfo, BuyInfoProps } from "./index";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { PokemoonNft } from "../../constants/index";

export default {
  title: "BuyInfo",
  component: BuyInfo,
} as Meta;

const p: BuyInfoProps = {
  pack: {
    name: "Blast Off",
    pokeball: "PB-2114",
    packId: "0",
    imageUrl: "/images/packs/Blastoff.png",
  },
  price: 100,
  lastPackId: 42,
  pbPrice: 0.1,
  allowance: 10,
  balance: 0,
  account: "sdfadsf",
  onConnectClicked: () => {
    console.log("on connect clicked");
  },
  onApproveClicked: () => {
    console.log("approve clicked");
  },
  onBuyClicked: () => {
    console.log("buy clicked ");
  },
};

export const Default: Story = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      justify="center"
      spacing={6}
      style={{ marginBottom: matches ? 24 : 0 }}
    >
      <Grid
        item
        sm={12}
        md={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/images/packs/Blastoff.png"
          alt="pack"
          style={{ width: 250 }}
        />
      </Grid>

      <Grid item sm={12} md={5} xs={12}>
        <BuyInfo
          pack={p.pack}
          price={p.price}
          lastPackId={p.lastPackId}
          pbPrice={p.pbPrice}
          {...p}
        />
      </Grid>
    </Grid>
  );
};
