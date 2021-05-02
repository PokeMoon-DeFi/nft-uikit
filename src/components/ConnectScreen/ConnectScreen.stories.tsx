import { Story, Meta } from "@storybook/react";
import { ConnectScreen } from "./index";
import { Content } from "../../components/layout";
import { useState } from "react";

export default {
  title: "ConnectScreen",
} as Meta;

export const Demo: Story = () => {
  const [open, setOpen] = useState(true);
  return (
    <ConnectScreen
      imgUrl={"/images/balls/MoonLogo.png"}
      open={open}
      onConnect={() => {
        setOpen(false);
      }}
      onExit={() => {}}
    />
  );
};
