import "react";
import { Routes, Route } from "react-router";

import {
  Church,
  Community,
  Home,
  Offering,
  Service,
  Videos,
  Worship,
} from "../pages/index.tsx";

function AppHeader() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="church" element={<Church />} />
      <Route path="community" element={<Community />} />
      <Route path="service" element={<Service />} />
      <Route path="videos" element={<Videos />} />
      <Route path="worship" element={<Worship />} />
      <Route path="offering" element={<Offering />} />
    </Routes>
  );
}

export default AppHeader;
