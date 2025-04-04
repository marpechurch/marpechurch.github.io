import "react";

import Page from "../components/Page";
import YouTube from "../components/YouTube";

export default function Videos() {
  const content = (
    <YouTube
      src="https://www.youtube.com/embed/videoseries?si=J8eppjocREgMC-JL&amp;list=PL6VO8u2Zpfdf_UzfAjmyCaPLCiDK-XviS"
      title="설교 영상"
    />
  );

  return <Page content={content} title="설교 영상" />;
}
