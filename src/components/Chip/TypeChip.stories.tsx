import React from "react";
import { Story, Meta } from "@storybook/react";
import TypeChip from "./TypeChip";

export default {
  title: "Type Chips",
} as Meta;

export const TypeTag: Story = () => {
  return <TypeChip variant="default" label="Fire" />;
};
