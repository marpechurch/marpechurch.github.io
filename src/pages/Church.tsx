import "react";
import { Box, Typography } from "@mui/material";

import churchImg from "../assets/church.webp";
import { Page } from "../components";

export default function Church() {
  const content = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography
        sx={{
          fontFamily: "'Cafe24surround', Arial, sans-serif",
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        환영합니다!
      </Typography>
      <Typography>
        마르페 교회는 2024년 10월 6일 바른 복음, 건강한 교회 라는 비전을 가진
        성도들이 함께 모여 개척한 교회입니다. “마르페”라는 단어는 히브리어로
        “건강, 치유, 회복”을 뜻합니다. 보스턴에 예수님의 복음과 사랑으로 건강한
        교회를 세우고 싶은 마음을 담아 성도들과 함께 교회 이름을 지었습니다.
      </Typography>
      <Typography>
        마르페 교회는 기독교 위기의 시대가운데 교회의 본질을 추구하는 하나님이
        주인이신 교회입니다.
      </Typography>
      <Typography>
        성도들과 함께 세워가는 공동체적 교회이자 하나님 나라의 가치와 생명을
        세상에 흘려보내는 선교적 교회입니다.
      </Typography>
      <Typography>
        교회의 미래이자 소망인 청년들과 아이들을 제자로 양육하는 비전을 가진
        비전의 교회입니다.
      </Typography>
      <Typography>
        하나님께서 세우신 가정을 회복하고 치유하는 회복의 교회입니다.
      </Typography>
      <Typography>
        이름만 그리스도인이 아닌 복음으로 세상을 변화시키는 진짜 그리스도의
        제자를 세우고 훈련하는 제자 교회입니다.
      </Typography>
      <Typography>
        이것이 우리 마르페 교회가 함께 꿈꾸고, 함께 만들어 가는 교회입니다.
      </Typography>
    </Box>
  );

  return <Page content={content} imageSrc={churchImg} />;
}
