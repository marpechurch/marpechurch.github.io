import "react";
import { Link, List, ListItem, Typography, Paper } from "@mui/material";

import registerImg from "../assets/register.webp";
import { Page } from "../components";
import { REGISTER_FORM } from "../utils/constants";

export default function Register() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <List>
        <ListItem>
          <Typography>
            본 교회에 등록을 원하시는 분들은 이&nbsp;
            <Link href={REGISTER_FORM} target="_blank" rel="noopener noreferrer">
              QR 코드
            </Link>
            로 작성해 주시기 바랍니다.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            심방 신청을 원하시는 분들은 교회 이메일(
            <Link href="mailto:marpechurch@gmail.com" underline="hover">
              marpechurch@gmail.com
            </Link>
            )로 연락주시기 바랍니다.
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );

  return (
    <Page content={content} imageLink={REGISTER_FORM} imageSrc={registerImg} />
  );
}
