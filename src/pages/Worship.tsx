import "react";

import { Page, YouTube } from "../components";
import { WORSHIP_PLAYLIST } from "../utils/constants";

export default function Worship() {
  const content = <YouTube src={WORSHIP_PLAYLIST} title="마르페 주일 찬양 플레이리스트" />;

  return <Page content={content} title="마르페 주일 찬양" />;
}
