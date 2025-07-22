"use client";

import Image from "next/image";
import { Box, Container, Typography, useTheme } from "@mui/material";
import ProductInfo from "./productinfo";

export default function Products() {
  const theme = useTheme();
  return (
    <>
      {/* main containt */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: { xs: 2, md: 6 },
          paddingY: { xs: 2, md: 4 },
          gap: { xs: 2, md: 4 },
          justifyContent: "center",
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
          {/* center box contain */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingX: { xs: 2, md: 16 },
              gap: { xs: 3, md: 5 },
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                paddingX: { xs: 0, md: 1 },
                gap: { xs: 3, md: 4 },
                alignItems: "center",
              }}
            >
              {/*Left side text contenet */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingX: { xs: 0, md: 2 },
                  paddingY: { xs: 1, md: 2 },
                  width: { xs: "100%", md: 250 },
                  flexDirection: "column",
                  textAlign: { xs: "center", md: "left" },
                  color: theme.palette.mode === "dark" ? "white" : "grey",
                }}
              >
                <Typography variant="subtitle1" fontSize={{ xs: 14, md: 16 }}>
                  Essential Care for Every <br />
                  Skiin Clean,effective <br />
                  skincare powered by nature.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: 13, md: 15 }}
                    sx={{
                      color: "grey",
                      fontWeight: "bold",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center", md: "flex-start" },
                      gap: 0.5,
                    }}
                  >
                    <span style={{ color: "green" }}>● Aloe Green</span>
                    <span style={{ color: "purple" }}>● Lavender Calm</span>
                    <span style={{ color: "red" }}>● Rose Berry</span>
                    <span style={{ color: "skyblue" }}>● Citrus Zest</span>
                  </Typography>
                </Box>
              </Box>
              {/* middel or image section */}

              <Box
                sx={{
                  display: "flex",
                  padding: { xs: 1, md: 2 },
                  alignItems: "center",
                  position: "relative",
                  justifyContent: "center",
                  width: { xs: 260, md: 340 },
                  height: { xs: 260, md: 350 },
                  borderRadius: "50%",
                  border: "3px solid grey",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 280, md: 400 },
                    height: { xs: 240, md: 300 },
                    borderRadius: "50%",
                    border: "3px solid grey",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/bottole.png"
                    alt="Product Image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>

              {/* right side containt */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingY: { xs: 2, md: 3 },
                  paddingX: { xs: 0, md: 1 },
                  gap: 2,
                  textAlign: { xs: "center", md: "left" },
                  color: theme.palette.mode === "dark" ? "white" : "grey",
                }}
              >
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  fontSize={{ xs: 24, md: 35 }}
                >
                  Natural Care
                  <br /> for Every Skin
                </Typography>
                <br />
                <br />
                <Typography
                  variant="subtitle1"
                  paddingX={{ xs: 0, md: 3 }}
                  fontSize={{ xs: 13, md: 16 }}
                >
                  Brining natures best
                  <br /> into your daily routine
                  <br />
                  with gentle,effrctive
                  <br />
                  skincare and cosmetic
                  <br />
                  products you can trust.
                </Typography>
              </Box>
            </Box>
            {/* bottom part */}
            <Box
              sx={{
                gap: { xs: 2, md: 3 },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                color: theme.palette.mode === "dark" ? "white" : "grey",
              }}
            >
              <Typography variant="subtitle1" fontSize={25} fontWeight="bold">
                Trusted by Thousands
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: { xs: 1, sm: 2, md: 4 },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" flexDirection="column" align="center">
                  98%
                  <Typography>Feel More Hydrated</Typography>
                </Typography>
                <Typography variant="h6" flexDirection="column" align="center">
                  12,000+
                  <Typography>Faces Cared For</Typography>
                </Typography>
                <Typography variant="h6" flexDirection="column" align="center">
                  4.9
                  <Typography>Average Rating</Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <ProductInfo />
    </>
  );
}
