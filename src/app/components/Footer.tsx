"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Link as MuiLink,
  Container,
  useTheme,
  Stack,
} from "@mui/material";

import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FaceBookIcon from "@mui/icons-material/Facebook";

const LegalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms",
    href: "/terms-and-conditions",
  },
  {
    name: "Cancellation & Refund",
    href: "/cancellation-and-refund",
  },
  {
    name: "Shipping & Delivery",
    href: "/shipping-and-delivery",
  },
  { href: "/products", name: "Product" },
  { href: "/productdetails", name: "Product Details" },
];

export default function Footer() {
  const theme = useTheme();
  return (
    <>
      {/*main containt */}
      <Box
        sx={{
          display: "flex",
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          justifyContent: "center",
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="xl">
          {/* footer containt*/}
          <Box
            sx={{
              display: "flex",
              p: { xs: 2, md: 4 },
              flexDirection: "column",
              borderRadius: "12px",
              bgcolor: theme.palette.background.paper,
              color: theme.palette.text.secondary,
            }}
          >
            {/* first box part for socail media */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 6 },
                mb: 4,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {/* social media containt */}
              <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontSize={{ xs: 22, sm: 30, md: 45 }}
                >
                  Stallion Grooming
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={{ xs: 12, sm: 14 }}
                  mt={1}
                  mb={2}
                >
                  Stallion-free blogging platform that developers and team love.
                </Typography>
                <Box>
                  <IconButton
                    color="inherit"
                    href="https://x.com/i/flow/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <XIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="https://www.linkedin.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaceBookIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="https://www.instagram.com/accounts/login/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeIcon />
                  </IconButton>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    bgcolor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    borderColor: "black",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  All systems operational{" "}
                </Button>
              </Box>

              {/* company detail */}
              <Box
                sx={{
                  flex: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "space-between" },
                  textAlign: { xs: "center", sm: "left" },
                  gap: { xs: 3, md: 8 },
                }}
              >
                {/* first section */}
                <Box
                  sx={{
                    flex: "1 1 120px",
                    minWidth: 150,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    Product
                  </Typography>
                  <Typography
                    variant="caption"
                    // color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "gray",
                      },
                    }}
                  >
                    {" "}
                    Headless CMS
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Pricing
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    GraphQL APIs
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    Open source Starter-kit
                  </Typography>
                  <br />
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    Explore
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    My feed
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Case studies
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Stallion AI
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    Referral Program
                  </Typography>
                </Box>
                {/* srcond section */}
                <Box
                  sx={{
                    flex: "1 1 120px",
                    minWidth: 150,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    Company
                  </Typography>
                  <Typography
                    variant="caption"
                    // color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    About Stallion
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Careers
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Logos and media{" "}
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    Changelog
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    Feature Request
                  </Typography>
                  <Link href="/faq" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="caption"
                      //color="grey"
                      sx={{
                        color: theme.palette.text.secondary,
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "grey",
                        },
                      }}
                    >
                      FAQ
                    </Typography>
                  </Link>
                  <br />
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    Blogs
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Offical Blog
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    Enginerring Blog
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    Stallion Townhall
                  </Typography>
                </Box>
                {/* third section */}
                <Box
                  sx={{
                    flex: "1 1 120px",
                    minWidth: 150,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    Partner with us
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Host a Hackathon
                  </Typography>
                  <br />
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={20}
                  >
                    Support
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Support docs
                  </Typography>
                  <Typography
                    variant="caption"
                    //color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Contact
                  </Typography>
                  <Typography
                    variant="caption"
                    // color="grey"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {" "}
                    Join discard
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* second box for year and policy section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                pt: 2,
                gap: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.text.secondary }}
              >
                © 2025 Stallion-Grooming Inc.
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                flexWrap={"wrap"}
                gap={2}
              >
                {LegalLinks.map((item, i) => (
                  <MuiLink
                    href={item.href}
                    component={Link}
                    key={i}
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      "&:hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {item.name}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
