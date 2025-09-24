import "react";
import { List, ListItem, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Page } from "../components";

export default function Vision() {
  const { t } = useTranslation();
  
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <List>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>{t("vision.mission.title")}</ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              {t("vision.mission.description")}
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>{t("vision.youth.title")}</ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              {t("vision.youth.description")}
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>
          {t("vision.churchSchool.title")}
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              {t("vision.churchSchool.description")}
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>{t("vision.worship.title")}</ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              {t("vision.worship.description")}
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Paper>
  );

  return <Page content={content} />;
}
