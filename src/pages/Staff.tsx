import "react";
import { Box, List, ListItem, Typography, Paper } from "@mui/material";

import mainPastorImg from "../assets/main-pastor.webp";
import emPastorImg from "../assets/em-pastor.webp";
import { Page } from "../components";
import { RECTANGLE_IMAGE_STYLE } from "../utils/constants";

export default function Staff() {
  const content = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* 목사님 소개 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            조정호 담임목사 (Jeong Ho Cho, Lead Pastor)
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 목사님 사진 */}
            <Box sx={RECTANGLE_IMAGE_STYLE}>
              <Box
                component="img"
                src={mainPastorImg}
                alt="조정호 담임목사 (Jeong Ho Cho, Lead Pastor)"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* 목사님 소개글 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              <Typography>
                조정호 담임 목사님은 2010년부터 10년동안 보스턴에서 캠퍼스
                선교사로 복음을 전했습니다. 복음을 모르는 열방의 유학생들을
                예수님께 인도하고 지역 교회 공동체로 연결하는 사역을 했습니다.
                2016년, 사역을 하며 고든콘웰 신학교에 들어가 목회학석사와 선교적
                교회로 신학석사를 받았습니다. 이후 지역교회 청년부를 담당하며
                청년들과 젊은 부부들을 제자화 하는 사역을 했습니다. 미국
                복음주의 교단인 C&MA(The Alliance) 교단 소속 목사로 바른
                복음으로 더불어 살아내는 건강한 공동체를 꿈꾸며, 성도들과 함께
                마르페 교회를 개척했습니다. 또한 특수교육을 전공한 김필영 사모와
                혜성, 혜나, 유나 세 아이와 함께 믿음의 가정을 세워가고 있습니다.
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                약력
              </Typography>
              <List sx={{ pt: 0 }}>
                <ListItem>현) 마르페 교회 담임목사</ListItem>
                <ListItem>보스턴 온누리 교회 부목사</ListItem>
                <ListItem>Northeastern University Spiritual Adviser</ListItem>
                <ListItem>
                  YWAM(Youth With A Mission) Boston 캠퍼스 사역 디렉터
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* 전도사님 소개 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            정병천 전도사 (Roy Jeong, EM Pastor)
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* 전도사님 사진 */}
            <Box sx={RECTANGLE_IMAGE_STYLE}>
              <Box
                component="img"
                src={emPastorImg}
                alt="정병천 전도사 (Roy Jeong, EM Pastor)"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* 전도사님 소개글 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              {/* TODO: 전도사님 소개글 업뎃하기 */}
              <Typography>
                Hello! My name is Roy Jeong, and I serve as the English Ministry pastor at
                Marpe Church. Our English Ministry is called “LPD” which stands for
                the things we as a body of Christ seek to be - lovely, pure, and
                dependable for one another. I’d love to get to know you, worship
                with you, and talk about how God is so great and so good to us!
              </Typography>
              <Typography>
                A little bit about myself - I am currently attending
                Gordon-Conwell Theological Seminary in South Hamilton (not too
                far from Crane Beach and Rockport!). I’m married to my lovely
                wife Sarah, and we just had a baby girl, Lily, in May 2025. In
                our down time, we like to go on walks with our golden retriever
                Somi.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  return <Page content={content} />;
}
