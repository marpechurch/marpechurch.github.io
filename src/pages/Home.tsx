import "react";
import { Box, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Page } from "../components";

export default function Home() {
  const { t } = useTranslation();

  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* 교회 소개 섹션 */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Cafe24surround', Arial, sans-serif",
              fontWeight: "bold",
              fontSize: 32,
              mb: 2,
            }}
          >
            {t("home.title")}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography>{t("home.intro.paragraph1")}</Typography>
            <Typography>{t("home.intro.paragraph2")}</Typography>
            <Typography>{t("home.intro.paragraph3")}</Typography>
            <Typography>{t("home.intro.paragraph4")}</Typography>
            <Typography>{t("home.intro.paragraph5")}</Typography>
            <Typography>{t("home.intro.paragraph6")}</Typography>
            <Typography>{t("home.intro.paragraph7")}</Typography>
          </Box>
        </Box>

        {/* 마르페 의미 설명 섹션 */}
        <Box sx={{ borderTop: 2, borderColor: "divider", pt: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            {t("home.marpeMeaning.title")}
          </Typography>
          <Typography>{t("home.marpeMeaning.description")}</Typography>
        </Box>
      </Box>
    </Paper>
  );

  return <Page content={content} />;
}
