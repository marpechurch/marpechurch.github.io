import "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

import marpeLogo from "../assets/marpe-logo.png";

import "./AppHeader.css";

function AppHeader() {
  return (
    <div className="appHeader">
      <img alt="Marpe Logo" className="marpeLogo" src={marpeLogo} />
      <MenuTrigger>
        <Button aria-label="Menu" className="appMenuButton">
          ☰
        </Button>
        <Popover className="appMenu">
          <Menu>
            <MenuItem onAction={() => alert("open")}>교회 소개</MenuItem>
            <MenuItem onAction={() => alert("open")}>예배 안내</MenuItem>
            <MenuItem onAction={() => alert("open")}>설교 영상</MenuItem>
            <MenuItem onAction={() => alert("open")}>섬기는 이들</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
}

export default AppHeader;
