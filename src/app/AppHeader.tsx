import "react";
import { Link as RouterLink } from "react-router";
import { Box, AppBar, Toolbar, Link, Typography } from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.png";

import AppMenu from "./AppMenu";

function AppHeader() {
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link
              color="inherit"
              component={RouterLink}
              to="/"
              underline="none"
              sx={{ display: "flex" }}
            >
              <Box
                component="img"
                alt="Marpe Logo"
                src={marpeLogo}
                sx={{ height: "40px", width: "auto" }}
              />
            </Link>
            <Link
              color="inherit"
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                "&:hover": {
                  color: "inherit", // Prevent color change on hover
                  textDecoration: "none", // Ensure no underline appears on hover
                },
              }}
            >
              <Typography variant="h6" component="div">
                마르페
              </Typography>
            </Link>
          </Box>
          <AppMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
