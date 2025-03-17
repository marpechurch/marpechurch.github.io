import "react";
import { Link } from "react-router";

import marpeLogo from "../assets/marpe-logo.png";

import "./AppHeader.css";
import AppMenu from "./AppMenu";

function AppHeader() {
  return (
    <div className="appHeader">
      <Link to="/">
        <div className="link">
          <img alt="Marpe Logo" className="logo" src={marpeLogo} />
          <span className="">마르페(Marpe)</span>
        </div>
      </Link>
      <AppMenu />
    </div>
  );
}

export default AppHeader;
