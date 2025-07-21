"use client";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode"; // CORRECT
import { useCustomTheme } from "@/app/theme/ThemeRegistry"; // Correct

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
