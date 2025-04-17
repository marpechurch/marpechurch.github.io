import "react";
import { List, ListItem, Typography } from "@mui/material";

import kidsImg from "../assets/marpe-kids.webp";
import { Page } from "../components";

export default function Kids() {
  const content = (
    <Typography>
      <List>
        <ListItem sx={{ fontSize: "h6.fontSize" }}>
          마르페 키즈를 향한 약속의 말씀 ✝️
        </ListItem>
        <ListItem sx={{ pb: 0 }}>로마서12장 2절</ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem sx={{ fontStyle: "italic" }}>
              너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아
              하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록
              하라.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>
          마르페 키즈의 꿈 👦🏻🧒🏻
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>1️⃣ 하나님의 말씀으로 마음을 지키는 어린이</ListItem>
            <ListItem>2️⃣ 매일 기도하는 어린이</ListItem>
            <ListItem>3️⃣ 엄마아빠와 함께 하나님을 이야기하는 어린이</ListItem>
            <ListItem>4️⃣ 자녀와 함께 하나님 말씀을 나누는 부모</ListItem>
            <ListItem>5️⃣ 자녀를 위해 기도하는 부모</ListItem>
            <ListItem>6️⃣ 자녀를 위해 신앙교육을 중요시 하는 부모</ListItem>
          </List>
        </ListItem>
        <ListItem>마르페 키즈로 어린이들을 초대합니다 💒</ListItem>
        <ListItem>예배: 주일 오후 2시</ListItem>
      </List>
    </Typography>
  );

  return <Page content={content} imageSrc={kidsImg} />;
}
