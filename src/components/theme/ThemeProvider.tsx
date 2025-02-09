"use client";
import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

// doesn't work for next, fixed by installing next-theme

export type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: (value?: Theme) => Theme;
};

const ThemeContext = createContext<ThemeContextType>(null!);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme: ThemeContextType["toggleTheme"] = useCallback(
    (value?: Theme) => {
      const newTheme = value ? value : theme === "light" ? "dark" : "light";

      setTheme(newTheme);
      document.documentElement.classList.replace(theme, newTheme);
      localStorage.setItem("theme", newTheme);

      return theme;
    },
    [theme],
  );

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")) as Theme;

    toggleTheme(savedTheme);
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
