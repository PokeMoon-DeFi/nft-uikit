import { Story, Meta } from "@storybook/react";
import WiggleBall from "./WiggleBall";
import Loading from "./Loading";

export default {
  title: "Wiggling Balls",
} as Meta;

export const LoadingEx: Story = () => {
  return <Loading />;
};

export const Wiggle: Story = () => {
  return (
    <WiggleBall
      style={{ maxHeight: 80 }}
      src={"/images/MAXRBALL.png"}
    ></WiggleBall>
  );
};
