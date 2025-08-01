import "react";
import { Container } from "@mui/material";

import AppRoutes from "./AppRoutes.tsx";

function AppBody() {
  return (
    <Container
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        pb: 2,
        position: "relative",
        pt: 2, // Consistent padding top and bottom
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default AppBody;
