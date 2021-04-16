import Carousel from "./index";
import Card from "../Card";
import { Story, Meta } from "@storybook/react";
import NFT_LIST from "../../constants/nfts/2114";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

export const Basic: Story = () => <Carousel nfts={NFT_LIST} />;
