import React from "react";
import { Story, Meta } from "@storybook/react";
import TypeChip from "./TypeChip";
import { rawMaterialTheme, MaterialTheme } from "../../theme";
import { useTheme } from "@material-ui/core";
import { RarityChip } from "./RarityChip";
import PackChip from "./PackChip";
import { PM_TYPES } from "../../config/constants/nfts";

export default {
  title: "Type Chips",
} as Meta;

export const TypeTag: Story = () => {
  const supportedTypes = Object.keys(PM_TYPES);

  return (
    <>
      {supportedTypes.map((type, index) => {
        return (
          <TypeChip
            key={index}
            label={type}
            type={type}
            style={{ margin: 4 }}
          />
        );
      })}
    </>
  );
};

export const ChipTag: Story = () => {
  const supportedRanks = Object.keys(MaterialTheme.palette.rarity);

  return (
    <>
      {supportedRanks.map((rarity) => (
        <RarityChip rarity={rarity} label={rarity} style={{ margin: 4 }} />
      ))}
    </>
  );
};

export const PackTag: Story = () => {
  const packs = ["blastOff"];
  return (
    <>
      {packs.map((pack) => (
        <PackChip pack={pack} />
      ))}
    </>
  );
};
