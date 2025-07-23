"use client";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode"; // CORRECT
import { useCustomTheme } from "@/app/theme/ThemeRegistry"; // Correct
import { Select, MenuItem } from "@mui/material";

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useCustomTheme();
  const { setTheme } = useCustomTheme();
  return (
    // <IconButton onClick={toggleTheme} color="inherit">
    //   {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    // </IconButton>

    <Select
      value={mode}
      onChange={(e) => setTheme(e.target.value as any)}
      size="small"
      variant="outlined"
      sx={{ minWidth: 120, color: "inherit" }}
    >
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
      <MenuItem value="purple">Purple & White</MenuItem>
      <MenuItem value="red">Red & White</MenuItem>
    </Select>
  );
}
