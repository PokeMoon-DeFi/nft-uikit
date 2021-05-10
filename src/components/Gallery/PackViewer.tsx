import React from "react";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
import { nftBalance } from "utils/nftBalance";

interface Params {
  id: string;
}

const PackViewer: React.FC = () => {
  const { id } = useParams<Params>();

  return <Gallery nfts={nftBalance.blastOff.cards} />;
};

export default PackViewer;
