import "react";

import "./App.css";

import AppBody from "./app/AppBody";
import Footer from "./app/Footer";
import AppHeader from "./app/AppHeader";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppBody />
      <Footer />
    </div>
  );
}

export default App;
