import "react";
import { Link, List, ListItem } from "@mui/material";

import registerImg from "../assets/register.png";
import { Page } from "../components";
import { REGISTER_URL } from "../utils/constants";

export default function Register() {
  const content = (
    <List>
      <ListItem>
        본 교회에 등록을 원하시는 분들은 이&nbsp;
        <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
          QR 코드
        </Link>{" "}
        로 작성해 주시기 바랍니다.
      </ListItem>
      <ListItem>
        심방 신청을 원하시는 분들은 교회 이메일(marpechurch@gmail.com)로
        연락주시기 바랍니다.
      </ListItem>
    </List>
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
