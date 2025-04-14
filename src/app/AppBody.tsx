import "react";
import { Container } from "@mui/material";

import AppRoutes from "./AppRoutes.tsx";

function AppHeader() {
  return (
    <Container
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        pb: 2,
        position: "relative",
        pt: 8,
        right: { md: 100, xs: 0 },
        width: { md: "calc(100% - 200px)", xs: "100%" },
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default AppHeader;
