import "react";

import { Page, YouTube } from "../components";
import { WORSHIP_URL } from "../utils/constants";

export default function Worship() {
  const content = <YouTube src={WORSHIP_URL} title="찬양 리스트" />;

  return <Page content={content} title="찬양 리스트" />;
}
