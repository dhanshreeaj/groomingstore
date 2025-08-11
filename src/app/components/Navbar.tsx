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

const navLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/shop", label: "Shop/ Pricing" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About Us" },
];

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
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        paddingX: 1,
        paddingY: 0.5,
        borderRadius: "20px",
        alignItems: "center",
      }}
    >
      {navLinks.map(({ href, label }) => (
        <Link key={href} href={href} passHref>
          <Button
            sx={{
              color: theme.palette.text.secondary,
              textTransform: "none",
            }}
          >
            {label}
          </Button>
        </Link>
      ))}
    </Stack>
  );
  return (
    <AppBar
      // position="static"
      sx={{
        backgroundColor: "black",
        boxShadow: "none",
        padding: 1,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ background: "red", textAlign: "center" }}>
          Site Under Progress
        </Box>

        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/*Left side brand name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {isMobail && (
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Link href="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  bgcolor: theme.palette.background.default,
                  WebkitMask: 'url("/logo.png") no-repeat center / contain',
                  mask: 'url("/logo.png") no-reap center / contain',
                  width: 60,
                  height: 60,
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  color: theme.palette.text.secondary,
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
                left: "45%",
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
                bgcolor: theme.palette.background.paper,
                height: "100%",
                width: 250,
              }}
            >
              {/* Show logo inside drawer for mobile */}
              {isMobail && (
                <Link href="/signin" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      bgcolor: theme.palette.background.default,
                      color: theme.palette.text.primary,
                      "&:hover": {
                        backgroundColor: "grey",
                      },
                      borderRadius: "20px",
                      paddingX: 1,
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
              <NavButtons />
            </Box>
          </Drawer>

          {/*Right side icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: theme.palette.background.paper,
              color: theme.palette.text.secondary,
            }}
          >
            <ThemeToggleButton />
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <ShoppingBagIcon />
            </IconButton>
            {!isMobail && (
              <Link href="/signin" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    bgcolor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: "grey",
                    },
                    borderRadius: "20px",
                    paddingX: 1,
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
