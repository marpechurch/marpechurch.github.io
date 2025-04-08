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
  Pastor,
  Sermons,
  Vision,
  Worship,
} from "../pages/index.tsx";

function AppHeader() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="church" element={<Church />} />
      <Route path="pastor" element={<Pastor />} />
      <Route path="denomination" element={<Denomination />} />
      <Route path="vision" element={<Vision />} />
      <Route path="community" element={<Community />} />
      <Route path="directions" element={<Directions />} />
      <Route path="sermons" element={<Sermons />} />
      <Route path="instagram" element={<Instagram />} />
      <Route path="worship" element={<Worship />} />
      <Route path="offering" element={<Offering />} />
    </Routes>
  );
}

export default AppHeader;
