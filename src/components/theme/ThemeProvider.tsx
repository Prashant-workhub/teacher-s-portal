import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const storageKey = "noteit-theme";

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
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.setProperty("--app-bg", theme === "dark" ? "#0F172A" : "#F8FAFC");
    root.style.setProperty("--app-surface", theme === "dark" ? "#0F172A" : "#FFFFFF");
    root.style.setProperty("--app-surface-alt", theme === "dark" ? "#0F172A" : "#F8FAFC");
    root.style.setProperty("--app-border", "#64748B");
    root.style.setProperty("--app-text", theme === "dark" ? "#F8FAFC" : "#0F172A");
    root.style.setProperty("--app-muted", "#64748B");
    root.style.setProperty("--app-brand", theme === "dark" ? "#16A34A" : "#0F766E");
    root.style.setProperty("--app-brand-strong", theme === "dark" ? "#0F766E" : "#16A34A");
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
