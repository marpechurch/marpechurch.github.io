import "react";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import AnimatedImage from "./AnimatedImage";

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

  // Alt text mapping for images based on route
  const altTextMap = {
    "/": "마르페 교회",
    "/staff": "섬기는 이들",
    "/denomination": "소속 교단",
    "/vision": "비전",
    "/lpd": "LPD",
    "/directions": "오시는 길",
    "/program": "주보",
    "/sermons": "설교 말씀",
    "/social": "인스타그램",
    "/worship": "찬양",
    "/offering": "헌금",
    "/register": "교인 등록",
  };

  const currentAltText =
    altTextMap[currentPath as keyof typeof altTextMap] || "마르페 교회";
  const isHomePage = currentPath === "/";

  // Animation states
  const [contentVisible, setContentVisible] = useState(false);
  const [secondaryVisible, setSecondaryVisible] = useState(false);

  // Trigger animations on route change and initial load
  useEffect(() => {
    // Reset animation states
    setContentVisible(false);
    setSecondaryVisible(false);

    // Stagger the animations with shorter delays for faster feel
    const contentTimer = setTimeout(() => setContentVisible(true), 200);
    const secondaryTimer = setTimeout(() => setSecondaryVisible(true), 500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(secondaryTimer);
    };
  }, [location.pathname]);

  return (
    <Box>
      <Box
        sx={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1s ease-in-out, transform 0.8s ease-out",
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
                  height: { 
                    xs: "50vh", 
                    sm: "60vh", 
                    md: "70vh", 
                    lg: "75vh" 
                  },
                  width: "100%",
                  border: 0,
                  borderRadius: 1,
                  minHeight: "400px",
                  maxHeight: "90vh",
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
                alt={`${currentAltText}`}
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
            transform: secondaryVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 1s ease-in-out, transform 0.8s ease-out",
            pt: 2,
          }}
        >
          {secondaryContent}
        </Box>
      )}
    </Box>
  );
}
