import "react";
import { Routes, Route } from "react-router";

import {
  Church,
  Community,
  Denomination,
  Directions,
  Home,
  Instagram,
  Offering,
  Videos,
  Worship,
} from "../pages/index.tsx";

function AppHeader() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="church" element={<Church />} />
      <Route path="denomination" element={<Denomination />} />
      <Route path="community" element={<Community />} />
      <Route path="directions" element={<Directions />} />
      <Route path="videos" element={<Videos />} />
      <Route path="worship" element={<Worship />} />
      <Route path="instagram" element={<Instagram />} />
      <Route path="offering" element={<Offering />} />
    </Routes>
  );
}

export default AppHeader;
