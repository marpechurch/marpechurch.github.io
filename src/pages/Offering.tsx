import "react";

import offeringImg from "../assets/offering.webp";
import zelleImg from "../assets/zelle.png";

import "./Offering.css";

export default function Offering() {
  return (
    <>
      <img src={offeringImg} alt="Offering" />
      <h1>헌금</h1>
      <div className="zelle">
        <img src={zelleImg} alt="Zelle QR code" className="zelleQRCode" />
        <p>Zelle 온라인 헌금 QR 코드: marpechurch@gmail.com</p>
      </div>
    </>
  );
}
