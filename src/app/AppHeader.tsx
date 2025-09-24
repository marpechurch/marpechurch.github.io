import { useEffect, useState, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import AppMenu from "./AppMenu";

import bannerImage from "../assets/banner.webp";
import marpeLogo from "../assets/marpe-logo-bw.webp";

import Breadcrumbs from "../components/Breadcrumbs";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { MENU_WIDTH } from "../utils/constants";

// Import the same menu structure and icons from AppMenu
import {
  AutoAwesome as VisionIcon,
  DesignServices as LPDIcon,
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

// Main menu structure with nested submenus (same as AppMenu)
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

// Horizontal menu component for desktop
function HorizontalMenu() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const location = useLocation();
  
  const menuStructure = getMenuStructure(t);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    title: string
  ) => {
    setAnchorEl((prev) => ({ ...prev, [title]: event.currentTarget }));
  };

  const handleMenuClose = (title: string) => {
    setAnchorEl((prev) => ({ ...prev, [title]: null }));
  };

  const isActive = (url: string) => {
    return location.pathname === url;
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexWrap: "nowrap",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {menuStructure.map((item) => (
        <Box key={item.title} sx={{ flex: "0 0 auto" }}>
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, item.title)}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              whiteSpace: "nowrap",
              minWidth: "fit-content",
              px: 2,
              "&:hover": {
                backgroundColor: theme.palette.backgrounds.hover,
              },
            }}
          >
            {item.title}
          </Button>
          <Menu
            anchorEl={anchorEl[item.title]}
            open={Boolean(anchorEl[item.title])}
            onClose={() => handleMenuClose(item.title)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: MENU_WIDTH,
                  boxShadow: theme.palette.shadows.dark,
                },
              },
            }}
          >
            {item.submenu.map((subItem) => (
              <MenuItem
                key={subItem.url}
                component={RouterLink}
                to={subItem.url}
                onClick={() => handleMenuClose(item.title)}
                sx={{
                  backgroundColor: isActive(subItem.url)
                    ? theme.palette.backgrounds.menuActive
                    : "transparent",
                  "&:hover": {
                    backgroundColor: theme.palette.backgrounds.menuHover,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {subItem.icon}
                </ListItemIcon>
                <ListItemText
                  primary={subItem.title}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "14px",
                    },
                  }}
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}
    </Box>
  );
}

function AppHeader() {
  const location = useLocation();
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isOpen, setIsOpen] = useState(false);
  const isResizeTriggered = useRef(false); // Track if the change is due to a resize

  useEffect(() => {
    if (isResizeTriggered.current && isMobile && isOpen) {
      setIsOpen(false); // Close the menu only on resize
    }
    isResizeTriggered.current = false; // Reset the flag after handling
  }, [isMobile, isOpen]);

  const handleToggleMenu = () => {
    isResizeTriggered.current = false; // Ensure this is not treated as a resize
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      isResizeTriggered.current = true; // Mark that a resize occurred
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentPath = location.pathname;

  const headerTitleMap = {
    "/": t("common.churchName"),
    "/staff": t("navigation.staff"),
    "/denomination": t("navigation.denomination"),
    "/vision": t("navigation.vision"),
    "/lpd": t("navigation.lpd"),
    "/directions": t("navigation.directions"),
    "/program": t("navigation.worshipBulletin"),
    "/sermons": t("navigation.sermons"),
    "/social": t("navigation.social"),
    "/worship": t("navigation.sundayPlaylist"),
    "/offering": t("navigation.offering"),
    "/register": t("navigation.register"),
  };

  const currentTitle =
    headerTitleMap[currentPath as keyof typeof headerTitleMap] || t("common.churchName");

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: (theme) => theme.palette.header.topBar,
          color: (theme) =>
            theme.palette.mode === "dark" ? "white" : "black",
          width: "100%",
          left: 0,
          right: 0,
        }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            boxSizing: "border-box",
            display: "flex",
            gap: "8px",
            justifyContent: "space-between",
            minWidth: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              gap: 2,
              flexShrink: 0,
            }}
          >
            <Link
              color="inherit"
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                alignItems: "center",
                display: "flex",
                gap: 2,
                "&:hover": {
                  color: "inherit",
                  textDecoration: "none",
                },
              }}
            >
              <Box
                component="img"
                alt="Marpe Logo"
                src={marpeLogo}
                sx={{ height: "48px", width: "auto" }}
              />
              <Typography sx={{ fontSize: 20 }}>{t("common.churchName")}</Typography>
            </Link>
          </Box>

          {/* Desktop horizontal menu */}
          {!isMobile && <HorizontalMenu />}

          {/* Language switcher and mobile menu grouped together */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LanguageSwitcher />
            {isMobile && (
              <IconButton
                aria-label="menu"
                color="inherit"
                onClick={handleToggleMenu}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Photo Banner - Show on both desktop and mobile */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "100px", md: "200px" }, // Smaller height on mobile
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 60%", // Fixed position to show cross consistently
          backgroundRepeat: "no-repeat",
          position: "relative",
          mt: { xs: "56px", md: "64px" }, // Reduced margin for mobile
        }}
      />

      {/* Breadcrumbs Section - Show on both desktop and mobile */}
      <Breadcrumbs currentTitle={currentTitle} />

      <AppMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />
    </Box>
  );
}

export default AppHeader;
