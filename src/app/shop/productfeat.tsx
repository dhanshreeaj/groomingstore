"use client";

import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";

export default function ProductFeat() {
  return (
    <>
      {/* details of product */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: { xs: 1, md: 2 },
          paddingY: { xs: 1, md: 2 },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize={{ xs: 30, md: 40 }}
          >
            ELEVATE THE WAY YOU CARRY
          </Typography>
          <Typography variant="subtitle1" fontSize={{ xs: 10, md: 15 }}>
            Provide things together professional uttility and convensional np
            need to carry two bags.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              paddingX: { xs: 1, md: 2 },
              paddingY: { xs: 1, md: 2 },
              gap: { xs: 1, md: 2 },
              alignItems: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                bgcolor: "lightgrey",
                flexDirection: "column",
                justifyContent: "center",
                height: { xs: "50%", md: 180 },
                width: { xs: 250, md: 500 },
                paddingY: { xs: 1, md: 2 },
                paddingX: { xs: 1, md: 2 },
              }}
            >
              <Typography variant="subtitle1" fontSize={15}>
                {">"} Dual compoentents for daily and travel needs.
              </Typography>
              <Typography variant="subtitle1" fontSize={15}>
                {">"} Expandable sutes section hidden spaces.
              </Typography>
              <Typography variant="subtitle1" fontSize={15}>
                {">"} Play in the Rain.
              </Typography>
              <Typography variant="subtitle1" fontSize={15}>
                {">"} Enhanced Organization.
              </Typography>
              <Typography variant="subtitle1" fontSize={15}>
                {">"} Quick Stash Pocket.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Image
                src="/bag.png"
                alt="Bag Image"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
