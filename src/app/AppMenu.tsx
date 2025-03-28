import { useState } from "react";
import { MoveToInbox as InboxIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router";

import "./AppMenu.css";

export default function AppMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  interface ListItemLinkProps {
    icon?: React.ReactElement<unknown>;
    primary: string;
    to: string;
  }

  function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;

    return (
      <ListItem disablePadding>
        <ListItemButton component={Link} to={to}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItemButton>
      </ListItem>
    );
  }

  function DrawerList() {
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <ListItemLink to="church" primary="교회" icon={<InboxIcon />} />
          <ListItemLink to="community" primary="공동체" icon={<InboxIcon />} />
          <ListItemLink to="service" primary="예배" icon={<InboxIcon />} />
          <ListItemLink to="videos" primary="설교" icon={<InboxIcon />} />
          <ListItemLink to="offering" primary="헌금" icon={<InboxIcon />} />
        </List>
      </Box>
    );
  }

  return (
    <>
      <Button onClick={toggleDrawer(true)}>☰</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </>
  );
}
