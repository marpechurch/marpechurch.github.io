import "react";

import "./App.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
