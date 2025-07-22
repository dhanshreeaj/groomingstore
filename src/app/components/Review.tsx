"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  useTheme,
} from "@mui/material";
import { Avatar } from "@mui/material";
export default function Review() {
  const theme = useTheme();
  const cardStyles = {
    width: { xs: "90%", sm: 280 },
    height: "auto",
    borderRadius: "15px",
    display: "flex",
    padding: 2,
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.2s ease-in-out",
    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
    color: theme.palette.mode === "dark" ? "black" : "white",
    "&:hover": {
      transform: "rotate(5deg)",
      backgroundColor: "grey",
      boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
    },
    mx: "auto",
  };

  const Card = () => (
    <Box sx={cardStyles}>
      <IconButton onClick={() => alert("Profile clicked")}>
        <Avatar />
      </IconButton>
      <Typography variant="subtitle1" fontWeight="bold" mt={1}>
        User Name
      </Typography>
      <Typography
        variant="h6"
        fontSize={{ xs: 12, sm: 15 }}
        align="center"
        mt={1}
      >
        If you are not using testimonials, you’re missing out on a golden
        opportunity to turn visitors and potential buyers into actual customers.
      </Typography>
    </Box>
  );
  return (
    <>
      {/*main containt */}
      <Box sx={{ display: "flex", padding: 2, justifyContent: "center" }}>
        <Container maxWidth="xl">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            <Button
              variant="outlined"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
                textTransform: "none",
                borderRadius: "25px",
                borderColor: "black",
                "&:hover": {
                  bgcolor: "grey",
                  color: "white",
                },
              }}
            >
              Testimonials
            </Button>
            {/*title containt */}
            <Box
              sx={{
                textAlign: "center",
                padding: 2,
                justifyContent: "center",
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                fontSize={30}
                align="center"
              >
                Our Trusted clients
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={{ xs: 13, sm: 15 }}
                mt={1}
              >
                Our mission is to progress enhance the lives of our customers by
                delivering <br />
                superior products and services that exceed expectation.
              </Typography>
            </Box>

            {/*review containt */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 4, md: 6 },
                width: { xs: "100%", sm: "90%", md: 1100 },
              }}
            >
              {/*first row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5, md: 10 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card />
                <Card />
                <Card />
              </Box>
              {/* second row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5, md: 10 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card />
                <Card />
                <Card />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
