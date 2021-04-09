import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { withDesign } from "storybook-addon-designs";
import { Backpack } from "../Svg";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

Template.parameters = {
  design: {
    type: "figma",
  },
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  icon: "Backpack",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
