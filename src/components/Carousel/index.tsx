import React, { UIEventHandler, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../providers/state/hooks";
import { asyncFetchIds } from "../../providers/state/CarouselState";
import { useSpring, animated } from "react-spring";
import GridList from "@material-ui/core/GridList";
import Card from "../Card";
import styled from "styled-components";

import { useDrag, useGesture, useScroll } from "react-use-gesture";

const StyledContainer = styled(animated.div)`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 50px 10px;
  background-color: black;
  z-index: 1;
  position: relative;
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

const Carousel: React.FC = () => {
  const carousel = useAppSelector((state) => state.carousel);
  const [zState, setZState] = useState(carousel.nfts?.map((nft) => 0));
  const [opacity, setOpacity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const dispatch = useDispatch();

  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
    dispatch(asyncFetchIds(1));
  }, [dispatch]);

  const selectCard = (index: number) => {
    const updatedState = zState;
    let foundCard = false;

    if (activeIndex === index) {
      //unfocus
      setOpacity(0);
      updatedState[activeIndex] = 0;
      setZState(updatedState);
      setActiveIndex(-1);
      return;
    }

    if (updatedState && updatedState.length >= index) {
      updatedState[index] = 2;
      foundCard = true;
    }

    setZState(updatedState);
    if (foundCard) {
      setActiveIndex(index);
      setOpacity(1);
    }
  };

  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef(null);

  const bind = useGesture(
    {
      onDrag: ({ movement: [x] }) => {
        setScrollLeft(scrollLeft - x / 25);
      },
      onWheel: ({ event }) => {
        setScrollLeft(scrollLeft + event.deltaY);
      },
    },
    {
      domTarget: ref,
      eventOptions: { passive: false },
    }
  );

  useEffect(() => {
    if (ref && ref.current) {
      // @ts-ignore
      ref.current.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  return (
    <StyledContainer {...bind()} style={{ touchAction: "pan-y" }} ref={ref}>
      {/* <Overlay style={spring} /> */}

      {carousel?.nfts?.map((nft, index) => (
        <Card
          cardId={nft.imageUrl}
          key={index.toString()}
          style={{ zIndex: index }}
          onClick={() => selectCard(index)}
        />
      ))}
    </StyledContainer>
  );
};

export default Carousel;
