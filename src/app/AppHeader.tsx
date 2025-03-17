import "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Link } from "react-router";

import marpeLogo from "../assets/marpe-logo.png";

import "./AppHeader.css";

function AppHeader() {
  return (
    <div className="appHeader">
      <Link to="/">
        <div className="appHeaderLink">
          <img alt="Marpe Logo" className="marpeLogo" src={marpeLogo} />
          <span className="">마르페(Marpe)</span>
        </div>
      </Link>
      <MenuTrigger>
        <Button aria-label="Menu" className="appMenuButton">
          ☰
        </Button>
        <Popover className="appMenu">
          <Menu>
            <MenuItem>
              <Link className="link" to="welcome">교회 소개</Link>
            </MenuItem>
            <MenuItem>예배 안내</MenuItem>
            <MenuItem>설교 영상</MenuItem>
            <MenuItem>섬기는 이들</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
}

export default AppHeader;
