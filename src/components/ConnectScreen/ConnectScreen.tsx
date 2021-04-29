import { FC, useState } from "react";
import { Content } from "components/layout";
import {
  useSpring,
  animated,
  config,
  useChain,
  useSpringRef,
} from "react-spring";

interface ConnectScreenProps {
  imgUrl: string;
  onConnect: () => void;
  open: boolean;
  onExit: () => void;
}

const ConnectScreen: FC<ConnectScreenProps> = ({
  imgUrl,
  onConnect,
  open,
  onExit,
}) => {
  // const [showButton]
  const translateSpring = useSpring({
    from: { translateY: open ? -1000 : -1000 },
    to: { translateY: 0 },
    config: {
      ...config.molasses,
      duration: open ? 900 : 700,
      easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    },
    reverse: !open,
    reset: !open,
    onRest: () => {
      if (!open) {
        onExit();
      }
    },
  });

  const rotate = useSpringRef();
  const rotateSpring = useSpring({
    ref: rotate,
    from: { rotateZ: 180 },
    to: {
      rotateZ: 0,
    },
    delay: open ? 350 : 0,
    reverse: !open,
    reset: !open,
    config: { duration: 600, easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2 },
  });

  const button = useSpringRef();
  const buttonSpring = useSpring({
    ref: button,
    from: { opacity: 0, pointerEvents: "none" },
    to: { opacity: 1, pointerEvents: "auto" },
    delay: open ? 750 : 0,
    config: {
      duration: 200,
      easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    },
    reverse: !open,
    reset: !open,
  });

  useChain([rotate, button]);

  return (
    <Content maxWidth={"xl"} style={{ overflow: "hidden" }}>
      <animated.img
        src={imgUrl}
        alt="moonLogo"
        style={{
          height: "90vh",
          ...translateSpring,
          ...rotateSpring,
          scale: 0.8,
        }}
      />
      <animated.h1
        onClick={onConnect}
        //@ts-ignore
        style={{ position: "absolute", ...buttonSpring, cursor: "pointer" }}
      >
        Connect
      </animated.h1>
    </Content>
  );
};

export default ConnectScreen;
