import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../Button";
import Modal from "./DialogModal";
import InspectCard from "./InspectCard";

export default {
  title: "Modal",
} as Meta;

const title = "Purchase Pokemoon Booster Pack?";
const content = "Lorem ipsum bullshit";

export const Demo: Story = (args) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setOpen(true)} />
      <Modal
        title={title}
        content={content}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export const Inspect: Story = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button label="Open Modal" onClick={() => setOpen(true)} />
      <InspectCard open={open} handleClose={() => setOpen(false)} />
    </>
  );
};
