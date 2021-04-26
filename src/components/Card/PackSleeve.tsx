import { FC } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { PokemoonNft } from "constants/nfts/types";
import { Typography } from "@material-ui/core";
import Button from "components/Button";
import { TypeChip, RarityChip } from "components/Chip";
import SearchIcon from "@material-ui/icons/Search";
import { InspectorDialog } from "components/Modal";
import useModal from "hooks/useModal";
import { Pack } from "./Pack";

interface PackSleeveProps {
  pack: Pack;
  onPackSelected: (id: string) => void;
}

const StyledBox = styled(Box)`
  flex: 1;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(34, 15, 46, 1) 0%,
    rgba(100, 60, 163, 1) 100%
  );
  border-color: #da52de;
  border-style: outset;
  border-width: 8px;
  box-shadow: 0px -3px 8px 0 #303030;

  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const PackSleeve: FC<PackSleeveProps> = ({ pack, onPackSelected }) => {
  const { packId } = pack;

  return (
    <>
      <StyledBox>
        <Typography
          style={{
            fontFamily: `'Press Start 2P', cursive`,
            fontSize: "16px",
            color: "white",
          }}
        >
          #{340002341}
        </Typography>

        <Typography
          style={{
            fontFamily: `'Press Start 2P', cursive`,
            fontSize: "16px",
            color: "rgb(246 210 255)",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
          }}
          component={"span"}
          align="center"
        >
          {"Blastoff"}
        </Typography>

        <Button
          style={{ fontSize: 12, textTransform: "none" }}
          onClick={() => (!!onPackSelected ? onPackSelected(packId) : null)}
          endIcon={<SearchIcon />}
        >
          View Pack
        </Button>
      </StyledBox>
    </>
  );
};
