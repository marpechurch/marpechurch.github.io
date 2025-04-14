import "react";
import { Link, List, ListItem, Typography } from "@mui/material";

import { GoogleMaps, Page } from "../components";
import {
  DIRECTIONS_TO,
  MARPE_INSTAGRAM,
  CHURCH_MAP,
} from "../utils/constants";

export default function Directions() {
  const content = (
    <List>
      <ListItem>⏰ 예배시간: 주일 오후 2:00PM</ListItem>
      <ListItem>📍 예배장소: Igreja Presbiteriana de Boston</ListItem>
      <ListItem>
        <GoogleMaps src={CHURCH_MAP} title="Church Location" />
      </ListItem>
      <ListItem>🚘 주차: 주일에는 Street Parking이 모두 무료입니다.</ListItem>
      <ListItem>🚆 교통: Gilman Square 역에서 도보 5분</ListItem>
      <ListItem>
        <GoogleMaps src={DIRECTIONS_TO} title="From Gilman Square to Church" />
      </ListItem>
      <ListItem>
        <Typography>
          📩 라이드 문의는 마르페 교회{" "}
          <Link
            href={MARPE_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            인스타그램 DM으로 주세요!
          </Link>
        </Typography>
      </ListItem>
    </List>
  );

  return <Page content={content} title="찾아오시는 길" />;
}
