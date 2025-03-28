import { useState } from "react";
import {
  Church as ChurchIcon,
  MenuBook as ServiceIcon,
  People as CommunityIcon,
  VolunteerActivism as OfferingIcon,
  YouTube as VideosIcon,
} from "@mui/icons-material";
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
        sx={{ width: 200 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <ListItemLink to="church" primary="교회" icon={<ChurchIcon />} />
          <ListItemLink
            to="community"
            primary="공동체"
            icon={<CommunityIcon />}
          />
          <ListItemLink to="service" primary="예배" icon={<ServiceIcon />} />
          <ListItemLink to="videos" primary="설교" icon={<VideosIcon />} />
          <ListItemLink to="offering" primary="헌금" icon={<OfferingIcon />} />
        </List>
      </Box>
    );
  }

  return (
    <>
      <Button onClick={toggleDrawer(true)}>☰</Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </>
  );
}
