import "react";
import { Typography } from "@mui/material";

import zelleImg from "../assets/zelle.png";
import Page from "../components/Page";

export default function Offering() {
  const content = (
    <Typography>Zelle 온라인 헌금 QR 코드: marpechurch@gmail.com</Typography>
  );

  return <Page content={content} image={zelleImg} title="헌금" />;
}
