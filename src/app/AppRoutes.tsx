import "react";
import { Routes, Route } from "react-router";

import { Home, Introduction, Service, Videos } from "../pages/index.tsx";

function AppHeader() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="introduction" element={<Introduction />} />
      <Route path="service" element={<Service />} />
      <Route path="videos" element={<Videos />} />
    </Routes>
  );
}

export default AppHeader;
