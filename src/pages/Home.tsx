import "react";

import marpeLogo from "../assets/marpe-logo-color.png";
import { Page } from "../components";

export default function Home() {
  return <Page imageSrc={marpeLogo} title="마르페 교회로 환영합니다!" />;
}
