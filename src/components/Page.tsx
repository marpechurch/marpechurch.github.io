import "react";
import { useLocation } from "react-router";
import { Box, Grid2, Typography, Link } from "@mui/material";

import { urlToTitle } from "../utils/urlMaps";

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
  secondaryContent?: React.ReactNode;
}

export default function Page({
  content,
  imageLink,
  imageSrc,
  secondaryContent,
}: PageProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const currentPath = `/${pathnames[pathnames.length - 1] ?? ""}`;
  const currentTitle = urlToTitle(currentPath);

  const isHomePage = currentPath === "/";

  return (
    <Box sx={{ pl: { md: 3, xs: 0 }, pr: { md: 3, xs: 0 } }}>
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        {currentTitle}
      </Typography>
      <Grid2
        container
        direction={{ md: "row", xs: content ? "column-reverse" : "row" }}
        spacing={2}
      >
        {content && (
          <Grid2 size={{ xs: 12, md: imageSrc ? 9 : 12 }}>{content}</Grid2>
        )}
        {imageSrc && (
          <Grid2
            display="flex"
            flexDirection="column"
            justifyContent="start"
            size={{ xs: 12, md: content ? 3 : 12 }}
          >
            <ImageWrapper imageLink={imageLink}>
              <Box
                component="img"
                src={imageSrc}
                alt={`${currentTitle}`}
                sx={{
                  height: isHomePage ? "60vh" : "auto",
                  width: "100%",
                  objectFit: "contain", // Maintain aspect ratio
                }}
              />
            </ImageWrapper>
          </Grid2>
        )}
      </Grid2>
      {secondaryContent}
    </Box>
  );
}
