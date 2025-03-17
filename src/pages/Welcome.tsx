import "react";

import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <img
        src="https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="welcomeImg"
        alt="Welcome"
      />
      <h1 className="welcomeText">Welcome</h1>
    </div>
  );
}
