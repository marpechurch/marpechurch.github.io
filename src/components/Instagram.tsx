import { useEffect } from "react";
import { Box } from "@mui/material";

// Extend the Window interface to include the 'instgrm' property
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramProps {
  url: string;
}

export default function Instagram({ url }: InstagramProps) {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js"; // Use full URL
    script.async = true;
    script.onload = () => {
      // Ensure Instagram embeds are processed after the script loads
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 2,
        backgroundColor: "#FFF",
        borderRadius: 2,
        boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "calc(100% - 2px)",
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#c9c8cd",
            textDecoration: "none",
          }}
        >
          View this post on Instagram
        </a>
      </blockquote>
    </Box>
  );
}
