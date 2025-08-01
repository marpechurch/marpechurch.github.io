import { useEffect, useState, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.webp";

import AppMenu from "./AppMenu";

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
    "/church": "교회 소개",
    "/staff": "섬기는 이들",
    "/denomination": "소속 교단",
    "/vision": "비전",
    "/youth": 'Marpe Youth',
    "/kids": "마르페 키즈",
    "/directions": "오시는 길",
    "/program": "주보",
    "/sermons": "설교 말씀",
    "/social": "인스타그램",
    "/worship": "찬양",
    "/offering": "헌금",
    "/register": "교인 등록",
  };

  const currentTitle = headerTitleMap[currentPath as keyof typeof headerTitleMap] || "마르페 교회";

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => ({
            xs: theme.zIndex.drawer - 1, // Lower z-index for mobile
            md: theme.zIndex.drawer + 1, // Higher z-index for desktop
          }),
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
            </Link>
            <Typography sx={{ fontSize: 20 }}>
              {currentTitle}
            </Typography>
          </Box>
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
      <AppMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />
    </Box>
  );
}

export default AppHeader;
