import { Story, Meta } from "@storybook/react";
import { Page, Content, Header } from "./index";
import NavHeader from "../Navigation";

export default {
  title: "Layout",
} as Meta;

export const Basic: Story = () => (
  <>
    <Page>
      <NavHeader />
      <Content />
    </Page>
  </>
);
