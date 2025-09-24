import "react";
import { Typography, Box, Paper, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import zelleImg from "../assets/zelle.webp";
import tithelyImg from "../assets/tithely.webp";
import { Page } from "../components";
import { ZELLE, TITHELY } from "../utils/constants";

export default function Offering() {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const offeringTypes = [
    { korean: "주정헌금", english: "Sunday" },
    { korean: "감사헌금", english: "Thanksgiving" },
    { korean: "십일조", english: "Tithe" },
    { korean: "선교", english: "Mission" },
    { korean: "기타", english: "Other" },
  ];

  const content = (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 3 } }}
    >
      {/* 헌금 안내 섹션 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ mb: { xs: 1, md: 2 }, fontWeight: "bold" }}
        >
          {t("offering.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: { xs: 1, md: 2 } }}
        >
          {t("offering.description")}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: { xs: 1, md: 2 } }}
        >
          {t("offering.example")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            rowGap: 1.5,
            justifyContent: { xs: "flex-start", md: "flex-start" },
          }}
        >
          {offeringTypes.map((type, index) => (
            <Chip
              key={index}
              label={`${type.korean}: ${type.english}`}
              size="small"
              sx={{
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.backgrounds.white,
                fontWeight: 700,
                boxShadow: 1,
                border: `1px solid ${theme.palette.primary.dark}`,
                mb: { xs: 0.5, md: 0 },
                fontSize: { xs: "0.85em", md: "1em" },
                px: { xs: 1, md: 2 },
                py: { xs: 0.5, md: 0.5 },
                minHeight: 32,
              }}
            />
          ))}
        </Box>
      </Paper>

      {/* 온라인 헌금 섹션 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ mb: { xs: 2, md: 3 }, fontWeight: "bold" }}
        >
          {t("offering.onlineTitle")}
        </Typography>

        {/* 온라인 헌금 옵션들 - 가로 배치 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Zelle 서브섹션 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 0, fontWeight: "bold" }}>
              {t("offering.zelle")}
            </Typography>
            <Typography variant="body2">
              Marpe Church
              <br />
              {t("offering.zelleEmail")}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="a"
                href={ZELLE}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={zelleImg}
                  alt="Zelle QR 코드"
                  sx={{
                    borderRadius: 2,
                    boxShadow: 2,
                    cursor: "pointer",
                    height: "auto",
                    width: { xs: 180, sm: 200, md: 220 },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",

                    fontSize: "0.875rem",
                  }}
                >
                  {t("offering.clickMe")}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Dynamic Divider */}
          <Box
            sx={{
              display: { xs: "block", md: "block" },
              width: { xs: "100%", md: "1px" },
              minWidth: { xs: 0, md: "1px" },
              height: { xs: "1px", md: "auto" },
              backgroundColor: theme.palette.borders.divider,
              borderRadius: 1,
              alignSelf: { xs: "center", md: "stretch" },
              my: { xs: 2, md: 0 },
              mx: { xs: 0, md: 2 },
            }}
          />

          {/* Tithe.ly 헌금 서브섹션 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 2,
              pb: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 0, fontWeight: "bold" }}>
              {t("offering.tithely")}
            </Typography>
            <Typography variant="body2">
              Marpe Church
              <br />{t("offering.tithelyAddress")}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="a"
                href={TITHELY}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={tithelyImg}
                  alt="Tithe.ly QR 코드"
                  sx={{
                    borderRadius: 2,
                    boxShadow: 2,
                    cursor: "pointer",
                    height: "auto",
                    width: { xs: 180, sm: 200, md: 220 },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",

                    fontSize: "0.875rem",
                  }}
                >
                  {t("offering.clickMe")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* 수표 헌금 섹션 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ mb: { xs: 1, md: 2 }, fontWeight: "bold" }}
        >
          {t("offering.checkTitle")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">
            <strong>{t("offering.payTo")}</strong> Marpe church
          </Typography>
          <Typography variant="body2">
            <strong>{t("offering.address")}</strong> {t("offering.tithelyAddress")}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );

  return <Page content={content} />;
}
