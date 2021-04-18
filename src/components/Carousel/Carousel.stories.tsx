import Carousel from "./index";
import Card from "../Card";
import { Story, Meta } from "@storybook/react";
import { Page, Content } from "../../components/layout";
import NFT_LIST from "./storyData";

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
