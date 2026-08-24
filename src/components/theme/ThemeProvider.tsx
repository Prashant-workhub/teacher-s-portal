import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const storageKey = "noteit-theme";
const themePalette = {
  dark: {
    bg: "#0F141B",
    surface: "#151C25",
    surfaceAlt: "#1B2430",
    border: "#2E3A46",
    text: "#EAF2EC",
    muted: "#93A4AF",
    brand: "#34D399",
    brandStrong: "#059669",
  },
  light: {
    bg: "#F3F6F4",
    surface: "#FFFFFF",
    surfaceAlt: "#E8EEEA",
    border: "#CBD5D0",
    text: "#111827",
    muted: "#66707B",
    brand: "#059669",
    brandStrong: "#047857",
  },
} as const;

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const palette = themePalette[theme];

    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.setProperty("--app-bg", palette.bg);
    root.style.setProperty("--app-surface", palette.surface);
    root.style.setProperty("--app-surface-alt", palette.surfaceAlt);
    root.style.setProperty("--app-border", palette.border);
    root.style.setProperty("--app-text", palette.text);
    root.style.setProperty("--app-muted", palette.muted);
    root.style.setProperty("--app-brand", palette.brand);
    root.style.setProperty("--app-brand-strong", palette.brandStrong);
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const value: ThemeContextValue = {
    theme,
    toggleTheme: () => {
      setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    },
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
