import React from "react";
import { NftCard } from "./index";
import { Story, Meta } from "@storybook/react";
import PackCard from "./Pack";
import { BLAST_OFF_CARDS } from "../../utils/StoryData";
import { PM_RARITY, PokemoonNft, PokemoonPack } from "../../constants/nfts";

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

const nftData: PokemoonNft = {
  tokenId: "22",
  imageUrl: "005squirderC.png",
  card: {
    number: 5,
    name: "Squirder",
    type: "Fire",
    description: "Favorite start Pokemoon of the nicotine addicted trainer.",
    artist: {
      name: "Armilo Barrios",
    },
  },
  rarity: "Legendary",
  uniqueId: "22000001",
};
const pack: PokemoonPack = {
  packId: "0",
  imageUrl: "/images/packs/Blastoff.png",
  nfts: [nftData, nftData, nftData, nftData, nftData],
  pokeball: "PB-2114",
  name: "Blastoff",
};

export const Packs: Story = () => {
  return <PackCard pack={pack} />;
};
