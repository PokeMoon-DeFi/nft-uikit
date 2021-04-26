import { FC } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { PokemoonNft } from "constants/nfts/types";
import { Typography } from "@material-ui/core";
import Button from "components/Button";

interface SleeveProps {
  nft: PokemoonNft;
}

const StyledBox = styled(Box)`
  flex: 1;
  width: 100%;
  height: 47%;
  background: linear-gradient(
    0deg,
    rgba(34, 15, 46, 1) 0%,
    rgba(100, 60, 163, 1) 100%
  );
  border-color: #da52de;
  border-style: solid;
  border-width: 8px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const Sleeve: FC<SleeveProps> = ({ nft }) => {
  const { uniqueId, rarity, card } = nft;

  const { name } = card ?? { name: "" };
  return (
    <>
      <StyledBox>
        {uniqueId && (
          <Typography
            style={{
              fontFamily: `'Press Start 2P', cursive`,
              fontSize: "16px",
              color: "white",
            }}
          >
            #{uniqueId}
          </Typography>
        )}
        <Typography
          style={{
            fontFamily: `'Press Start 2P', cursive`,
            fontSize: "16px",
            color: "white",
          }}
        >
          {name}
        </Typography>
        <Button label={"inspect"} />
      </StyledBox>
    </>
  );
};
