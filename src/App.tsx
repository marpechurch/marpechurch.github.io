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
        main: "#fdf4b3",
      },
      text: {
        secondary: "#666666", // Define a neutral color for secondary text
      },
    },
    typography: {
      h1: {
        textAlign: "center",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#51a4d3", // Set a custom color for all links
            "&:hover": {
              color: "#66aac2",
              textDecoration: "underline", // Optional: Add underline on hover
            },
          },
        },
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
