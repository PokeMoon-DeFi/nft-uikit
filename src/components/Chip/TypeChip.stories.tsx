import React from "react";
import { Story, Meta } from "@storybook/react";
import TypeChip from "./TypeChip";
import { rawMaterialTheme, MaterialTheme } from "../../theme";
import { useTheme } from "@material-ui/core";
import { RarityChip } from "./RarityChip";

export default {
  title: "Type Chips",
} as Meta;

export const TypeTag: Story = () => {
  const supportedTypes = Object.keys(MaterialTheme.palette.types);

  return (
    <>
      {supportedTypes.map((type, index) => {
        return <TypeChip key={index} label={type} type={type}></TypeChip>;
      })}
    </>
  );
};

export const ChipTag: Story = () => {
  const supportedRanks = Object.keys(MaterialTheme.palette.rarity);
  return (
    <>
      {supportedRanks.map((rarity) => (
        <RarityChip rarity={rarity} label={rarity} />
      ))}
    </>
  );
};
