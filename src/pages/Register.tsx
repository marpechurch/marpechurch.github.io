import "react";
import { Typography, Link } from "@mui/material";

import registerImg from "../assets/register.png";
import { Page } from "../components";
import { REGISTER_URL } from "../utils/constants";

export default function Register() {
  const content = (
    <Typography>
      본 교회에 등록을 원하시는 분들은 이{" "}
      <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
        QR코드로
      </Link>{" "}
      작성해 주시기 바랍니다.
    </Typography>
  );

  return (
    <Page
      content={content}
      imageLink={REGISTER_URL}
      imageSrc={registerImg}
      title="교인 등록"
    />
  );
}
