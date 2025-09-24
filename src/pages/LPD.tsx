import "react";
import { Box, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import lpdImg from "../assets/lpd.webp";
import { Page } from "../components";
import { RECTANGLE_IMAGE_STYLE } from "../utils/constants";

export default function LPD() {
  const { t } = useTranslation();
  
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          LPD
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontFamily: "Arial, sans-serif",
            fontStyle: "italic",
            fontWeight: "normal",
          }}
        >
          {t("lpd.subtitle")}
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
          <Box sx={RECTANGLE_IMAGE_STYLE}>
            <Box
              component="img"
              src={lpdImg}
              alt="LPD - Lovely, Pure, Dependable"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* LPD 설명글 */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>
              {t("lpd.description1")}
            </Typography>
            <Typography>
              {t("lpd.description2")}
            </Typography>
            <Typography>
              {t("lpd.description3")}
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              {t("lpd.serviceTime")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );

  return <Page content={content} />;
}
