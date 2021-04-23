import React from "react";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
import { BLAST_OFF_COLLECTION } from "utils/StoryData";

interface Params {
  id: string;
}

const PackViewer: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <Gallery nfts={BLAST_OFF_COLLECTION} handleSubMenuCommand={() => null} />
  );
};

export default PackViewer;
