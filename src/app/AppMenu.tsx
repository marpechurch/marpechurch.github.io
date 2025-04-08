import { useState } from "react";
import {
  AutoAwesome as VisionIcon,
  Church as ChurchIcon,
  LocationCity as DenominationIcon,
  Man4 as PastorIcon,
  Map as DirectionsIcon,
  MusicNote as WorshipIcon,
  Instagram as SocialIcon,
  People as CommunityIcon,
  VolunteerActivism as OfferingIcon,
  YouTube as SermonsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
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

import { Link as RouterLink } from "react-router";

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
          <ListItemLink to="church" primary="교회 소개" icon={<ChurchIcon />} />
          <ListItemLink
            to="pastor"
            primary="목사님 소개"
            icon={<PastorIcon />}
          />
          <ListItemLink
            to="denomination"
            primary="교단 소개"
            icon={<DenominationIcon />}
          />
          <ListItemLink to="vision" primary="비전 소개" icon={<VisionIcon />} />
          <ListItemLink
            to="community"
            primary="공동체"
            icon={<CommunityIcon />}
          />
          <ListItemLink
            to="directions"
            primary="찾아오시는 길"
            icon={<DirectionsIcon />}
          />
          <ListItemLink
            to="sermons"
            primary="설교 영상"
            icon={<SermonsIcon />}
          />
          <ListItemLink
            to="Social"
            primary="인스타그램"
            icon={<SocialIcon />}
          />
          <ListItemLink
            to="worship"
            primary="찬양 리스트"
            icon={<WorshipIcon />}
          />
          <ListItemLink to="offering" primary="헌금" icon={<OfferingIcon />} />
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
