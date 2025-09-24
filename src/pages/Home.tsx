import "react";
import { Box, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import churchImg from "../assets/church.webp";
import { Page } from "../components";
import { SQUARE_IMAGE_STYLE } from "../utils/constants";

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

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 교회 사진 */}
            <Box sx={SQUARE_IMAGE_STYLE}>
              <Box
                component="img"
                src={churchImg}
                alt="보스턴 마르페 교회"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* 교회 소개글 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              <Typography>
                {t("home.intro.paragraph1")}
              </Typography>
              <Typography>
                {t("home.intro.paragraph2")}
              </Typography>
              <Typography>
                {t("home.intro.paragraph3")}
              </Typography>
              <Typography>
                {t("home.intro.paragraph4")}
              </Typography>
              <Typography>
                {t("home.intro.paragraph5")}
              </Typography>
              <Typography>
                {t("home.intro.paragraph6")}
              </Typography>
              <Typography>
                {t("home.intro.paragraph7")}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 마르페 의미 설명 섹션 */}
        <Box sx={{ borderTop: 2, borderColor: "divider", pt: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            {t("home.marpeMeaning.title")}
          </Typography>
          <Typography>
            {t("home.marpeMeaning.description")}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );

  return <Page content={content} />;
}
