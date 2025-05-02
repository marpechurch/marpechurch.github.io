import "react";
import { Link as RouterLink } from "react-router";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { urls, urlToIcon, urlToTitle } from "../utils/urlMaps";

interface AppMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function AppMenu({ isOpen, toggleMenu }: AppMenuProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  interface ListItemLinkProps {
    icon?: React.ReactElement<unknown>;
    primary: string;
    to: string;
  }

  function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;

    return (
      <ListItem disablePadding>
        <ListItemButton component={RouterLink} to={to}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItemButton>
      </ListItem>
    );
  }

  function DrawerList() {
    return (
      <Box
        sx={{
          width: 200,
          position: { md: "relative" },
          top: { md: 60 },
        }}
        onClick={() => toggleMenu()}
      >
        <List>
          {urls.slice(1).map((url) => (
            <ListItemLink
              icon={urlToIcon(url)}
              key={url}
              primary={urlToTitle(url)}
              to={url}
            />
          ))}
        </List>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleMenu}
      variant={isDesktop ? "permanent" : "temporary"}
    >
      <DrawerList />
    </Drawer>
  );
}
