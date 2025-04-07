import { useEffect } from "react";

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

import directionsImg from "../assets/directions.webp";

export default function Instagram() {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Ensure Instagram embeds are processed after the script loads
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className="instagram-page">
      <img src={directionsImg} alt="Instagram" />
      <h1>인스타그램</h1>
      <div className="instagram-embed-wrapper">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/marpechurch/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        >
          <div
            className="instagram-embed-placeholder"
            style={{
              height: "1000px", // Reserve space for the embed
            }}
          >
            <a
              href="https://www.instagram.com/marpechurch/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </blockquote>
      </div>
    </div>
  );
}
