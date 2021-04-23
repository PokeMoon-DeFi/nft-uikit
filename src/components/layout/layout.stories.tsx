import { Story, Meta } from "@storybook/react";
import { Page, Content } from "./index";
import NavHeader from "../Navigation/FullDemo";

export default {
  title: "Layout",
} as Meta;

export const Basic: Story = () => (
  <>
    <Page>
      <NavHeader />
    </Page>
  </>
);
