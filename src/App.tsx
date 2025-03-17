import "react";

import "./App.css";

import AppBody from "./app/AppBody";
import AppFooter from "./app/AppFooter";
import AppHeader from "./app/AppHeader";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
