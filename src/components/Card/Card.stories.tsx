import React from "react";
import Card from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Cards",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Carousel: Story = () => (
  <div style={{ display: "flex" }}>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
