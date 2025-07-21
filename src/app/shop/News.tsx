"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
          gap: 2,
        }}
      >
        <Container maxWidth="xl">
          {/* news and articles section */}
          {/* title and button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingX: 2,
              paddingY: 4,
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" fontSize={40}>
              NEWS & ARTICLES
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                bgcolor: "white",
                textTransform: "none",
                borderRadius: "30px",
                borderColor: "black",
                height: 40,
                "&:hover": {
                  bgcolor: "black",
                  color: "white",
                },
              }}
            >
              VIEW MORE →
            </Button>
          </Box>
          {/* news and articles section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 2,
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: 2,
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/news.png"
                  alt="New Image"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography variant="h6" fontWeight="bold" fontSize={15}>
                How to Pack Smart for a 3-Day Work Trip
              </Typography>
              <Typography variant="subtitle2" fontSize={10}>
                Provide things together professional <br />
                uttility and convensional np need to carry two bags.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                padding: 2,
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/news1.png"
                  alt="New Image"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography variant="h6" fontWeight="bold" fontSize={15}>
                How to Pack Smart for a 3-Day Work Trip
              </Typography>
              <Typography variant="subtitle2" fontSize={10}>
                Provide things together professional <br />
                uttility and convensional np need to carry two bags.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                padding: 2,
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/news2.png"
                  alt="New Image"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography variant="h6" fontWeight="bold" fontSize={15}>
                How to Pack Smart for a 3-Day Work Trip
              </Typography>
              <Typography variant="subtitle2" fontSize={10}>
                Provide things together professional <br />
                uttility and convensional np need to carry two bags.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
