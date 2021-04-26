import React from "react";
import { NftCard } from "./index";
import { Story, Meta } from "@storybook/react";
import PackCard from "./Pack";
import { Grid } from "@material-ui/core";
import { BLAST_OFF_CARDS, BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import { PM_RARITY, PM_TYPES, PokemoonNft } from "../../constants/nfts";

export default {
  title: "Cards",
  component: NftCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const n: PokemoonNft = {
  tokenId: "60",
  imageUrl: "001meownautL.png",
  uniqueId: "11000001",
  card: BLAST_OFF_CARDS[1],
  rarity: PM_RARITY.L,
};

export const Cards: Story = () => <NftCard nft={n} />;

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
