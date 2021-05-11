import React, { useCallback, useEffect, useRef, useState } from "react";
import { NftCard } from "../Card";
import { PokemoonNft } from "../../constants/nfts/types";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
export interface CarouselProps extends GridProps {
  nfts?: Array<PokemoonNft>;
}

const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white;
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: #5d3797;
  }
`;

const pageSize = 5;
const Gallery: React.FC<CarouselProps> = ({ nfts, ...props }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  //@ts-ignore
  const count =
    nfts && nfts.length > 0 ? Math.floor(nfts.length / pageSize) + 1 : 0;
  return (
    <>
      <StyledPagination
        count={count}
        page={page}
        onChange={handleChange}
        style={{ marginBottom: 10 }}
        variant={"outlined"}
      />
      <Grid container spacing={4} justify="center" {...props}>
        {nfts
          ?.sort((a, b) => parseInt(b.tokenId) - parseInt(a.tokenId))
          ?.filter(
            (nft, index) =>
              index >= (page - 1) * pageSize && index <= page * pageSize
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
