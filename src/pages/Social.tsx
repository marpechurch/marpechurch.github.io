import "react";

import { Instagram, Page } from "../components";
import { INSTAGRAM_URL } from "../utils/constants";

export default function Social() {
  const content = <Instagram url={INSTAGRAM_URL} />;

  return <Page content={content} title="인스타그램" />;
}
