import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { withTheme } from "@material-ui/core";

interface TypeChipProps extends ChipProps {
  type: string;
}

const StyledChip = styled(Chip)<TypeChipProps>`
  background-color: ${({ theme, type }) => theme.palette.types[type]};
`;

export default StyledChip;
