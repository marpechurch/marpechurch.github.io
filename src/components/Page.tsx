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
  iframeSrc?: string;
  imageLink?: string;
  imageSrc?: string;
  secondaryContent?: React.ReactNode;
}

export default function Page({
  content,
  iframeSrc,
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
    <Box>
      <Typography variant="h1" sx={{ paddingBottom: 6 }}>
        {currentTitle}
      </Typography>
      <Grid2
        container
        direction={{ md: "row", xs: content ? "column-reverse" : "row" }}
        spacing={2}
      >
        {content && (
          <Grid2 size={{ xs: 12, md: imageSrc ? 8 : 12 }}>{content}</Grid2>
        )}
        {iframeSrc && (
          <Grid2
            display="flex"
            flexDirection="column"
            justifyContent="start"
            size={{ xs: 12, md: content ? 4 : 12 }}
          >
            <Box
              component="iframe"
              loading="lazy"
              src={iframeSrc}
              sx={{
                height: "60vh",
                width: "100%",
                objectFit: "contain", // Maintain aspect ratio
              }}
            />
          </Grid2>
        )}
        {imageSrc && (
          <Grid2
            display="flex"
            flexDirection="column"
            justifyContent="start"
            size={{ xs: 12, md: content ? 4 : 12 }}
          >
            <ImageWrapper imageLink={imageLink}>
              <Box
                alt={`${currentTitle}`}
                component="img"
                loading="lazy"
                src={imageSrc}
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
      {secondaryContent && <Box sx={{ pt: 2 }}>{secondaryContent}</Box>}
    </Box>
  );
}
