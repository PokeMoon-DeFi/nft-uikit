import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { NftCard } from "../Card";
import styled from "styled-components";
import { PokemoonNft } from "../../constants/nfts/types";
import { useGesture } from "react-use-gesture";
import { useLocation, useParams } from "react-router-dom";
import useWindowSize from "hooks/useWindowSize";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import RootRef from "@material-ui/core/RootRef";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core";

export interface CarouselProps extends GridProps {
  nfts?: Array<PokemoonNft>;
}

const Gallery: React.FC<CarouselProps> = ({ nfts, ...props }) => {
  return (
    <Grid container spacing={4} justify="center" {...props}>
      {nfts?.map((nft, index) => (
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          lg={"auto"}
          key={index}
        >
          <NftCard nft={nft} imageUrl={nft.imageUrl} key={index.toString()} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
