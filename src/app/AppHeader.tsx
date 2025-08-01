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

import marpeLogo from "../assets/marpe-logo-bw.webp";
import bannerImage from "../assets/banner.webp";

import AppMenu from "./AppMenu";

// Import the same menu structure and icons from AppMenu
import {
  AutoAwesome as VisionIcon,
  ChildCare as KidsIcon,
  DesignServices as YouthIcon,
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
      { url: "/youth", title: "Marpe Youth", icon: <YouthIcon /> },
      { url: "/kids", title: "마르페 키즈", icon: <KidsIcon /> },
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

// Horizontal menu component for desktop
function HorizontalMenu() {
  const [anchorEl, setAnchorEl] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const location = useLocation();

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
    <Box sx={{ display: "flex", gap: 3 }}>
      {menuStructure.map((item) => (
        <Box key={item.title}>
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, item.title)}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
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
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 200,
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
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
                    ? "rgba(25, 118, 210, 0.08)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.04)",
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
  const pathnames = location.pathname.split("/").filter((x) => x);

  const theme = useTheme();
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

  const currentPath = `/${pathnames[pathnames.length - 1] ?? ""}`;

  const headerTitleMap = {
    "/": "마르페 교회",
    "/staff": "섬기는 이들",
    "/denomination": "소속 교단",
    "/vision": "비전",
    "/youth": "Marpe Youth",
    "/kids": "마르페 키즈",
    "/directions": "오시는 길",
    "/program": "주보",
    "/sermons": "설교 말씀",
    "/social": "인스타그램",
    "/worship": "찬양",
    "/offering": "헌금",
    "/register": "교인 등록",
  };

  const currentTitle =
    headerTitleMap[currentPath as keyof typeof headerTitleMap] || "마르페 교회";

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const breadcrumbs = ["HOME"];

    if (pathnames.length > 0) {
      // Add the main category based on current path
      const mainCategory = menuStructure.find((item) =>
        item.submenu.some((subItem) => subItem.url === currentPath)
      );

      if (mainCategory) {
        breadcrumbs.push(mainCategory.title);
      }

      // Add the current page title
      breadcrumbs.push(currentTitle);
    }

    return breadcrumbs.join(" / ");
  };

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => ({
            xs: theme.zIndex.drawer - 1, // Lower z-index for mobile
            md: theme.zIndex.drawer + 1, // Higher z-index for desktop
          }),
          backgroundColor: (theme) => theme.palette.header.topBar,
          color: (theme) =>
            theme.palette.header.topBar === "#242424" ? "white" : "black",
        }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            display: "flex",
            flex: "auto",
            gap: "8px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ alignItems: "center", display: "flex", gap: 2 }}>
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
              <Typography sx={{ fontSize: 20 }}>마르페 교회</Typography>
            </Link>
          </Box>

          {/* Desktop horizontal menu */}
          {!isMobile && <HorizontalMenu />}

          {/* Mobile menu button */}
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
        </Toolbar>
      </AppBar>

      {/* Photo Banner - Show on both desktop and mobile */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "100px", md: "200px" }, // Smaller height on mobile
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "50% 65%", md: "50% 60%" },
          backgroundRepeat: "no-repeat",
          position: "relative",
          mt: { xs: "56px", md: "64px" }, // Reduced margin for mobile
        }}
      />

      {/* Breadcrumbs Section - Show on both desktop and mobile */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.header.breadcrumbs,
          color: (theme) =>
            theme.palette.header.breadcrumbs === "#88c3cd" ? "white" : "black",
          py: { xs: 0.5, md: 1 },
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Page title on the left */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {currentTitle}
        </Typography>

        {/* Breadcrumbs on the right */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            marginRight: "60px",
          }}
        >
          {generateBreadcrumbs()}
        </Typography>
      </Box>

      <AppMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />
    </Box>
  );
}

export default AppHeader;
