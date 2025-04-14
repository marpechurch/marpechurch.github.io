import "react";
import { Box } from "@mui/material";

interface YouTubeProps {
  src: string;
  title: string;
}

export default function YouTube({ src, title }: YouTubeProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        component="iframe"
        referrerPolicy="strict-origin-when-cross-origin"
        src={src}
        sx={{
          border: 0,
          height: 400,
          maxWidth: { md: 500 * 16 / 9, xs: "100%" },
          width: "100%",
        }}
        title={title}
      />
    </Box>
  );
}
