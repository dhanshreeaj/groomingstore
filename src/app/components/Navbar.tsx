"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  useMediaQuery,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";
import ThemeToggleButton from "./Themetoggel";

import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobail = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  // center or menu buttons
  const NavButtons = () => (
    <Stack
      direction={isMobail ? "column" : "row"}
      spacing={2}
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "white" : "black",
        paddingX: 1,
        paddingY: 0.5,
        borderRadius: "20px",
        alignItems: "center",
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
  );
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        boxShadow: "none",
        padding: 1,
        bgcolor: theme.palette.mode === "dark" ? "white" : "black",
        color: theme.palette.mode === "dark" ? "black" : "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/*Left side brand name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobail && (
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Link href="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? "black" : "white",
                  WebkitMask: 'url("/logo.png") no-repeat center / contain',
                  mask: 'url("/logo.png") no-reap center / contain',
                  width: 60,
                  height: 60,
                }}
              />
            </Link>
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
                Stallion
              </Typography>
            </Link>
          </Box>

          {/*Center Buttons */}
          {!isMobail && (
            <Box
              sx={{
                position: "absolute",
                left: "40%",
                transform: "translateX(-50%)",
              }}
            >
              <NavButtons />
            </Box>
          )}

          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingY: 4,
                paddingX: 2,
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                height: "100%",
                width: 250,
              }}
            >
              {/* Show logo inside drawer for mobile */}
              {isMobail && (
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
                    paddingX: 1,
                  }}
                >
                  Login
                </Button>
              )}
              <NavButtons />
            </Box>
          </Drawer>

          {/*Right side icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ThemeToggleButton />
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
            {!isMobail && (
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
                  paddingX: 1,
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
