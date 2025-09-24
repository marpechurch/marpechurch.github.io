import "react";
import { Box } from "@mui/material";

interface YouTubeProps {
  src: string;
  title: string;
}

export default function YouTube({ src, title }: YouTubeProps) {
  return (
    <Box
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        p: { md: 2, xs: 1 },
        width: "100%"
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingBottom: "56.25%", // 16:9 aspect ratio (9/16 = 0.5625)
          maxWidth: "100%",
        }}
      >
        <Box
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          component="iframe"
          referrerPolicy="strict-origin-when-cross-origin"
          src={src}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: 1,
          }}
          title={title}
        />
      </Box>
    </Box>
  );
}
