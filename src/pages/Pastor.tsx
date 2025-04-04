import "react";
import { Box, Grid2, Typography } from "@mui/material";

import pastorImg from "../assets/pastor.jpg";

export default function Pastor() {
  return (
    <Box>
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        목사님 소개
      </Typography>
      <Grid2
        container
        direction={{ md: "row", xs: "column-reverse" }}
        spacing={2}
      >
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography>
            조정호 목사는 10년동안 보스턴에서 캠퍼스 선교사로 복음을 전했다.
            고든콘웰 신학교에서 목회학 석사와 선교적 교회로 신학석사를 받았다.
            미국 복음주의 교단인 ECA(Evangelical Church Alliance) 에서 안수를
            받고 지역교회에서 청년들을 제자화 하는 사역을 했다. 하나님 말씀을
            사랑하고 사람들을 만나 대화하는 것을 좋아한다. 보스턴에서 바른
            복음으로 더불어 살아내는 건강한 공동체를 꿈꾸며, 마르페 교회를
            성도들과 함께 개척했다.
          </Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="center" size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src={pastorImg}
            alt="Pastor"
            sx={{
              height: "min-content",
              maxWidth: 300,
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
