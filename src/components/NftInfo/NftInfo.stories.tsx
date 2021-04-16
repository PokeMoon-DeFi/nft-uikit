import { Story, Meta } from "@storybook/react";
import NFT_LIST from "../../constants/nfts/2114";
import { PokemoonNft } from "../../constants/nfts/types";
import NftInfo from "./index";

export default {
  title: "NftInfo",
  component: NftInfo,
} as Meta;

const n: PokemoonNft = NFT_LIST[0];

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
