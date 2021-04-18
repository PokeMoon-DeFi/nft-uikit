import { Story, Meta } from "@storybook/react";
import Button from "../Button";
import React from "react";
import Notification from "./Notification";

export default {
  title: "Notification",
} as Meta;

export const Demo: Story = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button label="Pop notty" onClick={() => setOpen(true)} />
      <Notification
        open={open}
        message={"Chaining blocks...."}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export const PackBought: Story = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button label="Pop notty" onClick={() => setOpen(true)} />
      <Notification
        open={open}
        message={"Pack secured"}
        href={"/packId"}
        linkLabel={"Check it out"}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
