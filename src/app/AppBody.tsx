import "react";
import { Container } from "@mui/material";

import AppRoutes from "./AppRoutes.tsx";

function AppBody() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        pb: 2,
        position: "relative",
        pt: 2, // Consistent padding top and bottom
        px: { xs: 2, sm: 3, md: 4, lg: 8, xl: 12 }, // Responsive horizontal padding
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default AppBody;
