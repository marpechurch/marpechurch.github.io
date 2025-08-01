import "react";
import { Box } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useState, useEffect } from "react";

// Extend the theme to include custom header colors
declare module '@mui/material/styles' {
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

import "./fonts/GmarketSansTTFBold.ttf";
import "./fonts/GmarketSansTTFMedium.ttf";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in color scheme preference
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
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
            "@media (min-width: 900px)": {
              marginLeft: 24,
              marginRight: 24,
            },
            "@media (min-width: 1200px)": {
              marginLeft: 32,
              marginRight: 32,
            },
          },
        },
      },
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
