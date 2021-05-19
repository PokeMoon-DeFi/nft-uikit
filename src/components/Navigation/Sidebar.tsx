import { FC, useState } from "react";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { LinkConfigState } from "components/Header/types";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
interface SidebarProps extends SwipeableDrawerProps {
  linkConfig: LinkConfigState[];
}

interface LinkGroupState {
  label?: string;
  icon?: React.ReactElement;
  linkConfig: LinkConfigState[];
}

const LinkGroup: FC<LinkGroupState> = ({ linkConfig, label, icon }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem
        button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List component="div" disablePadding>
          {linkConfig.map((item, index) => {
            const { icon, label } = item;
            return (
              <ListItem button key={index}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label}></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

const Sidebar: FC<SidebarProps> = ({ open, onOpen, onClose, linkConfig }) => {
  return (
    <SwipeableDrawer
      open={open}
      anchor="right"
      onClose={onClose}
      onOpen={onOpen}
    >
      <List>
        {linkConfig?.map((item, index) => {
          const { group, icon, label } = item;
          if (group) {
            return <LinkGroup linkConfig={group} label={label} icon={icon} />;
          }
          return (
            <ListItem button key={index}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.label}></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </SwipeableDrawer>
  );
};

export default Sidebar;
