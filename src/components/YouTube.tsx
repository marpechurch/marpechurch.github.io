import "react";
import { Box } from "@mui/material";

interface YouTubeProps {
  src: string;
  title: string;
}

export default function YouTube({ src, title }: YouTubeProps) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", p: { md: 2, xs: 1 } }}
    >
      <Box
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        component="iframe"
        referrerPolicy="strict-origin-when-cross-origin"
        src={src}
        sx={{
          border: 0,
          height: { md: 600, xs: 200 },
          width: "100%",
          borderRadius: 1,
        }}
        title={title}
      />
    </Box>
  );
}
