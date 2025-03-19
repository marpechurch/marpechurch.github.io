import "react";

import AppRoutes from "./AppRoutes.tsx";

import "./AppBody.css";

function AppHeader() {
  return (
    <div className="appBody">
      <AppRoutes />
    </div>
  );
}

export default AppHeader;
