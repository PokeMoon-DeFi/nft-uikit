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
  handleSubMenuCommand?: (command: string, cardIdx: number) => void;
}

const Gallery: React.FC<CarouselProps> = ({
  nfts,
  handleSubMenuCommand,
  ...props
}) => {
  const ref = useRef();

  return (
    <RootRef rootRef={ref}>
      <Grid container spacing={5} {...props}>
        {nfts?.map((nft, index) => (
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <NftCard
              nft={nft}
              imageUrl={nft.imageUrl}
              key={index.toString()}
              onClick={() => {}}
              onSubMenuSelect={
                handleSubMenuCommand
                  ? (command) => handleSubMenuCommand(command, index)
                  : () => {}
              }
            />
          </Grid>
        ))}
      </Grid>
    </RootRef>
  );
};

export default Gallery;
