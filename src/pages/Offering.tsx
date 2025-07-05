import "react";
import { Link, Typography, Box, Paper, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import zelleImg from "../assets/zelle.webp";
import { Page } from "../components";
import { ZELLE } from "../utils/constants";

export default function Offering() {
  const theme = useTheme();
  const offeringTypes = [
    { korean: "주정헌금", english: "Sunday" },
    { korean: "감사헌금", english: "Thanksgiving" },
    { korean: "십일조", english: "Tithe" },
    { korean: "기부", english: "Donation" },
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
          variant="body2"
          sx={{ mb: { xs: 1, md: 2 }, color: "text.secondary" }}
        >
          헌금을 해주실 때 헌금 하시는 성도님들의 이름과, 헌금 종류 또한 아래와
          같이 적어주시면 감사하겠습니다.
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: { xs: 1, md: 2 }, color: "text.secondary" }}
        >
          (예: "John, Mary: Sunday")
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
          sx={{ mb: { xs: 1, md: 2 }, fontWeight: "bold" }}
        >
          온라인 헌금
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Link
            href={ZELLE}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: "bold",
              textUnderlineOffset: "2px",
              fontSize: { xs: "1em", md: "1.1em" },
              mb: { xs: 0.5, sm: 0 },
            }}
          >
            Zelle QR 코드
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            (marpechurch&#8203;@gmail.com)
          </Typography>
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
          <Typography variant="body1">
            <strong>Pay to:</strong> Marpe church
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> 9 Archer Dr. Woburn, MA 01801
          </Typography>
        </Box>
      </Paper>
    </Box>
  );

  return <Page content={content} imageLink={ZELLE} imageSrc={zelleImg} />;
}
