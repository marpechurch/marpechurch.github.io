import "react";
import { List, ListItem, Typography, Paper } from "@mui/material";

import { GoogleMaps, Page } from "../components";
import { DIRECTIONS_TO, CHURCH_MAP } from "../utils/constants";

export default function Directions() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <List>
        <ListItem>⏰ 예배시간: 주일 오후 2:00PM</ListItem>
        <ListItem>📍 예배장소: Igreja Presbiteriana de Boston</ListItem>
        <ListItem>
          <GoogleMaps src={CHURCH_MAP} title="Church Location" />
        </ListItem>
        <ListItem>
          <Typography component="span">
            🚘 주차: 주일 교회 주변&nbsp;
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Permit Parking 모두 무료주차
            </Typography>
            입니다. 편하게 주차하시고 오세요.
          </Typography>
        </ListItem>
        <ListItem>🚆 교통: Gilman Square 역에서 도보 5분</ListItem>
        <ListItem>
          <GoogleMaps
            src={DIRECTIONS_TO}
            title="From Gilman Square to Church"
          />
        </ListItem>
      </List>
    </Paper>
  );

  return <Page title="오시는 길" content={content} />;
}
