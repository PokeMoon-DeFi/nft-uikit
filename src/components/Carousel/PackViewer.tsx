import React from "react";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import NFT_LIST from "./storyData";

interface Params {
  id: string;
}

const PackViewer: React.FC = () => {
  const { id } = useParams<Params>();
  console.log(id);

  return <Carousel nfts={NFT_LIST} />;
};

export default PackViewer;
