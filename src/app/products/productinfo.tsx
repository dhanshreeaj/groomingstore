"use client";

import Image from "next/image";
import { Box, Container, Typography, useTheme } from "@mui/material";

export default function ProductInfo() {
  const theme = useTheme();
  return (
    <>
      {/* main containt */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: 2, md: 4 },
          color: theme.palette.mode === "dark" ? "white" : "black",
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
          {/* info and image containt */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: { xs: 1, md: 2 },
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* info containt */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                fontSize={{ xs: 22, sm: 26, md: 30 }}
              >
                Complete Beauty, Naturally
              </Typography>
              <Typography
                variant="h6"
                align="center"
                fontSize={{ xs: 14, md: 16 }}
              >
                From skin hydration to effortless makeup,our product are
                designed to
                <br />
                enhance yur beauty while keeping your skin healthy and
                protected-all day,
                <br />
                every day.
              </Typography>
            </Box>
            {/* image containt */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 2, sm: 4 },
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "30px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/product1.png"
                  alt="Product Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  borderRadius: "30px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/product2.png"
                  alt="Product Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  borderRadius: "30px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/product3.png"
                  alt="Product Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  borderRadius: "30px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/product4.png"
                  alt="Product Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
            {/* detail part */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 3, md: 4 },
                padding: { xs: 2, md: 4 },
              }}
            >
              {/* left side part*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 1.5, md: 2.5 },
                  padding: { xs: 1, md: 2 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontSize={{ xs: 22, md: 30 }}
                >
                  Nature Inspires <br />
                  Everything We Create
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={{ xs: 14, md: 16 }}
                  sx={{
                    color: theme.palette.mode === "dark" ? "white" : "grey",
                  }}
                >
                  We build natural beauty brands that feel real,
                  <br />
                  look refined, and truly connect.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 1, sm: 4 },
                    paddingY: { xs: 2, md: 5 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    flexDirection="column"
                    align="center"
                    fontWeight="bold"
                  >
                    512<Typography>Happy Clients</Typography>
                  </Typography>

                  <Typography
                    variant="h6"
                    flexDirection="column"
                    align="center"
                    fontWeight="bold"
                  >
                    48<Typography>Partnar Institutions</Typography>
                  </Typography>

                  <Typography
                    variant="h6"
                    flexDirection="column"
                    align="center"
                    fontWeight="bold"
                  >
                    36<Typography>Brand Projects</Typography>
                  </Typography>

                  <Typography
                    variant="h6"
                    flexDirection="column"
                    align="center"
                    fontWeight="bold"
                  >
                    18<Typography>Years Experience</Typography>
                  </Typography>
                </Box>
              </Box>
              {/* right side part */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: { xs: 200, md: 300 },
                  height: { xs: 250, md: 350 },
                }}
              >
                <Image
                  src="/product5.png"
                  alt="Product Image"
                  width={300}
                  height={350}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
