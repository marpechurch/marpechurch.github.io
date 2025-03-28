import "react";

import videosImg from "../assets/videos.webp";

import "./Videos.css";

export default function Videos() {
  return (
    <>
      <img src={videosImg} alt="Videos" />
      <h1>설교 영상</h1>
      <iframe
        src="https://www.youtube.com/embed/videoseries?si=J8eppjocREgMC-JL&amp;list=PL6VO8u2Zpfdf_UzfAjmyCaPLCiDK-XviS"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
