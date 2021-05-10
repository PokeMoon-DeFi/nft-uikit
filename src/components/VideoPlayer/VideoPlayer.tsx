import { FC } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export const VideoPlayer: FC<ReactPlayerProps> = (props) => {
  return (
    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" {...props} />
  );
};
