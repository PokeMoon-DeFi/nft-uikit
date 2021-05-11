import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import styled from "styled-components";
import {
  Lightning,
  Water,
  Fire,
  Psychic,
  Grass,
  Colorless,
  Dragon,
} from "components/Icons/types";
interface TypeChipProps extends ChipProps {
  type: string;
}

const StyledChip = styled(Chip)<TypeChipProps>`
  background-color: ${({ theme, type }) => {
    if (!type) return "";
    return theme.palette.types[type.toLowerCase()].bgColor;
  }};
  .MuiChip-label {
    color: ${({ theme, type }) => {
      if (!type) return "";
      return theme.palette.types[type.toLowerCase()].textColor;
    }};
  }
  .MuiChip-icon {
    fill: ${({ theme, type }) => {
      if (!type) return "";
      return theme.palette.types[type.toLowerCase()].textColor;
    }};
  }
  border-radius: 5px;
`;

const getTypeIcon = (type: string) => {
  const props = {};
  if (!type) {
    return undefined;
  }
  switch (type.toLowerCase()) {
    case "lightning": {
      return <Lightning {...props} />;
    }
    case "water": {
      return <Water {...props} />;
    }
    case "grass": {
      return <Grass {...props} />;
    }
    case "fire": {
      return <Fire {...props} />;
    }
    case "psychic": {
      return <Psychic {...props} />;
    }
    case "colorless": {
      return <Colorless {...props} />;
    }
    case "dragon": {
      return <Dragon {...props} />;
    }
    default: {
      return undefined;
    }
  }
};

const TypedChip: FC<TypeChipProps> = (props) => {
  const { type, children } = props;

  return <StyledChip icon={getTypeIcon(type)} {...props} />;
};

export default TypedChip;
