import "react";

import Page from "../components/Page";
import YouTube from "../components/YouTube";

import "./Worship.css";

export default function Worship() {
  const content = (
    <YouTube
      src="https://www.youtube.com/embed/videoseries?si=jcbM7u0rPSMCORTw&amp;list=PL6VO8u2Zpfdfs9VLqEHkNvq0ICxdXN3j7"
      title="찬양 리스트"
    />
  );

  return <Page content={content} title="찬양 리스트" />;
}
