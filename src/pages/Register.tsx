import "react";
import { Box, Link, List, ListItem, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import registerImg from "../assets/register.webp";
import { Page } from "../components";
import { REGISTER_FORM } from "../utils/constants";

export default function Register() {
  const { t } = useTranslation();
  
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* 등록 안내글 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <List>
            <ListItem>
              <Typography>
                {t("register.description1")}&nbsp;
                <Link
                  href={REGISTER_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("register.qrCode")}
                </Link>
                {t("register.description2")}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                {t("register.description3")}
                <Link href="mailto:contact@marpechurch.org" underline="hover">
                  {t("register.email")}
                </Link>
                {t("register.description4")}
              </Typography>
            </ListItem>
          </List>
        </Box>

        {/* 등록 QR 코드 이미지 */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="a"
            href={REGISTER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={registerImg}
              alt="교인 등록 QR 코드"
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
                color: "text.secondary",
                fontSize: "0.875rem",
              }}
            >
              {t("register.clickMe")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );

  return <Page content={content} />;
}
