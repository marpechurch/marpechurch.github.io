import "react";
import { Typography, Box, Paper, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import zelleImg from "../assets/zelle.webp";
import tithelyImg from "../assets/tithely.webp";
import { Page } from "../components";
import { ZELLE, TITHELY } from "../utils/constants";

export default function Offering() {
  const theme = useTheme();
  const offeringTypes = [
    { korean: "주정헌금", english: "Sunday" },
    { korean: "감사헌금", english: "Thanksgiving" },
    { korean: "십일조", english: "Tithe" },
    { korean: "선교", english: "Mission" },
    { korean: "기타", english: "Other" },
  ];

  const content = (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 3 } }}
    >
      {/* 헌금 안내 섹션 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ mb: { xs: 1, md: 2 }, fontWeight: "bold" }}
        >
          헌금 안내
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: { xs: 1, md: 2 }, color: "text.secondary" }}
        >
          헌금을 해주실 때 헌금 하시는 성도님들의 이름과, 헌금 종류 또한 아래와
          같이 적어주시면 감사하겠습니다.
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: { xs: 1, md: 2 }, color: "text.secondary" }}
        >
          (예: "Joseph Kim, Mary Park: Sunday")
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            rowGap: 1.5,
            justifyContent: { xs: "flex-start", md: "flex-start" },
          }}
        >
          {offeringTypes.map((type, index) => (
            <Chip
              key={index}
              label={`${type.korean}: ${type.english}`}
              size="small"
              sx={{
                backgroundColor: theme.palette.primary.dark,
                color: "#fff",
                fontWeight: 700,
                boxShadow: 1,
                border: `1px solid ${theme.palette.primary.dark}`,
                mb: { xs: 0.5, md: 0 },
                fontSize: { xs: "0.85em", md: "1em" },
                px: { xs: 1, md: 2 },
                py: { xs: 0.5, md: 0.5 },
                minHeight: 32,
              }}
            />
          ))}
        </Box>
      </Paper>

      {/* 온라인 헌금 섹션 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
                <Typography
          variant="h6"
          sx={{ mb: { xs: 2, md: 3 }, fontWeight: "bold" }}
        >
          온라인 헌금
        </Typography>

        {/* 온라인 헌금 옵션들 - 가로 배치 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            alignItems: 'stretch',
          }}
        >
          {/* Zelle 서브섹션 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 0, fontWeight: "bold" }}
            >
              Zelle
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Marpe Church<br />
              marpechurch&#8203;@gmail.com
            </Typography>
            <Box
              component="a"
              href={ZELLE}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component="img"
                src={zelleImg}
                alt="Zelle QR 코드"
                sx={{
                  width: { xs: 180, sm: 200, md: 220 },
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 2,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>

          {/* Dynamic Divider */}
          <Box
            sx={{
              display: { xs: "block", md: "block" },
              width: { xs: '100%', md: '1px' },
              minWidth: { xs: 0, md: '1px' },
              height: { xs: '1px', md: 'auto' },
              backgroundColor: 'rgba(0,0,0,0.12)',
              borderRadius: 1,
              alignSelf: { xs: 'center', md: 'stretch' },
              my: { xs: 2, md: 0 },
              mx: { xs: 0, md: 2 },
            }}
          />

          {/* Tithe.ly 헌금 서브섹션 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 2,
              pb: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 0, fontWeight: "bold" }}
            >
              Tithe.ly
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Marpe Church<br />
              9 Archer Dr, Woburn, MA, 01801
            </Typography>
            <Box
              component="a"
              href={TITHELY}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component="img"
                src={tithelyImg}
                alt="Tithe.ly QR 코드"
                sx={{
                  width: { xs: 180, sm: 200, md: 220 },
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 2,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* 수표 헌금 섹션 */}
      <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{ mb: { xs: 1, md: 2 }, fontWeight: "bold" }}
        >
          수표 헌금
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>Pay to:</strong> Marpe church
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>Address:</strong> 9 Archer Dr, Woburn, MA, 01801
          </Typography>
        </Box>
      </Paper>
    </Box>
  );

  return <Page title="헌금" content={content} />;
}
