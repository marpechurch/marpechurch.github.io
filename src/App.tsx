import "react";
import { Container } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import AppBody from "./app/AppBody";
import AppFooter from "./app/AppFooter";
import AppHeader from "./app/AppHeader";

export default function App() {
  // Create a single theme instance
  let theme = createTheme({
    palette: {
      primary: {
        main: "#4ebb7e",
      },
    },
    typography: {
      h1: {
        textAlign: "center",
      },
    },
  });

  // Make all typography responsive
  theme = responsiveFontSizes(theme);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minWidth: "100vw",
        wordBreak: "keep-all",
      }}
    >
      <ThemeProvider theme={theme}>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </ThemeProvider>
    </Container>
  );
}
