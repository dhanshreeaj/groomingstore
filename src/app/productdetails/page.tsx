"use client";

import Image from "next/image";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const colors = [
  { name: "Green", code: "green" },
  { name: "Blue", code: "blue" },
  { name: "Pink", code: "pink" },
];
export default function ProductDetails() {
  const [selectedColor, setSelectoredColor] = useState(colors[0].code);
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      {/* main containt */}
      <Box
        sx={{
          display: "flex",
          padiing: 2,
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
          {/* product detail containt */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingX: 4,
              paddingY: 6,
            }}
          >
            {/* product name and desc */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    bgcolor: "white",
                    textTransform: "none",
                    borderRadius: "30px",
                    borderColor: "black",
                    "&:hover": {
                      bgcolor: "black",
                      color: "white",
                    },
                  }}
                >
                  FEATUED
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    bgcolor: "white",
                    borderColor: "black",
                    textTransform: "none",
                    borderRadius: "30px",
                    "&:hover": {
                      bgcolor: "black",
                      color: "white",
                    },
                  }}
                >
                  KTWO
                </Button>
              </Stack>
              <Typography variant="h6" fontWeight="bold" fontSize={30}>
                SANTECO KTWO SPORTS BOTTLE
              </Typography>
              <Typography variant="h6" color="grey" fontSize={15}>
                Flip over drinking makes drinking water easy in any environment
              </Typography>
            </Box>
            {/* product imgae and options rating*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: 2,
              }}
            >
              {/* product image section */}
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "#f9f9faff",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingX: 2,
                  borderRadius: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      bgcolor: "lightgrey",
                      borderRadius: "15px",
                    }}
                  >
                    <Image
                      src="/faceserium.png"
                      alt="Product Image"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      bgcolor: "lightgrey",
                      borderRadius: "15px",
                    }}
                  >
                    <Image
                      src="/faceserium.png"
                      alt="Product Image"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      bgcolor: "lightgrey",
                      borderRadius: "15px",
                    }}
                  >
                    <Image
                      src="/faceserium.png"
                      alt="Product Image"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>

                <Image
                  src="/faceserium2.png"
                  alt="Product Image"
                  width={300}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              {/* product detasils */}
              <Box
                sx={{
                  display: "flex",
                  padding: 2,
                  gap: 2,
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" fontSize={30}>
                  KOTKA
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontSize={15}
                    flexDirection="row"
                  >
                    COLOR
                  </Typography>
                  {/* color sector*/}
                  {colors.map((color) => (
                    <Box
                      key={color.code}
                      onClick={() => setSelectoredColor(color.code)}
                      sx={{
                        width: 25,
                        height: 25,
                        borderRadius: "50%",
                        backgroundColor: color.code,
                        border:
                          selectedColor === color.code
                            ? "2px solid black"
                            : "2px solid transparent",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    ></Box>
                  ))}
                </Box>
                {/* Add to cart button and details */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "500px",
                    padding: "3px 3px",
                    gap: 2,
                    width: "fit-content",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                    },
                  }}
                >
                  <Button
                    sx={{
                      minWidth: "30px",
                      color: "white",
                      fontSize: "18px",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    -
                  </Button>
                  <Typography variant="body1" fontWeight="bold">
                    Add to cart
                  </Typography>
                  <Button
                    sx={{
                      minWidth: "30px",
                      color: "white",
                      fontSize: "18px",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel1" ? <RemoveIcon /> : <AddIcon />
                    }
                  >
                    <Typography fontWeight="bold">BOOK INCLUDES:</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle2">
                      Millions of businesses of all sizes use our platform and
                      APIs to accept payments and manage their businesses
                      online.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel2" ? <RemoveIcon /> : <AddIcon />
                    }
                  >
                    <Typography fontWeight="bold">REVIEW</Typography>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel3" ? <RemoveIcon /> : <AddIcon />
                    }
                  >
                    <Typography fontWeight="bold">RETURN POLICY</Typography>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
