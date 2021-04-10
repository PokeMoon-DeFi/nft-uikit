import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../providers/state/hooks";
import { asyncFetchIds } from "../../providers/state/CarouselState";

import Card from "../Card";
import zIndex from "@material-ui/core/styles/zIndex";

const Carousel: React.FC = () => {
  const carousel = useAppSelector((state) => state.carousel);
  const [zState, setZState] = useState(carousel.nfts?.map((nft) => 0));
  const [opacity, setOpacity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const dispatch = useDispatch();

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

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: "black",
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: opacity,
          pointerEvents: opacity === 0 ? "none" : "visible",
          backgroundAttachment: "fixed",
        }}
      />
      {carousel?.nfts?.map((nft, index) => (
        <Card
          cardId={nft.imageUrl}
          key={index.toString()}
          style={{ zIndex: zState[index] }}
          onClick={() => selectCard(index)}
        />
      ))}
    </div>
  );
};

export default Carousel;
