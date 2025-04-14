import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            display: "flex",
            flex: "auto",
            gap: "8px",
            justifyContent: "space-between",
            textDecoration: "none", // Ensure no underline
            "&:visited": {
              color: "inherit", // Prevent purple color for visited links
            },
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
                  color: "inherit", // Prevent color change on hover
                  textDecoration: "none", // Ensure no underline appears on hover
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
              onClick={() => setIsOpen(!isOpen)}
              size="large"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <AppMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
    </Box>
  );
}

export default AppHeader;
