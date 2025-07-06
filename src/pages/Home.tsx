import "react";
import { Box, Link, Typography, Paper } from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.webp";
import { Page } from "../components";

export default function Home() {
  const secondaryContent = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box>
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
    </Paper>
  );

  return <Page secondaryContent={secondaryContent} imageSrc={marpeLogo} />;
}
