import Chip, { ChipProps } from "@material-ui/core/Chip";
import { FC } from "react";
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import Palette from "@material-ui/core/styles/createPalette";
import { withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    label: {},
  });

interface TypeChipProps extends ChipProps {
  type: string;
}

const getBackgroundColor = (theme: Theme, type: string) => {
  const typeColors = theme.palette.types;
  const bgColor =
    type in typeColors && !!typeColors[type] ? typeColors[type] : "grey";
  return bgColor;
};

const getLabelColor = (theme: Theme, type: string) => {
  const lightColors = ["lightning"];
  if (lightColors.includes(type)) {
    return "black";
  } else return "white";
};

const useStyles = makeStyles<Theme, TypeChipProps>((theme) => ({
  root: {
    background: ({ type }) => getBackgroundColor(theme, type),
  },
  label: {
    color: ({ type }) => getLabelColor(theme, type),
  },
}));

const TypeChip: FC<TypeChipProps> = (props) => {
  const { type } = props;
  const theme = useTheme();
  const classes = useStyles(props);

  return <Chip classes={classes} label={type} />;
};

export default TypeChip;
