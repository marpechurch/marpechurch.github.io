import "react";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import AnimatedImage from "./AnimatedImage";

interface PageProps {
  content?: React.ReactNode;
  iframeSrc?: string;
  imageLink?: string;
  imageSrc?: string;
  secondaryContent?: React.ReactNode;
  title?: string;
}

export default function Page({
  content,
  iframeSrc,
  imageLink,
  imageSrc,
  secondaryContent,
  title,
}: PageProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const currentPath = `/${pathnames[pathnames.length - 1] ?? ""}`;
  const currentTitle = title || "마르페 교회";

  const isHomePage = currentPath === "/";
  
  // Animation states
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [secondaryVisible, setSecondaryVisible] = useState(false);

  // Trigger animations on route change and initial load
  useEffect(() => {
    // Reset animation states
    setTitleVisible(false);
    setContentVisible(false);
    setSecondaryVisible(false);

    // Stagger the animations with shorter delays for faster feel
    const titleTimer = setTimeout(() => setTitleVisible(true), 200);
    const contentTimer = setTimeout(() => setContentVisible(true), 500);
    const secondaryTimer = setTimeout(() => setSecondaryVisible(true), 800);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(contentTimer);
      clearTimeout(secondaryTimer);
    };
  }, [location.pathname]);

  return (
    <Box>
      <Box
        sx={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease-in-out, transform 0.8s ease-out',
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            paddingBottom: 6,
          }}
        >
          {currentTitle}
        </Typography>
      </Box>
      
      <Box
        sx={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1s ease-in-out, transform 0.8s ease-out',
        }}
      >
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
                <AnimatedImage
                  src={imageSrc}
                  alt={`${currentTitle}`}
                  imageLink={imageLink}
                  sx={{
                    height: isHomePage ? "60vh" : "auto",
                    width: "100%",
                    objectFit: "contain", // Maintain aspect ratio
                  }}
                />
              </Grid2>
            )}
          </Grid2>
        </Box>
      
      {secondaryContent && (
        <Box
          sx={{
            opacity: secondaryVisible ? 1 : 0,
            transform: secondaryVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 1s ease-in-out, transform 0.8s ease-out',
            pt: 2,
          }}
        >
          {secondaryContent}
        </Box>
      )}
    </Box>
  );
}
