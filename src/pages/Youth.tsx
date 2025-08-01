import "react";
import { Box, Typography, Paper } from "@mui/material";

import lpdImg from "../assets/lpd.webp";
import { Page } from "../components";

export default function Youth() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          "LPD" - Lovely, Pure, Dependable
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* LPD 이미지 */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "300px", md: "400px" },
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={lpdImg}
              alt="LPD - Lovely, Pure, Dependable"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>

          {/* LPD 설명글 */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>
              "LPD" is a wordplay on the Greek word "elpidi", which means "in
              hope". Its root form is "elpis" which means "hope" and "faith".
            </Typography>
            <Typography>
              "Elpis" - hope, faith; we look forward to the spiritual revival
              within individuals, within Marpe Church, among the city of
              Somerville and Greater Boston Area, and among the multicultural
              population in Massachusetts. Jesus is the only hope and in whom
              the next generation that is surrounded by sin and temptation will
              find a solid foundation.
            </Typography>
            <Typography>
              "Elpidi" - in hope, in excited expectation; our hope isn't past,
              it isn't in the distant future. We seek to live our day-to-day
              lives in hope and in excitement of what God will show us and do
              through us.
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              Service Time: Every Sunday at 2 PM
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );

  return <Page title='"LPD"' content={content} />;
}
