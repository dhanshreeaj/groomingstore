"use client";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

type ThemeMode = "light" | "dark" | "purple" | "red";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useCustomTheme must be used within ThemeRegistry");
  return context;
};

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");
  const setTheme = (theme: ThemeMode) => {
    setMode(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode;
    if (saved) setMode(saved);
  }, []);

  const toggleTheme = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
  };

  //const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const theme = useMemo(() => {
    if (mode === "light") {
      return createTheme({
        palette: {
          mode: "light",
          primary: { main: "#f5f5f5ff" },
          background: { default: "#ffffffff", paper: "#000000ff" },
          text: { primary: "#000000ff", secondary: "#ffffffff" },
        },
      });
    }
    if (mode === "dark") {
      return createTheme({
        palette: {
          mode: "light",
          primary: { main: "#000000ff" },
          background: { default: "#000000ff", paper: "#ffffffff" },
          text: { primary: "#ffffffff", secondary: "#000000ff" },
        },
      });
    }
    if (mode === "purple") {
      return createTheme({
        palette: {
          mode: "light",
          primary: { main: "#6a0dad" },
          background: { default: "#f5e6ff", paper: "#b86eecff" },
          text: { primary: "#2a0952ff", secondary: "#4a148c" },
        },
      });
    }
    if (mode === "red") {
      return createTheme({
        palette: {
          mode: "light",
          primary: { main: "#d32f2f" },
          background: { default: "#ffe6e6", paper: "#f38e8eff" },
          text: { primary: "#b71c1c", secondary: "#b71c1c" },
        },
      });
    }
    return createTheme({ palette: { mode } });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
