import "react";
import { List, ListItem, Typography } from "@mui/material";

import churchImg from "../assets/church.webp";
import { Page } from "../components";

export default function Church() {
  const content = (
    <>
      <Typography>
        "마르페"는 히브리어로 "건강, 치유, 회복"을 뜻합니다. 보스턴에 복음과
        사랑으로 건강한 교회를 세우고 싶은 마음을 담아 성도들과 함께 교회 이름을
        지었습니다.
      </Typography>
      <Typography variant="subtitle1">마르페 교회는?</Typography>
      <List>
        <ListItem>
          기독교 위기의 시대가운데 교회의 본질만을 추구하는 하나님의 교회
        </ListItem>
        <ListItem>성도들이 함께 세워가는 하나님 나라의 공동체적 교회</ListItem>
        <ListItem>
          하나님 나라의 가치와 생명을 세상에 흘려보내는 선교적 교회
        </ListItem>
        <ListItem>
          교회의 미래이자 소망인 청년과 아이들을 제자로 양육하는 비전의 교회
        </ListItem>
        <ListItem>
          하나님께서 세우신 가정을 회복하고 치유하는 회복의 교회
        </ListItem>
      </List>
      <Typography>
        교회로서의 본질에 충실하고, 시대를 읽고, 새로운 세대를 주역으로 세우는
        교회, 예배와 말씀, 그리고 선교에 생명을 거는 교회, 가정과 교회학교를
        살리는 교회, 이름만 그리스도인이 아닌 진짜 그리스도의 제자를 만드는
        교회, 우리가 꿈꾸는 교회입니다.
      </Typography>
    </>
  );

  return <Page content={content} imageSrc={churchImg} title="교회 소개" />;
}
