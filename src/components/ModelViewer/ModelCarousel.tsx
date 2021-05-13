import { FC, useEffect, useState } from "react";
import { ModelViewer } from "components/ModelViewer";
import { PokemoonNft } from "config/constants/nfts";
import Button from "components/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import styled from "styled-components";

type DivProps = JSX.IntrinsicElements["div"];

interface ModelCarouselProps extends DivProps {
  nfts: PokemoonNft[];
}

const StyledButton = styled(IconButton)`
  background: #321133;
  color: white;
  border-radius: 83px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  border: 1px solid #c139c5;
  border-width: 2px;
  border-style: solid;
  height: 40px;

  &:disabled {
    color: white;
  }

  span {
    text-transform: none;
    white-space: nowrap;
  }

  @media (hover: hover) {
    &:hover {
      background-color: white;
      color: black;
      transition: 0.14s ease;
    }
  }
  @media (hover: none) {
    &:hover {
      background-color: #321133;
      color: white;
      transition: 0.14s ease;
    }
  }
  &:active {
    background: white;
    color: black;
    transition: 0.5s ease;
    transform: scale(1.1, 1.1);
    transition: 0.1s ease;
  }
`;

const ModelCarousel: FC<ModelCarouselProps> = ({ nfts, ...props }) => {
  const { style } = props;
  const [index, setIndex] = useState(0);
  const [activeNft, setActiveNft] = useState(nfts[index]);

  const onPrevClick = () => {
    if (index <= 0) {
      setIndex(nfts.length - 1);
    } else setIndex((val) => val - 1);
  };

  const onNextClick = () => {
    if (index >= nfts.length - 1) {
      setIndex(0);
    } else setIndex((val) => val + 1);
  };

  useEffect(() => {
    setActiveNft(nfts[index]);
  }, [index, setActiveNft, nfts]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <StyledButton onClick={onPrevClick}>
        <ArrowBackIosIcon />
      </StyledButton>
      <ModelViewer
        nft={activeNft}
        style={{ width: 200, ...style }}
        {...props}
      />
      <StyledButton onClick={onNextClick}>
        <ArrowForwardIosIcon />
      </StyledButton>
    </div>
  );
};

export default ModelCarousel;
