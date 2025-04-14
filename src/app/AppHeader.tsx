import { useEffect, useState, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.png";

import { urlToTitle } from "../utils/urlMaps";

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
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ alignItems: "center", display: "flex", fontSize: 20, gap: 1 }}
          >
            <Link
              color="inherit"
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                alignItems: "center",
                display: "flex",
                gap: 1,
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
              <Typography sx={{ fontSize: 20 }}>마르페</Typography>
            </Link>
            {pathnames.map((_, index) => {
              const last: boolean = index === pathnames.length - 1;
              const to: string = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  key={to}
                  sx={{ color: "text.primary", fontSize: 20 }}
                >
                  {urlToTitle(to)}
                </Typography>
              ) : (
                <Link
                  color="inherit"
                  component={RouterLink}
                  key={to}
                  to={to}
                  underline="hover"
                >
                  {urlToTitle(to)}
                </Link>
              );
            })}
          </Breadcrumbs>
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
