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
import {
  AutoAwesome as VisionIcon,
  ChildCare as KidsIcon,
  DesignServices as YouthIcon,
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
const menuStructure = [
  {
    title: "교회 소개",
    submenu: [
      { url: "/staff", title: "섬기는 이들", icon: <StaffIcon /> },
      { url: "/denomination", title: "소속 교단", icon: <DenominationIcon /> },
      { url: "/vision", title: "비전", icon: <VisionIcon /> },
      { url: "/directions", title: "오시는 길", icon: <DirectionsIcon /> },
    ],
  },
  {
    title: "예배 설교",
    submenu: [
      { url: "/sermons", title: "설교 말씀", icon: <SermonsIcon /> },
      { url: "/program", title: "주보", icon: <ProgramIcon /> },
      { url: "/offering", title: "헌금", icon: <OfferingIcon /> },
      { url: "/worship", title: "찬양", icon: <WorshipIcon /> },
    ],
  },
  {
    title: "다음 세대",
    submenu: [
      { url: "/youth", title: 'Marpe Youth', icon: <YouthIcon /> },
      { url: "/kids", title: "Marpe Kids", icon: <KidsIcon /> },
    ],
  },
  {
    title: "교회 소식",
    submenu: [
      { url: "/social", title: "인스타그램", icon: <SocialIcon /> },
      { url: "/register", title: "교인 등록", icon: <RegisterIcon /> },
    ],
  },
];

interface AppMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function AppMenu({ isOpen, toggleMenu }: AppMenuProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);



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
