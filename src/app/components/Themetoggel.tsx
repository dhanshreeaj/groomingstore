"use client";
import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode"; // CORRECT
import { useCustomTheme } from "@/app/theme/ThemeRegistry"; // Correct
import { Select, MenuItem } from "@mui/material";

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useCustomTheme();
  const { setTheme } = useCustomTheme();
  const theme = useTheme();
  return (
    // <IconButton onClick={toggleTheme} color="inherit">
    //   {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    // </IconButton>

    <Select
      value={mode}
      onChange={(e) => setTheme(e.target.value as any)}
      size="small"
      variant="outlined"
      sx={{
        minWidth: 120,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
      }}
    >
      <MenuItem value="light" sx={{ color: theme.palette.text.secondary }}>
        Light
      </MenuItem>
      <MenuItem value="dark" sx={{ color: theme.palette.text.secondary }}>
        Dark
      </MenuItem>
      <MenuItem value="purple" sx={{ color: theme.palette.text.secondary }}>
        Purple & White
      </MenuItem>
      <MenuItem value="red" sx={{ color: theme.palette.text.secondary }}>
        Red & White
      </MenuItem>
    </Select>
  );
}
