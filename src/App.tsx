import "react";
import { Container } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import "./App.css";

import AppBody from "./app/AppBody";
import AppFooter from "./app/AppFooter";
import AppHeader from "./app/AppHeader";

export default function App() {
  // Create a theme instance
  let theme = createTheme();
  // Make all typography responsive
  theme = responsiveFontSizes(theme);

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
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
