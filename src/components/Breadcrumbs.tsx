import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";

// Main menu structure with nested submenus (same as AppMenu)
const menuStructure = [
  {
    title: "교회 소개",
    submenu: [
      { url: "/staff", title: "섬기는 이들" },
      { url: "/denomination", title: "소속 교단" },
      { url: "/vision", title: "비전" },
      { url: "/directions", title: "오시는 길" },
    ],
  },
  {
    title: "예배 설교",
    submenu: [
      { url: "/sermons", title: "설교 말씀" },
      { url: "/program", title: "주보" },
      { url: "/offering", title: "헌금" },
      { url: "/worship", title: "찬양" },
    ],
  },
  {
    title: "다음 세대",
    submenu: [
      { url: "/youth", title: "Marpe Youth" },
      { url: "/kids", title: "Marpe Kids" },
    ],
  },
  {
    title: "교회 소식",
    submenu: [
      { url: "/social", title: "인스타그램" },
      { url: "/register", title: "교인 등록" },
    ],
  },
];

interface BreadcrumbsProps {
  currentTitle: string;
}

function Breadcrumbs({ currentTitle }: BreadcrumbsProps) {
  const location = useLocation();
  const currentPath = location.pathname;

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
