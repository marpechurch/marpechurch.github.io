import "react";
import { Box } from "@mui/material";

interface GoogleMapProps {
  src: string;
  title: string;
}

export default function GoogleMap({ src, title }: GoogleMapProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        allowFullScreen
        component="iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        sx={{ border: 0, height: 300, width: { md: "80%", xs: "100%" } }}
        title={title}
      />
    </Box>
  );
}
