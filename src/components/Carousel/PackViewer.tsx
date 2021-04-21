import React from "react";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import { BLAST_OFF_COLLECTION } from "utils/StoryData";

interface Params {
  id: string;
}

const PackViewer: React.FC = () => {
  const { id } = useParams<Params>();

  console.log(id);

  return (
    <Carousel nfts={BLAST_OFF_COLLECTION} handleSubMenuCommand={() => null} />
  );
};

export default PackViewer;
