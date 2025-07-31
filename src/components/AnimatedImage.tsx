import { useState } from "react";
import { Box, Skeleton, SxProps, Theme } from "@mui/material";

interface AnimatedImageProps {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
  imageLink?: string;
}

export default function AnimatedImage({ src, alt, sx, imageLink }: AnimatedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const ImageComponent = (
    <Box
      component="img"
      src={src}
      alt={alt}
      onLoad={handleImageLoad}
      onError={handleImageError}
      sx={{
        ...sx,
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
      }}
    />
  );

  return (
    <Box sx={{ position: "relative" }}>
      {!imageLoaded && !imageError && (
        <Skeleton
          variant="rectangular"
          sx={{
            ...sx,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      {imageLink ? (
        <Box
          component="a"
          href={imageLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "block" }}
        >
          {ImageComponent}
        </Box>
      ) : (
        ImageComponent
      )}
    </Box>
  );
} 