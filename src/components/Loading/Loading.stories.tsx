import { Story, Meta } from "@storybook/react";
import WiggleBall from "./WiggleBall";

export default {
  title: "Wiggling Balls",
} as Meta;

export const Wiggle: Story = () => {
  return <WiggleBall src={"/images/MAXRBALL.png"}></WiggleBall>;
};
