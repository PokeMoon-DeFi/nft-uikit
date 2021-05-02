import { Story, Meta } from "@storybook/react";
import { PM_RARITY, PM_TYPES } from "../../constants/nfts";
import { PokemoonNft } from "../../constants/nfts/types";
import NftInfo from "./index";

export default {
  title: "NftInfo",
  component: NftInfo,
} as Meta;

const n: PokemoonNft = {
  tokenId: "11000000",
  imageUrl: "001meownautC.png",
  card: {
    number: 1,
    name: "Meownaut",
    type: PM_TYPES.PSYCHIC,
    description:
      "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
    artist: {
      name: "Armilo Barrios",
    },
  },
  rarity: PM_RARITY.C,
};

export const Default: Story = () => (
  <div
    style={{
      backgroundColor: "#C8C8C8",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <NftInfo nft={n} />
  </div>
);
