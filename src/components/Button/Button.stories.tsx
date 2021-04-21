import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from ".";
import { withDesign } from "storybook-addon-designs";
import Content from "../layout/Content";
import Page from "../layout/Page";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Page>
    <Content>
      <Button {...args} />
    </Content>
  </Page>
);

Template.parameters = {
  design: {
    type: "figma",
  },
};

export const Backpack = Template.bind({});
Backpack.args = {
  label: "Backpack",
  icon: "Backpack",
};

export const Buy = Template.bind({});
Buy.args = {
  label: "Buy",
  icon: "Buy",
};

export const Run = Template.bind({});
Run.args = {
  label: "Run",
  icon: "Run",
};

export const Transfer = Template.bind({});
Transfer.args = {
  size: "Transfer",
  label: "Transfer",
};
