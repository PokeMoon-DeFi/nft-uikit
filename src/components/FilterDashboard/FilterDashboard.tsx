import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import { TypeChip } from "components/Chip";
import { MaterialTheme } from "../../theme";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography, Grid, ListItemText } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import TypedChip from "components/Chip/TypeChip";
import { RarityChip } from "components/Chip/RarityChip";
import Checkbox from "@material-ui/core/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);
const Dashboard: FC = () => {
  const classes = useStyles();

  const supportedTypes: string[] = Object.keys(MaterialTheme.palette.types);
  const supportedRanks = Object.keys(MaterialTheme.palette.rarity);

  const [activeTypes, setActiveTypes] = React.useState<string[]>([]);
  const [activeRanks, setActiveRanks] = React.useState<string[]>([]);

  const handleTypeChange = (event: any) => {
    const val = event.target.value;
    setActiveTypes(val);
  };

  const handleRankChange = (event: any) => {
    const val = event.target.value;
    setActiveRanks(val);
  };

  return (
    <Box>
      {/* Type Chip */}
      <FormControl className={classes.formControl}>
        <InputLabel>Types</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={activeTypes}
          onChange={handleTypeChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <TypedChip
                  type={value}
                  key={value}
                  label={value}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {supportedTypes.map((type, index) => {
            return (
              <MenuItem key={index} value={type}>
                <Checkbox checked={activeTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* Rarity */}
      <FormControl className={classes.formControl}>
        <InputLabel>Rarity</InputLabel>
        <Select
          labelId="type-checkbox"
          id="type-checkbox"
          multiple
          value={activeRanks}
          onChange={handleRankChange}
          input={<Input id="select-rarity-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <RarityChip
                  rarity={value}
                  key={value}
                  label={value}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {supportedRanks.map((type, index) => {
            return (
              <MenuItem key={index} value={type}>
                <Checkbox checked={activeRanks.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dashboard;
