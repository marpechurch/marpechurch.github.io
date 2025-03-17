import "react";
import { Routes, Route } from "react-router";

import { Home, Welcome } from "../pages/index.tsx";

import "./AppBody.css";

function AppHeader() {
  return (
    <div className="appBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default AppHeader;
