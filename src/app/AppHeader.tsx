import "react";
import { Link as RouterLink } from "react-router";
import { Box, AppBar, Toolbar, Link, Typography } from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.png";

import AppMenu from "./AppMenu";

function AppHeader() {
  return (
    <Box sx={{mb: 2}}>
      <AppBar position="static">
        <Toolbar>
          <Link
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              alignItems: "center",
              display: "flex",
              flex: "auto",
              gap: "8px",
              textDecoration: "none", // Ensure no underline
              "&:visited": {
                color: "inherit", // Prevent purple color for visited links
              },
            }}
            underline="none"
          >
            <Box
              component="img"
              alt="Marpe Logo"
              src={marpeLogo}
              sx={{
                height: "auto",
                maxHeight: "40px",
                maxWidth: "40px",
                width: "auto",
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              마르페(Marpe)
            </Typography>
          </Link>
          <AppMenu />
        </Toolbar>
      </AppBar>
    </Box>
    // <div className="appHeader">
    //   <Link to="/">
    //     <div className="link">
    //       <img alt="Marpe Logo" className="logo" src={marpeLogo} />
    //       <span className="">마르페(Marpe)</span>
    //     </div>
    //   </Link>

    // </div>
  );
}

export default AppHeader;
