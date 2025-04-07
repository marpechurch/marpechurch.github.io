import "react";
import { Box, Grid2, Typography } from "@mui/material";

interface PageProps {
  content: React.ReactNode;
  image?: string;
  title: string;
}

export default function Page({ content, image, title }: PageProps) {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ paddingBottom: 2, textAlign: { xs: "center", md: "left" } }}
      >
        {title}
      </Typography>
      <Grid2
        container
        direction={{ md: "row", xs: "column-reverse" }}
        spacing={2}
      >
        <Grid2 size={{ xs: 12, md: image ? 8 : 12 }}>{content}</Grid2>
        {image && (
          <Grid2
            display="flex"
            justifyContent="center"
            size={{ xs: 12, md: 4 }}
          >
            <Box
              component="img"
              src={image}
              alt={`${title}`}
              sx={{
                height: "auto", // Automatically adjust height to maintain aspect ratio
                maxWidth: "100%", // Ensure the image does not exceed the container width
                objectFit: "contain", // Maintain aspect ratio
              }}
            />
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}
