import { Story, Meta } from "@storybook/react";
import { BLAST_OFF_COLLECTION } from "../../utils/StoryData";
import BuyInfo from "./index";

export default {
  title: "BuyInfo",
  component: BuyInfo,
} as Meta;

const p: any = {
  pack: { name: "Blast Off", pokeball: "PB-2114", cards: BLAST_OFF_COLLECTION },
  price: 100,
  lastPackNumber: 42,
};

export const Default: Story = () => <BuyInfo pack={p.pack} price={p.price} />;
