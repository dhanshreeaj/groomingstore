"use client";

import Image from "next/image";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";

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
            padding: 15,
            gap: 25,
            backgroundColor: "white",
            bgcolor: theme.palette.mode === "dark" ? "black" : "white",
          }}
        >
          {/*Left side text contenet */}
          <Box
            sx={{
              flex: 1,
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            <Typography variant="h2" fontWeight="bold">
              Clean Looks No Compromise
            </Typography>
            <br />
            <Typography variant="h5">
              Effortless routines, clean formulas, no fluff.This is grooming
              without the vanity.
            </Typography>
            <br />
            <Button
              sx={{
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
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: 3,
                alignItems: "center",
                position: "relative",
                width: 350,
                height: 350,
                borderRadius: "50%",
                border: "3px solid grey",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 300,
                  height: 300,
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
