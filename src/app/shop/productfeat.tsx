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
          paddingX: 2,
          paddingY: 2,
          gap: 2,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h6" fontWeight="bold" fontSize={40}>
            ELEVATE THE WAY YOU CARRY
          </Typography>
          <Typography variant="subtitle1" fontSize={15}>
            Provide things together professional uttility and convensional np
            need to carry two bags.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingX: 2,
              paddingY: 2,
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                bgcolor: "lightgrey",
                flexDirection: "column",
                justifyContent: "center",
                height: 180,
                width: 500,
                paddingY: 2,
                paddingX: 2,
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
