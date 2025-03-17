import "react";

import church from "../assets/church.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <img src={church} className="church" alt="Church" />
      <h1 className="welcome">마르페 교회로 환영합니다!</h1>
    </div>
  );
}
