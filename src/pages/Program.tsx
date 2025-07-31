import "react";

import { Page } from "../components";

export default function Program() {
  // 금주의 주보 파일 ID
  const fileId = "1cXYdY4wTHd1lsvV6TFYrmbch2AwAE67m";

  const iframeUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return <Page title="주보" iframeSrc={iframeUrl} />;
}