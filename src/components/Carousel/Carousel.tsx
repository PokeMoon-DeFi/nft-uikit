import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Card from "../Card";
import styled from "styled-components";
import { PokemoonNft } from "../../constants/nfts/types";
import { useGesture } from "react-use-gesture";
import { useLocation, useParams } from "react-router-dom";

const StyledContainer = styled(animated.div)`
  display: flex;
  width: 80%;
  height: 400px;

  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  /* padding: 50px 10px; */
  position: relative;
  flex-direction: row;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
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
}

const Carousel: React.FC<CarouselProps> = ({ nfts, ...props }) => {
  // const nfts = useAppSelector((state) => state.carousel?.nfts);
  const [consumeClick, setConsumeClick] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const cardRefs = useRef<any[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  const [{ scrollLeft }, setSpringScroll] = useSpring(() => ({
    scrollLeft: 0,
  }));

  const bind = useGesture(
    {
      onDrag: ({ movement: [x] }) => {
        const res = scrollLeft.get() - x / 2.5;
        setSpringScroll({ scrollLeft: res });
      },
      onDragEnd: ({ event }) => {
        setConsumeClick(true);
      },
      onWheel: ({ event }) => {
        const res = scrollLeft.get() + event.deltaY * 1.5;
        setSpringScroll({ scrollLeft: res });
      },
      onScrollEnd: () => {
        const element = ref.current;
        if (element) {
          setSpringScroll({ scrollLeft: element.scrollLeft, immediate: true });
        }
      },
    },
    {
      drag: { delay: 200 },
      domTarget: ref,
      eventOptions: { passive: false },
    }
  );

  const cardCallback = useCallback(
    (idx) => {
      if (consumeClick) {
        setConsumeClick(false);
        return;
      }
      if (idx === activeIndex) {
        cardRefs.current[activeIndex]?.setFocus(false);
        setActiveIndex(-1);
      } else {
        cardRefs.current[idx]?.setFocus(true);

        if (nfts && idx === nfts?.length - 1) {
          const element = ref.current;
          if (element) {
            //TODO: Refer to a constant for UI menu width
            const maxScrollLeft = element.scrollLeft + 150;
            setSpringScroll({ scrollLeft: maxScrollLeft });
          }
        }

        if (activeIndex !== -1) {
          cardRefs.current[activeIndex]?.setFocus(false);
        }
        setActiveIndex(idx);
      }
    },
    [activeIndex, consumeClick, cardRefs, nfts, setSpringScroll]
  );

  return (
    <StyledContainer
      {...bind()}
      style={{ touchAction: "pan-y" }}
      ref={ref}
      scrollLeft={scrollLeft}
    >
      {/* <Overlay style={spring} /> */}

      {nfts?.map((nft, index) => (
        <Card
          imageUrl={nft.imageUrl}
          key={index.toString()}
          onClick={() => cardCallback(index)}
          // active={activeIndex === index}
          ref={(r) => (cardRefs.current[index] = r)}
        />
      ))}
    </StyledContainer>
  );
};

export default Carousel;
