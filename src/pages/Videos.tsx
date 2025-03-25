import "react";

import "./Videos.css";

export default function Videos() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Videos"
      />
      <h1>예배 영상</h1>
      <iframe
        src="https://www.youtube.com/embed/y0pBkGR5mqI?si=NvYTGDY5-_Y0Um61"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
