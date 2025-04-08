import "react";
import { Typography } from "@mui/material";

import registerImg from "../assets/register.png";
import Page from "../components/Page";

export default function Register() {
  const content = (
    <Typography>
      본 교회에 등록을 원하시는 분들은 이 QR코드로 작성해 주시기 바랍니다.
    </Typography>
  );

  return <Page content={content} image={registerImg} title="교인 등록" />;
}
