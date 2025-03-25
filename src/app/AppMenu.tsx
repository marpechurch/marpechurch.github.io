import { useState } from "react";
import {
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router";

import "./AppMenu.css";

export default function AppMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="appMenu">
      <Button onClick={toggleDrawer(true)}>☰</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      {
        <ul className="menu">
          <li>
            <Link className="link" to="church">
              교회 소개
            </Link>
          </li>
          <li>
            <Link className="link" to="community">
              공동체 소개
            </Link>
          </li>
          <li>
            <Link className="link" to="service">
              예배 안내
            </Link>
          </li>
          <li>
            <Link className="link" to="videos">
              설교 영상
            </Link>
          </li>
          <li>
            <Link className="link" to="offering">
              헌금 안내
            </Link>
          </li>
        </ul>
      }
      {/* <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* <MenuTrigger> */}
      {/* <Button aria-label="Menu" className="menuButton">
          ☰
        </Button> */}
      {/* <Popover>
          <Menu className="menu">
            <MenuItem>
              <Link className="link" to="church">
                교회 소개
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="community">
                공동체 소개
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="service">
                예배 안내
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="videos">
                설교 영상
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="offering">
                헌금 안내
              </Link>
            </MenuItem>
          </Menu>
        </Popover> */}
      {/* </MenuTrigger> */}
    </div>
  );
}
