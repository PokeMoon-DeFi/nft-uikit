import React from "react";
import { Story, Meta } from "@storybook/react";

import BalanceCounter from "./index";

export default {
  title: "Example/BalanceCounter",
  component: BalanceCounter,
  decorators: [],
} as Meta;

export const Counter: Story = () => (
  <div
    style={{
      backgroundColor: "#C8C8C8",
      display: "flex",
      flex: 1,
      height: "400px",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BalanceCounter />
  </div>
);
