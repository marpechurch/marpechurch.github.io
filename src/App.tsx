import "react";

import "./App.css";

import AppBody from "./app/AppBody";
import AppHeader from "./app/AppHeader";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
