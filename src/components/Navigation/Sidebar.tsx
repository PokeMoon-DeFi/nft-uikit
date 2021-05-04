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

interface SidebarProps extends SwipeableDrawerProps {
  linksConfig?: string[];
}

const Sidebar: FC<SidebarProps> = ({ open, onOpen, onClose }) => {
  return (
    <SwipeableDrawer
      open={open}
      anchor="right"
      onClose={onClose}
      onOpen={onOpen}
    >
      <List>
        <ListItem button key={"safd"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"eimierime"}></ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default Sidebar;
