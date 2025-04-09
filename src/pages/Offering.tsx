import "react";
import { Link, Typography } from "@mui/material";

import zelleImg from "../assets/zelle.png";
import { Page } from "../components";
import { ZELLE_URL } from "../utils/constants";

export default function Offering() {
  const content = (
    <Typography>
      Zelle 온라인 헌금{" "}
      <Link href={ZELLE_URL} target="_blank" rel="noopener noreferrer">
        QR 코드
      </Link>{" "}
      : marpechurch@gmail.com
    </Typography>
  );

  return (
    <Page
      content={content}
      imageLink={ZELLE_URL}
      imageSrc={zelleImg}
      title="헌금"
    />
  );
}
