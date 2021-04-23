import { FC, useMemo, useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import SpeedDial from "@material-ui/lab/SpeedDial";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { useTheme } from "@material-ui/core/styles";

//TODO: Swap icons for pokemoon stuff
const linkConfig = [
  {
    target: "/buy",
    label: "Buy",
    icon: <StoreOutlinedIcon />,
  },
  {
    target: "/gallery",
    label: "Gallery",
    icon: <PhotoSizeSelectActualIcon />,
  },
];

const Fab: FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const reverseList = useMemo(() => linkConfig.reverse(), []);

  return (
    <Hidden smUp>
      <SpeedDial
        ariaLabel="Speed Dial"
        color="primary"
        aria-label="add"
        icon={<SpeedDialIcon />}
        onClick={() => setOpen(!open)}
        open={open}
        style={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
      >
        {reverseList.map((link) => {
          return (
            <SpeedDialAction
              key={link.label}
              icon={link.icon}
              tooltipTitle={link.label}
              tooltipOpen
              onClick={() => (window.location.href = link.target)}
            />
          );
        })}
      </SpeedDial>
    </Hidden>
  );
};

export default Fab;
