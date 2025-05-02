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

import "./fonts/GmarketSansTTFBold.ttf";
import "./fonts/GmarketSansTTFMedium.ttf";

export default function App() {
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
      fontFamily: "'GmarketSansTTFMedium', Arial, sans-serif", // Use your custom font
      body1: {
        lineHeight: 1.8, // Move lineHeight to h1 variant
      },
      h1: {
        fontFamily: "'GmarketSansTTFBold', Arial, sans-serif", // Use your custom font
        textAlign: "center",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#51a4d3", // Set a custom color for all links
            fontFamily: "'GmarketSansTTFMedium', Arial, sans-serif", // Apply font to List
            "&:hover": {
              color: "#66aac2",
              textDecoration: "underline", // Optional: Add underline on hover
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            fontFamily: "'GmarketSansTTFMedium', Arial, sans-serif", // Apply font to ListItem
          },
        },
      },
      MuiTouchRipple: {
        styleOverrides: {
          root: {
            color: "#51a4d3", // Custom ripple color
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
