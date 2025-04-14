import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import { urls, urlToIcon, urlToTitle } from "../utils/urlMaps";

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
        <ListItemButton component={RouterLink} to={to}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItemButton>
      </ListItem>
    );
  }

  function DrawerList() {
    return (
      <Box
        sx={{ width: 200 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {urls.slice(1).map((url) => (
            <ListItemLink
              to={url}
              primary={urlToTitle(url)}
              icon={urlToIcon(url)}
            />
          ))}
        </List>
      </Box>
    );
  }

  return (
    <>
      <IconButton
        aria-label="menu"
        color="inherit"
        onClick={toggleDrawer(true)}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </>
  );
}
