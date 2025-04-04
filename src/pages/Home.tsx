import "react";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h1" sx={{ wordBreak: "keep-all" }}>
        마르페 교회로 환영합니다!
      </Typography>
    </Box>
  );
}
