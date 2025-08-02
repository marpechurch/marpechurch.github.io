import "react";
import { Box, Link, List, ListItem } from "@mui/material";

export default function AppFooter() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ccc",
        fontSize: 12,
        padding: 1,
        // Add substantial bottom padding only for mobile devices to prevent footer from being cut off by mobile browser UI
        paddingBottom: { xs: 8, sm: 6, md: 1 }, // Extra padding on mobile, normal padding on desktop
        // Alternative approach using safe-area-inset for iOS devices (mobile only)
        "@supports (padding-bottom: env(safe-area-inset-bottom))": {
          paddingBottom: { xs: "calc(2rem + env(safe-area-inset-bottom))", sm: "calc(1.5rem + env(safe-area-inset-bottom))", md: 1 },
        },
        // Additional mobile-specific adjustments (only for small screens)
        "@media (max-width: 600px)": {
          paddingBottom: "calc(3rem + env(safe-area-inset-bottom))",
        },
      }}
    >
      <List sx={{ padding: 0 }}>
        <ListItem sx={{ padding: 0 }}>
          주소:&nbsp;
          <Link href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5893.482904781368!2d-71.096441!3d42.390654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370d339b6db33%3A0xedddf27973fb9585!2sIgreja%20Presbiteriana%20de%20Boston!5e0!3m2!1sen!2sus!4v1744601459887!5m2!1sen!2sus">
            212 School St, Somerville, MA 02145
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          이메일:&nbsp;
          <Link href="mailto:contact@marpechurch.org" underline="hover">
            contact@marpechurch.org
          </Link>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          ⓒMarpe Church. All Rights Reserved.
        </ListItem>
      </List>
    </Box>
  );
}
