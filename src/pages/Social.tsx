import "react";

import Instagram from "../components/Instagram";
import Page from "../components/Page";

const MARPE_INSTAGRAM_URL =
  "https://www.instagram.com/marpechurch/?utm_source=ig_embed&utm_campaign=loading";

export default function Social() {
  const content = <Instagram url={MARPE_INSTAGRAM_URL} />;

  return <Page content={content} title="인스타그램" />;
}
