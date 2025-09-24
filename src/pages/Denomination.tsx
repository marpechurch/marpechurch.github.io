import "react";
import { Box, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Page, YouTube } from "../components";
import {
  CMA_IMAGE,
  DENOMINATION_ENGLISH,
  DENOMINATION_KOREAN,
  SQUARE_IMAGE_STYLE,
} from "../utils/constants";

export default function Denomination() {
  const { t, i18n } = useTranslation();

  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* C&MA 교단 이미지 */}
          <Box sx={SQUARE_IMAGE_STYLE}>
            <Box
              component="img"
              src={CMA_IMAGE}
              alt="C&MA 교단"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* 교단 소개글 */}
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
          >
            <Typography>{t("denomination.description")}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );

  // Show only the video in the current language
  const secondaryContent = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <YouTube
        src={
          i18n.language === "ko" ? DENOMINATION_KOREAN : DENOMINATION_ENGLISH
        }
        title={
          i18n.language === "ko"
            ? t("denomination.videoKorean")
            : t("denomination.videoEnglish")
        }
      />
    </Paper>
  );

  return <Page content={content} secondaryContent={secondaryContent} />;
}
