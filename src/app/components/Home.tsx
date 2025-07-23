"use client";

import Image from "next/image";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            py: { xs: 2, md: 15 },
            px: { xs: 2, md: 0 },
            gap: { xs: 4, md: 25 },
            backgroundColor: "white",
            bgcolor: theme.palette.mode === "dark" ? "black" : "white",
          }}
        >
          {/*Left side text contenet */}
          <Box
            sx={{
              maxWidth: { md: "50%" }, // Adjust maxWidth for larger screens

              flex: 1,
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "white" : "black",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.8rem", md: "3.9rem" } }}
            >
              Clean Looks No Compromise
            </Typography>
            <br />
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1rem", md: "1.4rem" } }}
            >
              Effortless routines, clean formulas, no fluff.This is grooming
              without the vanity.
            </Typography>
            <br />
            <Button
              LinkComponent={Link}
              href="/shop"
              sx={{
                fontSize: { xs: "0.4rem", md: "1rem" },
                textTransform: "none",
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
                "&:hover": {
                  bgcolor: "grey",
                  color: "black",
                },
              }}
            >
              View Collection
            </Button>
          </Box>

          {/*Image section */}
          <Box
            sx={{
              // flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: 200, md: 350 },
              height: { xs: 200, md: 350 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: 3,
                alignItems: "center",
                position: "relative",
                width: { xs: 200, md: 350 },
                height: { xs: 200, md: 350 },
                borderRadius: "50%",
                border: "3px solid grey",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 150, md: 300 },
                  height: { xs: 150, md: 300 },
                  borderRadius: "50%",
                  border: "2.5px solid grey",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/products.png"
                  alt="Product Image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
