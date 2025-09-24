import "react";
import { Box, List, ListItem, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import mainPastorImg from "../assets/main-pastor.webp";
import emPastorImg from "../assets/em-pastor.webp";
import { Page } from "../components";
import { RECTANGLE_IMAGE_STYLE } from "../utils/constants";

export default function Staff() {
  const { t } = useTranslation();
  
  const content = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* 목사님 소개 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
{t("staff.leadPastor.name")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 목사님 사진 */}
            <Box sx={RECTANGLE_IMAGE_STYLE}>
              <Box
                component="img"
                src={mainPastorImg}
                alt="조정호 담임목사 (Jeong Ho Cho, Lead Pastor)"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* 목사님 소개글 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              <Typography>
                {t("staff.leadPastor.bio")}
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {t("staff.leadPastor.experience")}
              </Typography>
              <List sx={{ pt: 0 }}>
                {(t("staff.leadPastor.experienceList", { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* 전도사님 소개 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
{t("staff.emPastor.name")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 전도사님 사진 */}
            <Box sx={RECTANGLE_IMAGE_STYLE}>
              <Box
                component="img"
                src={emPastorImg}
                alt="정병천 전도사 (Roy Jeong, EM Pastor)"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* 전도사님 소개글 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              <Typography>
                {t("staff.emPastor.bio")}
              </Typography>
              <Typography>
                {t("staff.emPastor.bio2")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  return <Page content={content} />;
}
