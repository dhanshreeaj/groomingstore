"use client";
import Image from "next/image";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import Link from "next/link";

export default function ProductFeatures() {
  const theme = useTheme();
  return (
    <>
      {/*main containt part */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: 2, sm: 4, md: 8 },
          justifyContent: "center",
          bgcolor: theme.palette.mode === "dark" ? "black" : "white",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/*feature box containt part */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: "black",
              borderRadius: "15px",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: theme.palette.mode === "dark" ? "white" : "black",
              width: { xs: "100%", sm: 500, md: 900 },
              height: "auto",
              padding: { xs: 0.5, sm: 3, md: 6 },
            }}
          >
            {/*left side containt */}
            <Box
              sx={{
                padding: { xs: 0.5, sm: 1.5, md: 4 },
                backgroundColor: "black",
                textAlign: "center",
                borderRadius: "15px",
                justifyContent: "center",
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Premium Natural Ingredients
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Formulated with high‑quality oils and butters to nourish skin
                &amp; hair.
              </Typography>
              <br />
              <br />
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Tailored Formulations
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Targeted solutions for beard growth, hydration, and styling.
              </Typography>
            </Box>
            {/*center containt */}
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: { xs: 2, sm: 3, md: 4 },
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" } }}
              >
                Why Choose Stallion Grooming?
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Experience effortless grooming with premium, natural
                formulations and expert craftsmanship tailored for the modern
                man.
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  mt: 3,
                  width: { xs: 120, sm: 180, md: 300 },
                  height: { xs: 120, sm: 180, md: 300 },
                }}
              >
                <Image
                  src="/assets/shampoo.png"
                  alt="Product Feature Image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <Button
                  LinkComponent={Link}
                  variant="outlined"
                  href="/shop"
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
                    textTransform: "none",
                    borderColor: "black",
                    bgcolor: theme.palette.mode === "dark" ? "black" : "white",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Box>
            {/*right side containt */}
            <Box
              sx={{
                padding: { xs: 1.5, sm: 3, md: 4 },
                textAlign: "center",
                backgroundColor: "black",
                borderRadius: "15px",
                justifyContent: "center",
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Eco‑Friendly Packaging
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Sustainable, recyclable materials that look and feel premium.
              </Typography>
              <br />
              <br />
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Fast Nationwide Delivery
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Get your grooming essentials delivered across India in 3–7
                business days.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
