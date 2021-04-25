import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { hexToHSL } from "../../utils/colorUtils";
interface TypeChipProps extends ChipProps {
  type: string;
}

const StyledChip = styled(Chip)<TypeChipProps>`
  background-color: ${({ theme, type }) => {
    return theme.types[type].bgColor;
  }};
  span {
    color: ${({ theme, type }) => {
      return theme.types[type].textColor;
    }};
  }
`;

const TypeChip: FC<TypeChipProps> = ({ type }) => {
  return <StyledChip type={type} label={type} />;
};

export default TypeChip;
