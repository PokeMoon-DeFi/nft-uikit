import React from "react";
import { useAppSelector } from "../../providers/state/hooks";
import Card from "../Card";

const Carousel: React.FC = () => {
  const carousel = useAppSelector((state) => state.carousel);
  return (
    <div style={{ display: "flex" }}>
      {carousel?.nfts?.map((nft) => (
        <Card cardId={nft.imageUrl} />
      ))}
    </div>
  );
};

export default Carousel;
