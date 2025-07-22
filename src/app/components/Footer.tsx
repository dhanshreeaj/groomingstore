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
              p: { xs: 2, sm: 3, md: 4 },
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
              }}
            >
              {/* social media containt */}
              <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontSize={{ xs: 40, sm: 50, md: 60 }}
                >
                  Hashnode
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={{ xs: 13, sm: 15 }}
                  mt={1}
                  mb={2}
                >
                  Hassle-free blogging platform that developers and team love.
                </Typography>
                <Box>
                  {[
                    XIcon,
                    LinkedInIcon,
                    FaceBookIcon,
                    InstagramIcon,
                    YouTubeIcon,
                  ].map((Icon, index) => (
                    <IconButton
                      key={index}
                      color="inherit"
                      sx={{ mx: 0.5 }}
                      component="a"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </IconButton>
                  ))}
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
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 4, md: 8 },
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: { xs: "center", sm: "left" },
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
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                pt: 2,
                gap: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="subtitle2" color="grey">
                © 2025 Hashnode-LinearBytes Inc.
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
