import { useState } from "react";
import {
  Church as ChurchIcon,
  LocationCity as DenominationIcon,
  Map as DirectionsIcon,
  MusicNote as WorshipIcon,
  // Instagram as InstagramIcon,
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
          <ListItemLink to="church" primary="교회 소개" icon={<ChurchIcon />} />
          <ListItemLink to="denomination" primary="교단 소개" icon={<DenominationIcon />} />
          <ListItemLink
            to="community"
            primary="공동체"
            icon={<CommunityIcon />}
          />
          <ListItemLink to="directions" primary="찾아오시는 길" icon={<DirectionsIcon />} />
          <ListItemLink to="videos" primary="설교 영상" icon={<VideosIcon />} />
          <ListItemLink to="worship" primary="찬양 리스트" icon={<WorshipIcon />} />
          {/* <ListItemLink to="instagram" primary="인스타그램" icon={<InstagramIcon />} /> */}
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
