import "react";
import { Box, List, ListItem, Typography, Paper } from "@mui/material";

import kidsImg from "../assets/marpe-kids.webp";
import { Page } from "../components";

export default function Kids() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* 마르페 키즈 이미지 */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "400px", md: "500px" },
              height: { xs: "400px", md: "500px" },
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={kidsImg}
              alt="마르페 키즈"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* 마르페 키즈 소개글 */}
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
          >
            <Typography>
              <List>
                <ListItem sx={{ fontSize: "h6.fontSize" }}>
                  마르페 키즈를 향한 약속의 말씀 ✝️
                </ListItem>
                <ListItem sx={{ pb: 0 }}>로마서12장 2절</ListItem>
                <ListItem sx={{ pb: 0, pt: 0 }}>
                  <List>
                    <ListItem sx={{ fontStyle: "italic" }}>
                      너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로
                      변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이
                      무엇인지 분별하도록 하라.
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem sx={{ fontSize: "h6.fontSize", pb: 0, pt: 0 }}>
                  마르페 키즈의 꿈 👦🏻🧒🏻
                </ListItem>
                <ListItem sx={{ pt: 0 }}>
                  <List>
                    <ListItem>
                      1️⃣ 하나님의 말씀으로 마음을 지키는 어린이
                    </ListItem>
                    <ListItem>2️⃣ 매일 기도하는 어린이</ListItem>
                    <ListItem>
                      3️⃣ 엄마아빠와 함께 하나님을 이야기하는 어린이
                    </ListItem>
                    <ListItem>
                      4️⃣ 자녀와 함께 하나님 말씀을 나누는 부모
                    </ListItem>
                    <ListItem>5️⃣ 자녀를 위해 기도하는 부모</ListItem>
                    <ListItem>
                      6️⃣ 자녀를 위해 신앙교육을 중요시 하는 부모
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>마르페 키즈로 어린이들을 초대합니다 💒</ListItem>
                <ListItem sx={{ fontWeight: 700 }}>예배: 주일 오후 2시</ListItem>
              </List>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );

  return <Page title="마르페 키즈" content={content} />;
}
