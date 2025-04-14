import "react";

import { Page, YouTube } from "../components";
import { WORSHIP_PLAYLIST } from "../utils/constants";

export default function Worship() {
  const content = <YouTube src={WORSHIP_PLAYLIST} title="찬양 리스트" />;

  return <Page content={content} title="찬양 리스트" />;
}
