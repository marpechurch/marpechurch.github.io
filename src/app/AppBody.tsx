import "react";

import AppRoutes from "./AppRoutes.tsx";

import "./AppBody.css";
import { Container } from "@mui/material";

function AppHeader() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        paddingBottom: "8px",
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default AppHeader;
