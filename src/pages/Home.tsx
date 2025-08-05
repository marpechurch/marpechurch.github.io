import "react";
import { Box, Link, Typography, Paper } from "@mui/material";

import churchImg from "../assets/church.webp";
import { Page } from "../components";
import { SQUARE_IMAGE_STYLE } from "../utils/constants";

export default function Home() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* 교회 소개 섹션 */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Cafe24surround', Arial, sans-serif",
              fontWeight: "bold",
              fontSize: 32,
              mb: 2,
            }}
          >
            보스턴 마르페 교회에 오신 것을 환영합니다!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 교회 사진 */}
            <Box sx={SQUARE_IMAGE_STYLE}>
              <Box
                component="img"
                src={churchImg}
                alt="보스턴 마르페 교회"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* 교회 소개글 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              <Typography>
                보스턴 마르페 교회는 2024년 10월 6일 바른 복음, 건강한 교회 라는
                비전을 가진 성도들이 함께 모여 개척한 보스톤 한인 교회입니다.
                "마르페"라는 단어는 히브리어로 "건강, 치유, 회복"을 뜻합니다.
                보스턴에 예수님의 복음과 사랑으로 건강한 교회를 세우고 싶은
                마음을 담아 성도들과 함께 교회 이름을 지었습니다.
              </Typography>
              <Typography>
                보스턴 마르페 교회는 기독교 위기의 시대가운데 교회의 본질을
                추구하는 하나님이 주인이신 교회입니다.
              </Typography>
              <Typography>
                성도들과 함께 세워가는 공동체적 교회이자 하나님 나라의 가치와
                생명을 세상에 흘려보내는 선교적 교회입니다.
              </Typography>
              <Typography>
                교회의 미래이자 소망인 청년들과 아이들을 제자로 양육하는 비전을
                가진 비전의 교회입니다.
              </Typography>
              <Typography>
                하나님께서 세우신 가정을 회복하고 치유하는 회복의 교회입니다.
              </Typography>
              <Typography>
                이름만 그리스도인이 아닌 복음으로 세상을 변화시키는 진짜
                그리스도의 제자를 세우고 훈련하는 제자 교회입니다.
              </Typography>
              <Typography>
                이것이 우리 보스턴 마르페 교회가 함께 꿈꾸고, 함께 만들어 가는
                교회입니다.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 마르페 의미 설명 섹션 */}
        <Box sx={{ borderTop: 2, borderColor: "divider", pt: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            마르페란?
          </Typography>
          <Typography>
            <Link
              href={"https://www.bible.com/ko/bible/88/PRO.4.22.KRV"}
              rel="noopener noreferrer"
              target="_blank"
            >
              잠언 4:22
            </Link>
            에서 사용한 '건강'의 히브리어는{" "}
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              '마르페'
            </Typography>
            입니다. 묵상을 의미하는 Meditation 과 약을 뜻하는 Medicine 은 같은
            어원의 마르페{" "}
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Marpe(מרפ)
            </Typography>
            에서 출발합니다. 구약에서 건강은 하나님의 선물로 평안한 상태를
            지칭합니다. 영과 육이 모두 건강한 하나님의 공동체가 되길 바랍니다.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );

  return <Page content={content} />;
}
