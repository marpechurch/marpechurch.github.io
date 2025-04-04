import "react";
import { Link, List, ListItem, Typography } from "@mui/material";

import GoogleMap from "../components/GoogleMap";
import Page from "../components/Page";

export default function Directions() {
  const content = (
    <List>
      <ListItem>⏰ 예배시간: 주일 오후 2:00PM</ListItem>
      <ListItem>📍 예배장소: Igreja Presbiteriana de Boston</ListItem>
      <ListItem sx={{ justifyContent: "center" }}>
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.7414617800787!2d-71.0964414!3d42.39065379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370d339b6db33%3A0xedddf27973fb9585!2sIgreja%20Presbiteriana%20de%20Boston!5e0!3m2!1sen!2sus!4v1743128655998!5m2!1sen!2sus"
          title="Church Location"
        />
      </ListItem>
      <ListItem>🚆 교통: Gilman Square 역에서 도보 5분</ListItem>
      <ListItem sx={{ justifyContent: "center" }}>
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2946.8132762991086!2d-71.09959287382455!3d42.38912408326484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x89e370d2ae34fbe1%3A0x50490ba6a05384d2!2sGilman%20Square%2C%20Somerville%2C%20MA%2002143!3m2!1d42.38793!2d-71.09676999999999!4m5!1s0x89e370d339b6db33%3A0xedddf27973fb9585!2sIgreja%20Presbiteriana%20de%20Boston%2C%20School%20Street%2C%20Somerville%2C%20MA!3m2!1d42.390674!2d-71.09634729999999!5e0!3m2!1sen!2sus!4v1743128778864!5m2!1sen!2sus"
          title="From Gilman Square to Church"
        />
      </ListItem>
      <ListItem>
        <Typography>
          📩 라이드 문의는 마르페 교회{" "}
          <Link
            href="https://www.instagram.com/marpechurch/"
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
