import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

// Main menu structure with nested submenus (same as AppMenu)
const getMenuStructure = (t: (key: string) => string) => [
  {
    title: t("navigation.introduction"),
    submenu: [
      { url: "/staff", title: t("navigation.staff") },
      { url: "/denomination", title: t("navigation.denomination") },
      { url: "/vision", title: t("navigation.vision") },
      { url: "/directions", title: t("navigation.directions") },
    ],
  },
  {
    title: t("navigation.service"),
    submenu: [
      { url: "/sermons", title: t("navigation.sermons") },
      { url: "/program", title: t("navigation.worshipBulletin") },
      { url: "/offering", title: t("navigation.offering") },
      { url: "/worship", title: t("navigation.sundayPlaylist") },
    ],
  },
  {
    title: t("navigation.englishMinistry"),
    submenu: [
      { url: "/lpd", title: t("navigation.lpd") },
    ],
  },
  {
    title: t("navigation.news"),
    submenu: [
      { url: "/social", title: t("navigation.social") },
      { url: "/register", title: t("navigation.register") },
    ],
  },
];

interface BreadcrumbsProps {
  currentTitle: string;
}

function Breadcrumbs({ currentTitle }: BreadcrumbsProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname;
  const menuStructure = getMenuStructure(t);

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    // If we're on the home page, don't show any breadcrumbs
    if (currentPath === "/") {
      return "";
    }

    // For other pages, find the main category and show "Category / Page Title"
    const mainCategory = menuStructure.find((item) =>
      item.submenu.some((subItem) => subItem.url === currentPath)
    );

    if (mainCategory) {
      return `${mainCategory.title} / ${currentTitle}`;
    }

    // Fallback: just show the current title
    return currentTitle;
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) => theme.palette.header.breadcrumbs,
        color: (theme) => (theme.palette.mode === "dark" ? "white" : "black"),
        py: { xs: 0.5, md: 1 },
        px: { xs: 2, md: 3 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Page title on the left */}
      <Typography variant="h4">{currentTitle}</Typography>

      {/* Breadcrumbs on the right */}
      <Typography variant="body2">{generateBreadcrumbs()}</Typography>
    </Box>
  );
}

export default Breadcrumbs;
