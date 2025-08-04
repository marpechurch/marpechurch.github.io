import "react";
import { Box, Link, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function AppFooter() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.borders.light}`,
        fontSize: 12,
        padding: 1,
        pb: 1
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
