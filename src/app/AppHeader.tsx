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
        <Popover>
          <Menu>
            <MenuItem onAction={() => alert("open")}>Open</MenuItem>
            <MenuItem onAction={() => alert("rename")}>Rename…</MenuItem>
            <MenuItem onAction={() => alert("duplicate")}>Duplicate</MenuItem>
            <MenuItem onAction={() => alert("share")}>Share…</MenuItem>
            <MenuItem onAction={() => alert("delete")}>Delete…</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
}

export default AppHeader;
