import "react";
import { Box } from "@mui/material";

interface GoogleMapProps {
  src: string;
  title: string;
}

export default function GoogleMap({ src, title }: GoogleMapProps) {
  return (
    <Box
      component="iframe"
      src={src}
      sx={{ border: 0, height: 300, width: { md: "80%", xs: "100%" } }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  );
}
