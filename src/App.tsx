import "react";
import { Box } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useState, useEffect } from "react";

// Extend the theme to include custom header colors
declare module "@mui/material/styles" {
  interface Palette {
    header: {
      topBar: string;
      breadcrumbs: string;
      purple: string;
    };
  }
  interface PaletteOptions {
    header?: {
      topBar: string;
      breadcrumbs: string;
      purple: string;
    };
  }
}

import AppBody from "./app/AppBody";
import AppFooter from "./app/AppFooter";
import AppHeader from "./app/AppHeader";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in color scheme preference
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#fdf4b3",
      },
      text: {
        secondary: "#666666", // Define a neutral color for secondary text
      },
      // Custom colors for header components
      header: {
        topBar: isDarkMode ? "#242424" : "#ffffff", // Same as main content background in dark mode, white in light mode
        breadcrumbs: isDarkMode ? "#a8c3cd" : "#e3f2fd", // Darker blue in dark mode, light blue in light mode
        purple: "#673ab7", // Purple (original breadcrumbs color)
      },
    },
    typography: {
      fontFamily: "'GmarketSans', Arial, sans-serif", // Use unified font family
      body1: {
        lineHeight: 1.8, // Move lineHeight to h1 variant
        fontWeight: 400, // Medium weight for body text
      },
      h1: {
        fontFamily: "'GmarketSans', Arial, sans-serif", // Use unified font family
        fontWeight: 700, // Bold weight for headings
        textAlign: "center",
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            width: "100%",
            maxWidth: "100% !important",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#51a4d3", // Set a custom color for all links
            fontFamily: "'GmarketSans', Arial, sans-serif", // Apply font to List
            fontWeight: 400, // Medium weight for links
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
            fontFamily: "'GmarketSans', Arial, sans-serif", // Apply font to ListItem
            fontWeight: 400, // Medium weight for list items
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        wordBreak: "keep-all",
      }}
    >
      <ThemeProvider theme={theme}>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </ThemeProvider>
    </Box>
  );
}
