import Carousel from "./index";
import Card from "../Card";
import { Story, Meta } from "@storybook/react";
import NFT_LIST from "../../constants/nfts/2114";
import { Page, Content } from "../../components/layout";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

export const Basic: Story = () => (
  <Page>
    <Content>
      <Carousel nfts={NFT_LIST} />
    </Content>
  </Page>
);
