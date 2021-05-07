import React, { useCallback, useEffect, useRef, useState } from "react";
import { NftCard } from "../Card";
import { PokemoonNft } from "../../constants/nfts/types";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";

export interface CarouselProps extends GridProps {
  nfts?: Array<PokemoonNft>;
}

const pageSize = 6;
const Gallery: React.FC<CarouselProps> = ({ nfts, ...props }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
      <Pagination
        count={pageSize}
        page={page}
        onChange={handleChange}
        style={{ marginBottom: 10 }}
      />
      <Grid container spacing={4} justify="center" {...props}>
        {nfts
          ?.filter(
            (nft, index) =>
              index > (page - 1) * pageSize && index <= page * pageSize
          )
          .map((nft, index) => (
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              lg={"auto"}
              key={index}
            >
              <NftCard
                nft={nft}
                imageUrl={nft.imageUrl}
                key={index.toString()}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Gallery;
