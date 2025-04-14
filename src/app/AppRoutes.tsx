import "react";
import { Routes, Route } from "react-router";

import { urls, urlToComponent } from "../utils/urlMaps";

function AppHeader() {
  return (
    <Routes>
      {urls.map((url) => {
        const Component = urlToComponent(url);
        return <Route key={url} path={url} element={Component} />;
      })}
    </Routes>
  );
}

export default AppHeader;
