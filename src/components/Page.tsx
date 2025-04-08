import "react";
import { Box, Grid2, Typography, Link } from "@mui/material";

interface ImageProps {
  children: React.ReactNode;
  imageLink?: string;
}
function ImageWrapper({ children, imageLink }: ImageProps) {
  return imageLink ? (
    <Box
      component={Link} // Use Material-UI's Link component
      href={imageLink} // Replace with your desired URL
      target="_blank" // Open the link in a new tab
      rel="noopener noreferrer" // Ensure security for external links
      sx={{ display: "block" }} // Ensure the link wraps the image properly
    >
      {children}
    </Box>
  ) : (
    children
  );
}

interface PageProps {
  content?: React.ReactNode;
  imageLink?: string;
  imageSrc?: string;
  title: string;
}

export default function Page({
  content,
  imageLink,
  imageSrc,
  title,
}: PageProps) {
  return (
    <Box>
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        {title}
      </Typography>
      <Grid2
        container
        direction={{ md: "row", xs: content ? "column-reverse" : "row" }}
        spacing={2}
      >
        {content && (
          <Grid2 size={{ xs: 12, md: imageSrc ? 8 : 12 }}>{content}</Grid2>
        )}
        {imageSrc && (
          <Grid2
            display="flex"
            justifyContent="center"
            size={{ xs: 12, md: content ? 4 : 12 }}
          >
            <ImageWrapper imageLink={imageLink}>
              <Box
                component="img"
                src={imageSrc}
                alt={`${title}`}
                sx={{
                  maxHeight: "60vh",
                  width: "100%",
                  objectFit: "contain", // Maintain aspect ratio
                }}
              />
            </ImageWrapper>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}
