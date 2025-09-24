import { useState } from "react";
import { Link as RouterLink } from "react-router";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  AutoAwesome as VisionIcon,
  DesignServices as LPDIcon,
  ExpandLess,
  ExpandMore,
  FormatListBulleted as ProgramIcon,
  HistoryEdu as RegisterIcon,
  Instagram as SocialIcon,
  LocationCity as DenominationIcon,
  Map as DirectionsIcon,
  MusicNote as WorshipIcon,
  People as StaffIcon,
  VolunteerActivism as OfferingIcon,
  YouTube as SermonsIcon,
} from "@mui/icons-material";

// Main menu structure with nested submenus
const getMenuStructure = (t: (key: string) => string) => [
  {
    title: t("navigation.introduction"),
    submenu: [
      { url: "/staff", title: t("navigation.staff"), icon: <StaffIcon /> },
      { url: "/denomination", title: t("navigation.denomination"), icon: <DenominationIcon /> },
      { url: "/vision", title: t("navigation.vision"), icon: <VisionIcon /> },
      { url: "/directions", title: t("navigation.directions"), icon: <DirectionsIcon /> },
    ],
  },
  {
    title: t("navigation.service"),
    submenu: [
      { url: "/sermons", title: t("navigation.sermons"), icon: <SermonsIcon /> },
      { url: "/program", title: t("navigation.worshipBulletin"), icon: <ProgramIcon /> },
      { url: "/offering", title: t("navigation.offering"), icon: <OfferingIcon /> },
      { url: "/worship", title: t("navigation.sundayPlaylist"), icon: <WorshipIcon /> },
    ],
  },
  {
    title: t("navigation.englishMinistry"),
    submenu: [
      { url: "/lpd", title: t("navigation.lpd"), icon: <LPDIcon /> },
    ],
  },
  {
    title: t("navigation.news"),
    submenu: [
      { url: "/social", title: t("navigation.social"), icon: <SocialIcon /> },
      { url: "/register", title: t("navigation.register"), icon: <RegisterIcon /> },
    ],
  },
];

interface AppMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function AppMenu({ isOpen, toggleMenu }: AppMenuProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuStructure = getMenuStructure(t);

  function DrawerList() {
    return (
      <Box
        sx={{
          width: 220,
          position: { md: "relative" },
          top: { md: 60 },
        }}
      >
        <List>
          {menuStructure.map((item) => {
            if (item.submenu) {
              // Nested menu item
              const isOpen = openSubmenu === item.title;
              return (
                <Box key={item.title}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenSubmenu(isOpen ? null : item.title);
                      }}
                    >
                      <ListItemText primary={item.title} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenu.map((subItem) => (
                        <ListItem key={subItem.url} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={subItem.url}
                            sx={{ pl: 4 }}
                            onClick={() => toggleMenu()}
                          >
                            <ListItemIcon>{subItem.icon}</ListItemIcon>
                            <ListItemText primary={subItem.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }
          })}
        </List>
      </Box>
    );
  }

  // Only render the drawer on mobile screens
  if (isDesktop) {
    return null;
  }

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleMenu}
      variant="temporary"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
          backgroundColor: (theme) => theme.palette.background.paper,
          borderLeft: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <DrawerList />
    </Drawer>
  );
}
