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

import "./Directions.css";

export default function Directions() {
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
    <>
      <img src={directionsImg} alt="Directions" />
      <h1>찾아오시는 길</h1>
      <ul>
        <li>⏰ 예배시간: 주일 오후 2:00PM</li>
        <li>📍 예배장소: Igreja Presbiteriana de Boston</li>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.7414617800787!2d-71.0964414!3d42.39065379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370d339b6db33%3A0xedddf27973fb9585!2sIgreja%20Presbiteriana%20de%20Boston!5e0!3m2!1sen!2sus!4v1743128655998!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Church Location"
        ></iframe>
        <li>🚆 교통: Gilman Square 역에서 도보 5분</li>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2946.8132762991086!2d-71.09959287382455!3d42.38912408326484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x89e370d2ae34fbe1%3A0x50490ba6a05384d2!2sGilman%20Square%2C%20Somerville%2C%20MA%2002143!3m2!1d42.38793!2d-71.09676999999999!4m5!1s0x89e370d339b6db33%3A0xedddf27973fb9585!2sIgreja%20Presbiteriana%20de%20Boston%2C%20School%20Street%2C%20Somerville%2C%20MA!3m2!1d42.390674!2d-71.09634729999999!5e0!3m2!1sen!2sus!4v1743128778864!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Directions to Church"
        ></iframe>
        <li>📩 라이드 문의는 마르페 교회 인스타 DM으로 주세요!</li>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/marpechurch/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        >
          <div
            className="instagram-embed-placeholder"
            style={{
              height: "600px", // Reserve space for the embed
            }}
          >
            <a
              href="https://www.instagram.com/marpechurch/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </blockquote>
      </ul>
    </>
  );
}
