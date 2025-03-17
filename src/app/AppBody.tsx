import "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { Home, Welcome } from "../pages/index.tsx";

import "./AppBody.css";

function AppHeader() {
  return (
    <div className="appBody">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppHeader;
