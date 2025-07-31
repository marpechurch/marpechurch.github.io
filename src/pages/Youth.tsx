import "react";
import { Box, Typography, Paper } from "@mui/material";

import { Page } from "../components";

export default function Youth() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Lovely, Pure, Dependable
        </Typography>
        <Typography>
          "LPD" is a wordplay on the Greek word “elpidi”, which means “in hope”.
          Its root form is “elpis” which means “hope” and “faith”.
        </Typography>
        <Typography>
          “Elpis” - hope, faith; we look forward to the spiritual revival within
          individuals, within Marpe Church, among the city of Somerville and
          Greater Boston Area, and among the multicultural population in
          Massachusetts. Jesus is the only hope and in whom the next generation
          that is surrounded by sin and temptation will find a solid foundation.
        </Typography>
        <Typography>
          “Elpidi” - in hope, in excited expectation; our hope isn’t past, it
          isn’t in the distant future. We seek to live our day-to-day lives in
          hope and in excitement of what God will show us and do through us.
        </Typography>
        <Typography>
          Service Time: Every <Box component="span" sx={{ fontWeight: "bold" }}>Sunday at 2 PM</Box>
        </Typography>
      </Box>
    </Paper>
  );

  return <Page title='"LPD"' content={content} />;
}
