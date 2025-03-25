import "react";

import marpeLogo from "../assets/marpe-logo.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <img src={marpeLogo} alt="Church" /> 
      <h1 className="welcome">마르페 교회로 환영합니다!</h1>
    </div>
  );
}
