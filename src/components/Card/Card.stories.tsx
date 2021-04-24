import React from "react";
import { NftCard } from "./index";
import { Story, Meta } from "@storybook/react";
import PackCard from "./Pack";
import { Grid } from "@material-ui/core";
export default {
  title: "Cards",
  component: NftCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Cards: Story = () => (
  <div style={{ display: "flex", padding: 0 }}>
    <NftCard
      imageUrl="002pikapuffUC.png"
      onClick={() => {
        console.log("clicked");
      }}
    />
    <NftCard imageUrl="015rashscratchumL.png" />
    <NftCard imageUrl="016babymeownautML.png" />
    <NftCard />
    <div
      style={{
        backgroundColor: "black",
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></div>
  </div>
);
const pack = {
  packId: "0",
  imgUrl: "/images/packs/Blastoff.png",
  cards: ["11000001", "12000001", "13000001", "14000001", "15000001"],
};
export const Packs: Story = () => {
  return (
    <Grid direction="row">
      <Grid item>
        <PackCard pack={pack} />
      </Grid>
      <Grid item>
        <PackCard pack={pack} />
      </Grid>
    </Grid>
  );
};
