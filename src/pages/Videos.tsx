import "react";

import "./Videos.css";

export default function Videos() {
  return (
    <>
      <img
        src="https://files.oaiusercontent.com/file-HkvUdqvpiGt6D6J4dgw3Vc?se=2025-03-25T01%3A25%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df35c6ae0-fefd-4bbe-b81b-9d8ecbdfd7a0.webp&sig=S%2BAYLVMEFAZmlU3UEzdx7HRXIc%2Bo/t7FOZau7iOq5/U%3D"
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
