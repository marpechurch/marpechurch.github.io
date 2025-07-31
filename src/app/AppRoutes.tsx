import "react";
import { Routes, Route } from "react-router";

import {
  Church,
  Denomination,
  Directions,
  Home,
  Kids,
  Offering,
  Staff,
  Program,
  Register,
  Sermons,
  Social,
  Vision,
  Worship,
  Youth,
} from "../pages/index.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/church" element={<Church />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/denomination" element={<Denomination />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/youth" element={<Youth />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/directions" element={<Directions />} />
      <Route path="/program" element={<Program />} />
      <Route path="/sermons" element={<Sermons />} />
      <Route path="/social" element={<Social />} />
      <Route path="/worship" element={<Worship />} />
      <Route path="/offering" element={<Offering />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
