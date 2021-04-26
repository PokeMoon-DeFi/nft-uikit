import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import styled from "styled-components";
import { withTheme } from "@material-ui/core";

interface TypeChipProps extends ChipProps {
  type: string;
}

const StyledChip = styled(Chip)<TypeChipProps>`
  background-color: ${({ theme, type }) =>
    theme.palette.types[type.toLowerCase()].bgColor};
  .MuiChip-label {
    color: ${({ theme, type }) =>
      theme.palette.types[type.toLowerCase()].textColor};
  }
  border-radius: 5px;
`;

export default StyledChip;
