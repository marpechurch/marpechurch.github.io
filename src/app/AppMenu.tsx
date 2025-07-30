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
  Church as ChurchIcon,
  DesignServices as YouthIcon,
  Diversity3 as NextGenIcon,
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
  { url: "/church", title: "교회 소개", icon: <ChurchIcon /> },
  { url: "/staff", title: "섬기는 이들", icon: <StaffIcon /> },
  { url: "/denomination", title: "소속 교단", icon: <DenominationIcon /> },
  { url: "/vision", title: "비전", icon: <VisionIcon /> },
  {
    title: "다음 세대",
    icon: <NextGenIcon />,
    submenu: [
      { url: "/youth", title: 'Marpe Youth "LPD"', icon: <YouthIcon /> },
      { url: "/kids", title: "마르페 키즈", icon: <KidsIcon /> },
    ],
  },
  { url: "/directions", title: "오시는 길", icon: <DirectionsIcon /> },
  { url: "/program", title: "주보", icon: <ProgramIcon /> },
  { url: "/sermons", title: "설교 말씀", icon: <SermonsIcon /> },
  { url: "/social", title: "인스타그램", icon: <SocialIcon /> },
  { url: "/worship", title: "찬양", icon: <WorshipIcon /> },
  { url: "/offering", title: "헌금", icon: <OfferingIcon /> },
  { url: "/register", title: "교인 등록", icon: <RegisterIcon /> },
];

interface AppMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function AppMenu({ isOpen, toggleMenu }: AppMenuProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
        sx={{
          width: 220,
          position: { md: "relative" },
          top: { md: 60 },
        }}
        onClick={() => toggleMenu()}
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
                      <ListItemIcon>{item.icon}</ListItemIcon>
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
            } else {
              // Regular menu item
              return (
                <ListItemLink
                  key={item.url}
                  icon={item.icon}
                  primary={item.title}
                  to={item.url}
                />
              );
            }
          })}
        </List>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleMenu}
      variant={isDesktop ? "permanent" : "temporary"}
    >
      <DrawerList />
    </Drawer>
  );
}
