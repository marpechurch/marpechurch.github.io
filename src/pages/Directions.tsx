import "react";
import { List, ListItem, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import { GoogleMaps, Page } from "../components";
import { DIRECTIONS_TO, CHURCH_MAP } from "../utils/constants";

export default function Directions() {
  const { t } = useTranslation();
  
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <List>
        <ListItem>
          <Typography component="span">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {t("directions.worshipTimeLabel")}:
            </Typography>
            {` ${t("directions.worshipTimeText")}`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography component="span">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {t("directions.locationLabel")}:
            </Typography>
            {` ${t("directions.locationText")}`}
          </Typography>
        </ListItem>
        <ListItem>
          <GoogleMaps src={CHURCH_MAP} title={t("directions.churchLocation")} />
        </ListItem>
        <ListItem>
          <Typography component="span">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {t("directions.parkingLabel")}:
            </Typography>
            {` ${t("directions.parkingText")}`}
            &nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {t("directions.parkingFree")}
            </Typography>
            {t("directions.parkingNote")}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography component="span">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {t("directions.transportationLabel")}:
            </Typography>
            {` ${t("directions.transportationText")}`}
          </Typography>
        </ListItem>
        <ListItem>
          <GoogleMaps
            src={DIRECTIONS_TO}
            title={t("directions.directionsFrom")}
          />
        </ListItem>
      </List>
    </Paper>
  );

  return <Page content={content} />;
}
