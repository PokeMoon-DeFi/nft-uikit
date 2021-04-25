import React from "react";
import { Story, Meta } from "@storybook/react";
import TypeChip from "./TypeChip";
import { rawMaterialTheme } from "../../theme";
import { useTheme } from "@material-ui/core";
export default {
  title: "Type Chips",
} as Meta;

export const TypeTag: Story = () => {
  const supportedTypes = ["fire", "psychic"];

  return (
    <>
      {supportedTypes.map((type, index) => {
        return <TypeChip key={index} label={type} type={type}></TypeChip>;
      })}
    </>
  );
};
