import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../providers/state/hooks";
import { asyncFetchIds } from "../../providers/state/CarouselState";

import Card from "../Card";

const Carousel: React.FC = () => {
  const carousel = useAppSelector((state) => state.carousel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchIds(1));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {carousel?.nfts?.map((nft) => (
        <Card cardId={nft.imageUrl} />
      ))}
    </div>
  );
};

export default Carousel;
