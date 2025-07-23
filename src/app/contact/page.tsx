"use client";

import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FaceBookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  const theme = useTheme();
  return (
    <>
      {/* main containt  */}
      <Box
        sx={{
          display: "flex",
          py: { xs: 2, md: 4 },
          px: { xs: 2, md: 4 },
          justifyContent: "center",
          bgcolor: theme.palette.mode === "dark" ? "black" : "white",
        }}
      >
        <Container maxWidth="xl">
          {/* text containt */}
          <Box
            sx={{
              display: "flex",
              py: { xs: 2, md: 8 },
              px: { xs: 3, md: 15 },
              flexDirection: "column",
              textAlign: { xs: "center", md: "left" },
              bgcolor: theme.palette.mode === "dark" ? "white" : "black",
              color: theme.palette.mode === "dark" ? "black" : "white",
            }}
          >
            <Typography fontWeight="bold" fontSize={{ xs: 30, sm: 40, md: 60 }}>
              Contact Us
            </Typography>
            <Typography fontSize={{ xs: 12, sm: 14, md: 16 }} padding={2}>
              Please feel free to contact us and we <br />
              will get back to you as soon as we can.
            </Typography>

            {/* form section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                textAlign: "left",
                justifyContent: "space-between",
                paddingY: { xs: 3, md: 2 },
              }}
            >
              <Box
                component="form"
                action="https://formspree.io/f/mblkgkpe"
                method="POST"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: 300, md: 400 },
                  px: { xs: 2 },
                  gap: 2,
                  color: theme.palette.mode === "dark" ? "black" : "white",
                }}
              >
                <TextField
                  variant="standard"
                  label="Name"
                  name="name"
                  InputLabelProps={{ style: { color: "grey" } }}
                  InputProps={{
                    style: {
                      color: theme.palette.mode === "dark" ? "black" : "white",
                      borderBottom: "3px solid ",
                    },
                  }}
                  sx={{
                    color: theme.palette.mode === "dark" ? "black" : "white",
                  }}
                />
                <TextField
                  variant="standard"
                  label="Email"
                  name="email"
                  InputLabelProps={{ style: { color: "grey" } }}
                  InputProps={{
                    style: {
                      color: theme.palette.mode === "dark" ? "black" : "white",
                      borderBottom: "3px solid ",
                    },
                  }}
                  sx={{
                    color: theme.palette.mode === "dark" ? "black" : "white",
                  }}
                />
                <TextField
                  variant="standard"
                  label="Message"
                  name="nessage"
                  InputLabelProps={{ style: { color: "grey" } }}
                  InputProps={{
                    style: {
                      color: theme.palette.mode === "dark" ? "black" : "white",
                      borderBottom: "3px solid ",
                    },
                  }}
                  sx={{
                    color: theme.palette.mode === "dark" ? "black" : "white",
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "grey",
                    textTransform: "none",
                    fontWeight: "bold",
                    color: theme.palette.mode === "dark" ? "black" : "white",
                  }}
                >
                  Send
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  py: { xs: 2 },
                  gap: { xs: 0.8, md: 2 },
                }}
              >
                <Typography fontSize={{ xs: 12, md: 18 }}>Visit us</Typography>
                <Typography fontSize={{ xs: 10, md: 12 }}>Adddress</Typography>
                <br />
                <br />
                <Typography fontSize={{ xs: 12, md: 20 }}>
                  Talk to us
                </Typography>{" "}
                <Typography fontSize={{ xs: 10, md: 12 }}>
                  +6425457894
                  <br />
                  stalliongrooming.com
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
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
