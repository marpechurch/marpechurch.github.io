import "react";
import { Box, Container } from "@mui/material";

import AppRoutes from "./AppRoutes.tsx";

function AppBody() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        flex: "1 0 auto",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        // TODO: 배경 스타일 추가.
        // backgroundImage: `url(${your_image_import})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/*
         TODO: 배경 비디오 경로 지정.
         <video
           autoPlay
           loop
           muted
           playsInline
           style={{
             position: "absolute",
             width: "100%",
             height: "100%",
             objectFit: "cover",
             zIndex: -1,
           }}
         >
           <source src="/path/to/your/background-video.mp4" type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       */}

      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          py: 2,
          px: { xs: 4, sm: 8, md: 12, lg: 24, xl: 36 },
        }}
      >
        <AppRoutes />
      </Container>
    </Box>
  );
}

export default AppBody;
