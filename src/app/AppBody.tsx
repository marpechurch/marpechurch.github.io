import "react";
import { Routes, Route } from "react-router";

import { Home, Introduction, Service } from "../pages/index.tsx";

import "./AppBody.css";

function AppHeader() {
  return (
    <div className="appBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default AppHeader;
