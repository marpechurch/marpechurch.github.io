import { useTranslation } from "react-i18next";
import { Language as LanguageIcon } from "@mui/icons-material";
import { Button } from "@mui/material";

const languages = [
  { code: "ko", name: "한국어" },
  { code: "en", name: "English" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleToggleLanguage = () => {
    const newLanguage = i18n.language === "ko" ? "en" : "ko";
    i18n.changeLanguage(newLanguage);
  };

  const switchToLanguage = languages.find((lang) => lang.code !== i18n.language) || languages[1];

  return (
    <Button
      color="inherit"
      onClick={handleToggleLanguage}
      startIcon={<LanguageIcon />}
      sx={{
        textTransform: "none",
        fontSize: "14px",
        minWidth: "auto",
        px: 1,
      }}
    >
      {switchToLanguage.name}
    </Button>
  );
}
