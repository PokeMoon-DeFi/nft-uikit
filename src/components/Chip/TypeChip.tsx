import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import { useTheme } from "styled-components";

interface TypeChipProps extends ChipProps {
  type?: string;
}

const TypeChip: FC<TypeChipProps> = (props) => {
  const { types } = props;
  const theme = useTheme();
  const bgColor = theme.types.fire;
  return (
    <Chip {...props} style={{ background: bgColor, color: "white" }}></Chip>
  );
};

export default TypeChip;
