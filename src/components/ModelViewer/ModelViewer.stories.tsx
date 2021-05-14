import { Story, Meta } from "@storybook/react";
import { PokemoonNft } from "../../config/constants/nfts/types";
import { ModelViewer } from "../../components/ModelViewer";
import ModelCarousel from "./ModelCarousel";

export default {
  title: "ModelViewer",
} as Meta;

const n: PokemoonNft = {
  tokenId: "11000002",
  imageUrl: "001meownautC.png",
  number: 1,
  name: "Meownaut",
  type: "Psychic",
  description:
    "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
  artist: {
    name: "Armilo Barrios",
  },
  rarity: "Common",
  glbUrl: "/models/ampedUp/006degenmntL.glb",
  set: "blastOff",
  packId: "5",
};

const p: PokemoonNft = {
  tokenId: "37000002",
  imageUrl: "010kadalaxslimUC.png",
  number: 10,
  name: "Kadalax Slim",
  type: "Psychic",
  description:
    "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
  artist: {
    name: "Ilya",
    instagram: "@ilyaspb2019",
  },
  rarity: "Uncommon",
  glbUrl: "/models/ampedUp/003graffingL.glb",
  set: "blastOff",
  packId: "5",
};

const d: PokemoonNft = {
  tokenId: "18000013",
  imageUrl: "011zapduckC.png",
  number: 11,
  name: "Zapduck",
  type: "Lightning",
  description: "Strike one, you're out.",
  artist: {
    name: "Morlux",
    instagram: "@morlux_artista",
  },
  rarity: "Common",
  glbUrl: "/models/ampedUp/009artduckoL.glb",
  set: "blastOff",
  packId: "66",
};

export const Basic: Story = () => {
  return <ModelViewer style={{ flex: 1, height: 400 }} nft={n} />;
};

export const Carousel: Story = () => {
  return <ModelCarousel nfts={[n, p, d]} modelViewerStyle={{ width: 400 }} />;
};
