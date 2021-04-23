import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import PokemoonCard from "../Card";
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

const StyledContainer = styled(animated(RootRef))`
  height: 100vh;

  overflow-x: auto;
  overflow-y: auto;
  align-items: center;
  position: relative;
  flex-direction: column;
  overflow: hidden;

  -webkit-overflow-scrolling: touch;
  display: flex;
  background-color: green;
`;

const Overlay = styled(animated.div)`
  background-color: red;
  position: fixed;
  background-attachment: fixed;
  top: 0;
  /* bottom: 0; */
  left: 0;
  /* right: 0; */

  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 0;
  opacity: 0.2;
  /* transform: translateZ(1); */
`;

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
            <PokemoonCard
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
