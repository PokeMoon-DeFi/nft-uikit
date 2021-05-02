import { Story, Meta } from "@storybook/react";
import WiggleBall from "./WiggleBall";
import { Content, Page } from "../layout";

export default {
  title: "Wiggling Balls",
} as Meta;

export const LoadingEx: Story = () => {
  return (
    <Page>
      <Content>
        <WiggleBall src={"/images/balls/MAXRBALL.png"} />
      </Content>
    </Page>
  );
};

export const Wiggle: Story = () => {
  return <WiggleBall src={"/images/balls/MAXRBALL.png"}></WiggleBall>;
};
