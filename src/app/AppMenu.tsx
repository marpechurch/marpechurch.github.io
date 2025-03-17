import "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Link } from "react-router";

import "./AppMenu.css";

function AppMenu() {
  return (
    <div className="appMenu">
      <MenuTrigger>
        <Button aria-label="Menu" className="menuButton">
          ☰
        </Button>
        <Popover>
          <Menu className="menu">
            <MenuItem>
              <Link className="link" to="welcome">
                교회 소개
              </Link>
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

export default AppMenu;
