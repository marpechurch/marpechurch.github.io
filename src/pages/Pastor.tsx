import "react";
import { Box, List, ListItem, Typography } from "@mui/material";

import pastorImg from "../assets/pastor.jpg";
import { Page } from "../components";

export default function Pastor() {
  const content = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography>
        조정호 목사는 2010년부터 10년동안 보스턴에서 캠퍼스 선교사로 복음을
        전했습니다. 복음을 모르는 열방의 유학생들을 예수님께 인도하고 지역 교회
        공동체로 연결하는 사역을 했습니다. 2016년, 사역을 하며 고든콘웰 신학교에
        들어가 목회학석사와 선교적 교회로 신학석사를 받았습니다. 이후 지역교회
        청년부를 담당하며 청년들과 젊은 부부들을 제자화 하는 사역을 했습니다.
        미국 복음주의 교단인 C&MA(The Alliance) 교단 소속 목사로 바른 복음으로
        더불어 살아내는 건강한 공동체를 꿈꾸며, 성도들과 함께 마르페 교회를
        개척했습니다. 또한 특수교육을 전공한 김필영 사모와 혜성, 혜나, 유나 세
        아이와 함께 믿음의 가정을 세워가고 있습니다.
      </Typography>
      <Typography variant="h6">약력</Typography>
      <List>
        <ListItem>
          YWAM(Youth With A Mission) Boston 캠퍼스 사역 디렉터
        </ListItem>
        <ListItem>Northeastern University Spiritual Adviser</ListItem>
        <ListItem>보스턴 온누리 교회 부목사</ListItem>
        <ListItem>현) 마르페 교회 담임목사</ListItem>
      </List>
    </Box>
  );

  return <Page content={content} imageSrc={pastorImg} title="목사님 소개" />;
}
