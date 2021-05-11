import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import styled from "styled-components";
import { BlastOff } from "components/Icons/packs";

interface PackChipProps extends ChipProps {
  pack: string;
}

const getPackIcon = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return <BlastOff />;
    }
    default: {
      return undefined;
    }
  }
};

const getPackLabel = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return "Blast-Off!";
    }
    default: {
      return undefined;
    }
  }
};

const getPackBgColor = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return "#9657fc";
    }
    default: {
      return undefined;
    }
  }
};

const getPackFillColor = (pack: string) => {
  switch (pack) {
    case "blastOff": {
      return "white";
    }
    default: {
      return undefined;
    }
  }
};

const StyledChip = styled(Chip)<PackChipProps>`
  padding: 8px;
  background-color: ${({ pack }) => getPackBgColor(pack)};
  fill: ${({ pack }) => getPackFillColor(pack)};
  color: ${({ pack }) => getPackFillColor(pack)};
`;

const PackChip: FC<PackChipProps> = (props) => {
  const { pack } = props;

  return (
    <StyledChip
      icon={getPackIcon(pack)}
      label={getPackLabel(pack)}
      {...props}
    />
  );
};

export default PackChip;
