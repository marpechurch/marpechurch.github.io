import "react";
import { Link as RouterLink, useLocation } from "react-router";
import {
  Box,
  Breadcrumbs,
  AppBar,
  Toolbar,
  Link,
  Typography,
} from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.png";

import { urlToTitle } from "../utils/urlMaps";

import AppMenu from "./AppMenu";

function AppHeader() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="fixed">
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
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

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
          <AppMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
