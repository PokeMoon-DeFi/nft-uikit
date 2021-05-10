import { Story, Meta } from "@storybook/react";
import { VideoPlayer } from "./VideoPlayer";

export default {
  title: "Video Player",
  component: VideoPlayer,
} as Meta;

export const Default: Story = () => <VideoPlayer playing />;
