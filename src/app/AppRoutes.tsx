import "react";
import { Routes, Route } from "react-router";

import { Church, Community, Home, Service, Videos } from "../pages/index.tsx";

function AppHeader() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="church" element={<Church />} />
      <Route path="community" element={<Community />} />
      <Route path="service" element={<Service />} />
      <Route path="videos" element={<Videos />} />
    </Routes>
  );
}

export default AppHeader;
