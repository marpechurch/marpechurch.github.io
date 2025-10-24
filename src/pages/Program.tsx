import "react";

import { Page } from "../components";

export default function Program() {
  // 금주의 주보 파일 ID
  const fileId = "16Jcscu7jUUtSX68Syda58clAb2Ravy9m";

  const iframeUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return <Page iframeSrc={iframeUrl} />;
}