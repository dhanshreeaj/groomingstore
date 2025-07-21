"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Link,
  Modal,
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
          padding: 8,
          gap: 2,
          justifyContent: "center",
          bgcolor: theme.palette.mode === "dark" ? "white" : "black",
          color: theme.palette.mode === "dark" ? "black" : "white",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* footer containt*/}
          <Box
            sx={{
              display: "flex",
              padding: 3,
              gap: 1,
              flexDirection: "column",
              borderRadius: "12px",
              height: 500,
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            {/* first box part for socail media */}
            <Box
              sx={{
                display: "flex",
                height: 400,
              }}
            >
              {/* social media containt */}
              <Box
                sx={{
                  display: "flex",
                  padding: 6,
                  gap: 1,
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" fontSize={60}>
                  Hashnode
                </Typography>
                <Typography variant="h6" fontSize={15}>
                  Hassle-free blogging platform that developers and team love.
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
                    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                    color: theme.palette.mode === "dark" ? "black" : "white",
                    borderRadius: "10px",
                    borderColor: "black",
                    width: 240,
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
                  display: "flex",
                  width: 800,
                  padding: 2,
                  gap: 1,
                  flexDirection: "row",
                }}
              >
                {/* first section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 200,
                    height: 350,
                    padding: 2,
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
                    Hashnode AI
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
                    display: "flex",
                    flexDirection: "column",
                    width: 200,
                    height: 350,
                    padding: 2,
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
                    About Hashnode
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
                    {" "}
                    Hashnode Townhall
                  </Typography>
                </Box>
                {/* third section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 200,
                    height: 350,
                    padding: 2,
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
                width: 1100,
                height: 100,
                gap: 2,
                padding: 1,
              }}
            >
              {/*year */}
              <Box
                sx={{
                  display: "flex",
                  width: 700,
                  padding: 2,
                }}
              >
                <Typography variant="subtitle1" color="grey">
                  © 2025 Hashnode-LinearBytes Inc.
                </Typography>
              </Box>
              {/* policy section */}
              <Box
                sx={{
                  display: "flex",
                  width: 400,
                  padding: 2,
                  gap: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="grey"
                  sx={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    },
                  }}
                >
                  Privacy Ploicy
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="grey"
                  sx={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    },
                  }}
                >
                  Terms
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="grey"
                  sx={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    },
                  }}
                >
                  Code of Conduct
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
