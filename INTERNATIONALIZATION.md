# Internationalization (i18n) Implementation

This document describes the internationalization implementation for Marpe Church website.

## Features

- **Language Support**: Korean (default) and English
- **Language Switcher**: Dropdown menu in the header to switch between languages
- **Persistent Language Selection**: Language preference is saved in localStorage
- **Automatic Detection**: Browser language is detected on first visit

## Implementation Details

### Dependencies
- `react-i18next`: React integration for i18next
- `i18next`: Core internationalization framework
- `i18next-browser-languagedetector`: Automatic language detection

### File Structure
```
src/
├── i18n/
│   ├── index.ts                 # i18n configuration
│   └── locales/
│       ├── ko.json             # Korean translations
│       └── en.json             # English translations
└── components/
    └── LanguageSwitcher.tsx    # Language switcher component
```

### Translation Keys Structure
- `common.*`: Common text used across the site
- `navigation.*`: Navigation menu items
- `home.*`: Home page content
- `staff.*`: Staff page content
- `vision.*`: Vision page content

### Usage

#### Adding New Translations
1. Add the translation key to both `ko.json` and `en.json`
2. Use the key in components with `t("key.path")`

#### Example:
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t("common.churchName")}</h1>;
}
```

#### Adding New Languages
1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to the `resources` object in `src/i18n/index.ts`
3. Add the language option to the `languages` array in `LanguageSwitcher.tsx`

### Language Switcher
The language switcher appears in the header and allows users to:
- See current language with flag emoji
- Switch between available languages
- Have their preference saved automatically

### Browser Language Detection
The system automatically detects the user's browser language and sets it as the default if it's supported, otherwise falls back to Korean.

## Testing
To test the implementation:
1. Start the development server: `yarn dev`
2. Open the website in a browser
3. Use the language switcher in the header to switch between Korean and English
4. Verify that all text content changes appropriately
5. Refresh the page to ensure language preference is persisted
