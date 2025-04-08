import "react";

import { Page, YouTube } from "../components";
import { SERMONS_URL } from "../utils/constants";

export default function Sermons() {
  const content = <YouTube src={SERMONS_URL} title="설교 영상" />;

  return <Page content={content} title="설교 영상" />;
}
