import "react";

import { Instagram, Page } from "../components";
import { MARPE_INSTAGRAM } from "../utils/constants";

export default function Social() {
  const content = <Instagram url={MARPE_INSTAGRAM} />;

  return <Page content={content} title="인스타그램" />;
}
