import "react";
import { Container } from "@mui/material";

import AppRoutes from "./AppRoutes.tsx";


function AppHeader() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        pb: 2,
        pt: 8,
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default AppHeader;
