import React from "react";
import PokemoonCard from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Cards",
  component: PokemoonCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Cards: Story = () => (
  <div style={{ display: "flex", padding: 0 }}>
    <PokemoonCard
      imageUrl="002pikapuffUC.png"
      onClick={() => {
        console.log("clicked");
      }}
    />
    <PokemoonCard imageUrl="015rashscratchumL.png" />
    <PokemoonCard imageUrl="016babymeownautML.png" />
    <PokemoonCard />
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
