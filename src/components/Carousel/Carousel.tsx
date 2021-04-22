import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import PokemoonCard from "../Card";
import styled from "styled-components";
import { PokemoonNft } from "../../constants/nfts/types";
import { useGesture } from "react-use-gesture";
import { useLocation, useParams } from "react-router-dom";
import useWindowSize from "hooks/useWindowSize";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import RootRef from "@material-ui/core/RootRef";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core";

const StyledContainer = styled(animated(RootRef))`
  height: 100vh;

  overflow-x: auto;
  overflow-y: auto;
  align-items: center;
  position: relative;
  flex-direction: column;
  overflow: hidden;

  -webkit-overflow-scrolling: touch;
  display: flex;
  background-color: green;
`;

const Overlay = styled(animated.div)`
  background-color: red;
  position: fixed;
  background-attachment: fixed;
  top: 0;
  /* bottom: 0; */
  left: 0;
  /* right: 0; */

  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 0;
  opacity: 0.2;
  /* transform: translateZ(1); */
`;

export interface CarouselProps {
  nfts?: Array<PokemoonNft>;
  handleSubMenuCommand?: (command: string, cardIdx: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  nfts,
  handleSubMenuCommand,
  ...props
}) => {
  const [consumeClick, setConsumeClick] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOverflow, setIsOverflow] = useState(false);

  const size = useWindowSize();

  const cardRefs = useRef<any[]>([]);
  const theme = useTheme();

  const ref = useRef();
  const [{ scrollLeft }, setSpringScroll] = useSpring(() => ({
    scrollLeft: 0,
  }));

  // useEffect(() => {
  //   const element = ref.current;
  //   if (!!element && element.offsetWidth < element.scrollWidth) {
  //     // your element have overflow
  //     setIsOverflow(true);
  //   } else {
  //     // your element doesn't have overflow
  //     setIsOverflow(false);
  //   }
  // }, [size, nfts]);

  // const bind = useGesture(
  //   {
  //     onDrag: ({ movement: [x] }) => {
  //       const res = scrollLeft.get() - x / 2.5;
  //       setSpringScroll({ scrollLeft: res });
  //     },
  //     onDragEnd: ({ event }) => {
  //       setConsumeClick(true);
  //     },
  //     onWheel: ({ event }) => {
  //       const res = scrollLeft.get() + event.deltaY * 1.5;
  //       setSpringScroll({ scrollLeft: res });
  //     },
  //     onScrollEnd: () => {
  //       const element = ref.current;
  //       if (element) {
  //         setSpringScroll({ scrollLeft: element.scrollLeft, immediate: true });
  //       }
  //     },
  //   },
  //   {
  //     drag: { delay: 200 },
  //     domTarget: ref,
  //     eventOptions: { passive: false },
  //   }
  // );

  useEffect(() => {
    console.log(ref.current);
  }, []);

  // const cardCallback = useCallback(
  //   (idx) => {
  //     if (consumeClick) {
  //       setConsumeClick(false);
  //       return;
  //     }
  //     if (idx === activeIndex) {
  //       cardRefs.current[activeIndex]?.setFocus(false);
  //       setActiveIndex(-1);
  //     } else {
  //       cardRefs.current[idx]?.setFocus(true);

  //       if (nfts && idx === nfts?.length - 1) {
  //         const element = ref.current;
  //         if (element) {
  //           //TODO: Refer to a constant for UI menu width
  //           const maxScrollLeft = element.scrollLeft + 150;
  //           setSpringScroll({ scrollLeft: maxScrollLeft });
  //         }
  //       }

  //       if (activeIndex !== -1) {
  //         cardRefs.current[activeIndex]?.setFocus(false);
  //       }
  //       setActiveIndex(idx);
  //     }
  //   },
  //   [activeIndex, consumeClick, cardRefs, nfts, setSpringScroll]
  // );
  return (
    <RootRef rootRef={ref}>
      <Grid container spacing={5}>
        {nfts?.map((nft, index) => (
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <PokemoonCard
              imageUrl={nft.imageUrl}
              key={index.toString()}
              onClick={() => {}}
              onSubMenuSelect={
                handleSubMenuCommand
                  ? (command) => handleSubMenuCommand(command, index)
                  : () => {}
              }
              // active={activeIndex === index}
              ref={(r) => (cardRefs.current[index] = r)}
            />
          </Grid>
        ))}
      </Grid>
    </RootRef>
  );
};

export default Carousel;
