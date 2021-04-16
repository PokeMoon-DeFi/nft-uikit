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

export const Cards: Story = () => (
  <div style={{ display: "flex", padding: 0 }}>
    <Card
      imageUrl="002pikapuffUC.png"
      onClick={() => {
        console.log("clicked");
      }}
    />
    <Card imageUrl="015rashscratchumL.png" />
    <Card imageUrl="016babymeownautML.png" />
    <Card />
    <div
      style={{
        backgroundColor: "black",
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></div>
  </div>
);
