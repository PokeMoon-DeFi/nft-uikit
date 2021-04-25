import React from "react";
import { Story, Meta } from "@storybook/react";
import TypeChip from "./TypeChip";
import theme from "../../theme";
export default {
  title: "Type Chips",
} as Meta;

export const TypeTag: Story = () => {
  const supportedTypes = Object.keys(theme.types);

  return (
    <>
      {supportedTypes.map((type, index) => {
        return <TypeChip key={index} type={type}></TypeChip>;
      })}
    </>
  );
};
