import "react";
import { Routes, Route } from "react-router";

import {
  Church,
  Denomination,
  Directions,
  Home,
  Social,
  Offering,
  Pastor,
  Register,
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
      <Route path="directions" element={<Directions />} />
      <Route path="sermons" element={<Sermons />} />
      <Route path="social" element={<Social />} />
      <Route path="worship" element={<Worship />} />
      <Route path="offering" element={<Offering />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default AppHeader;
