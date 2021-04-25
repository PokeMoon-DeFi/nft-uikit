import React from "react";
import { Story, Meta } from "@storybook/react";
import TypeChip from "./TypeChip";
import { useTheme } from "@material-ui/core/styles";

export default {
  title: "Type Chips",
} as Meta;

export const TypeTag: Story = () => {
  const theme = useTheme();
  const supportedTypes = Object.keys(theme.palette.types);
  return (
    <>
      {supportedTypes.map((type, index) => {
        return <TypeChip key={index} type={type}></TypeChip>;
      })}
    </>
  );
};
