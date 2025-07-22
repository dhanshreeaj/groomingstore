"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Link,
  Container,
  useTheme,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FaceBookIcon from "@mui/icons-material/Facebook";

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
          bgcolor: theme.palette.mode === "dark" ? "white" : "black",
          color: theme.palette.mode === "dark" ? "black" : "white",
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
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "white" : "black",
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
                    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                    color: theme.palette.mode === "dark" ? "black" : "white",
                    borderRadius: "10px",
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
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Headless CMS
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Pricing
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    GraphQL APIs
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
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
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    My feed
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Case studies
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Stallion AI
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
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
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    About Stallion
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Careers
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Logos and media{" "}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    Changelog
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    Feature Request
                  </Typography>
                  <Link href="/faq" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="caption"
                      color="grey"
                      sx={{
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color:
                            theme.palette.mode === "dark" ? "white" : "black",
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
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Offical Blog
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    Enginerring Blog
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
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
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
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
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Support docs
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      },
                    }}
                  >
                    {" "}
                    Contact
                  </Typography>
                  <Typography
                    variant="caption"
                    color="grey"
                    sx={{
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
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
              <Typography variant="subtitle2" color="grey">
                © 2025 Stallion-LinearBytes Inc.
              </Typography>
              <Box display="flex" gap={2}>
                {["Privacy Policy", "Terms", "Code of Conduct"].map(
                  (item, i) => (
                    <Typography
                      key={i}
                      variant="subtitle2"
                      color="grey"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color:
                            theme.palette.mode === "dark" ? "white" : "black",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
