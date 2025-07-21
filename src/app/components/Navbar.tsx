"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
  Container,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";
import ThemeToggleButton from "./Themetoggel";

const Navbar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        boxShadow: "none",
        paddingX: 4,
        paddingY: 1,
        bgcolor: theme.palette.mode === "dark" ? "white" : "black",
        color: theme.palette.mode === "dark" ? "black" : "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/*Left side brand name */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: theme.palette.mode === "dark" ? "black" : "white",
                "&:hover": {
                  color: "pink",
                },
              }}
            >
              Kahf
            </Typography>
          </Link>
          {/*Center Buttons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(255, 255, 255, 0.1)",
              paddingX: 2,
              paddingY: 0.5,
              borderRadius: "20px",
            }}
          >
            <Link href="/products" passHref>
              <Button
                sx={{
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  textTransform: "none",
                }}
              >
                Product
              </Button>
            </Link>
            <Link href="/faq" passHref>
              <Button
                sx={{
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  textTransform: "none",
                }}
              >
                FAQ
              </Button>
            </Link>
            <Link href="/productdetails" passHref>
              <Button
                sx={{
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  textTransform: "none",
                }}
              >
                Product Details
              </Button>
            </Link>
            <Link href="/shop" passHref>
              <Button
                sx={{
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  textTransform: "none",
                }}
              >
                Shop
              </Button>
            </Link>
            <Button
              sx={{
                color: theme.palette.mode === "dark" ? "black" : "white",
                textTransform: "none",
              }}
            >
              Our Story
            </Button>
            <Button
              sx={{
                color: theme.palette.mode === "dark" ? "black" : "white",
                textTransform: "none",
              }}
            >
              News & Event
            </Button>
          </Stack>
          <br />
          <ThemeToggleButton />
          {/*Right side icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ color: theme.palette.mode === "dark" ? "black" : "white" }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{ color: theme.palette.mode === "dark" ? "black" : "white" }}
            >
              <ShoppingBagIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "grey",
                color: "white",
                "&:hover": {
                  backgroundColor: "black",
                },
                borderRadius: "20px",
                paddingX: 3,
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
