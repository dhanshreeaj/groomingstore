"use client";

import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Pagination,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import News from "./News";
import ProductFeat from "./productfeat";

export default function Shoppage() {
  const [laptopSizes, steLaptopSizes] = useState<string[]>([]);
  const [outfits, steOutfits] = useState<string[]>([]);
  const [shopby, steShopBy] = useState<string[]>([]);

  const toggleCheckBox = (
    option: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[]
  ) => {
    setState((prev) =>
      state.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };
  const laptopOptions = [
    "Fits 15.6 laptop",
    "Fits 16 Laptop",
    "Fits 17 Laptop",
    "Fits up to 16 ''MacBook Pro",
  ];
  const outfitOptions = ["1-2", "2-4", "4-6"];

  const shopbyOptions = ["HP", "Apple", "Lenova"];

  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
            paddingX: { xs: 2, md: 3 },
            gap: 4,
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            fontSize={{ xs: 24, md: 35 }}
            padding={2}
          >
            ALL BAGS.
            <br />
            ALL STORIES.
          </Typography>
          <Typography
            variant="h6"
            paddingX={{ xs: 0, md: 12 }}
            paddingY={2}
            fontSize={{ xs: 14, md: 15 }}
          >
            Effortless routines, clean formulas, no fluff.This is grooming
            without the vanity.
          </Typography>
        </Box>
        {/* main contaimnt part */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            paddingY: { xs: 2, md: 4 },
          }}
        >
          {/* Category part */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                  : theme.shadows[5],
              paddingX: { xs: 2, md: 3 },
              paddingY: 2,
              gap: 2,
              width: { xs: "80%", md: "300px" },
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontSize={25}>
              CATEGORY
            </Typography>
            <br />
            <Accordion sx={{ width: 250 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Laptop Size</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {laptopOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={laptopSizes.includes(option)}
                        onChange={() =>
                          toggleCheckBox(option, steLaptopSizes, laptopSizes)
                        }
                      />
                    }
                    label={option}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: 250 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Outfits</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {outfitOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={outfits.includes(option)}
                        onChange={() =>
                          toggleCheckBox(option, steOutfits, outfits)
                        }
                      />
                    }
                    label={option}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: 250 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Shop By</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {shopbyOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={outfits.includes(option)}
                        onChange={() =>
                          toggleCheckBox(option, steShopBy, shopby)
                        }
                      />
                    }
                    label={option}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* products part */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Sort by section */}
            <Box
              sx={{
                display: "flex",
                padding: 2,
                justifyContent: "flex-end",
              }}
            >
              <Accordion sx={{ width: 250 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Sort by</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {shopbyOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={outfits.includes(option)}
                          onChange={() =>
                            toggleCheckBox(option, steShopBy, shopby)
                          }
                        />
                      }
                      label={option}
                    />
                  ))}
                </AccordionDetails>
              </Accordion>
            </Box>
            {/*  product image and details section1 */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: { xs: 2, md: 4 },
                paddingX: { xs: 1, md: 2 },
                paddingY: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                      : theme.shadows[5],
                  paddingY: 4,
                  paddingX: 2,
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/bag.png"
                  alt="Bag Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  Bag
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  ₹1000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                      : theme.shadows[5],
                  paddingY: 4,
                  paddingX: 2,
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/bag1.png"
                  alt="Bag Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  Bag
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  ₹1000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                      : theme.shadows[5],
                  paddingY: 4,
                  paddingX: 2,
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/bag2.png"
                  alt="Bag Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  Bag
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  ₹1000
                </Typography>
              </Box>
            </Box>
            {/*  product image and details section2 */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: { xs: 2, md: 4 },
                paddingX: { xs: 1, md: 2 },
                paddingY: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                      : theme.shadows[5],
                  paddingY: 4,
                  paddingX: 2,
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/bag2.png"
                  alt="Bag Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  Bag
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  ₹1000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                      : theme.shadows[5],
                  paddingY: 4,
                  paddingX: 2,
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/bag2.png"
                  alt="Bag Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  Bag
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  ₹1000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
                      : theme.shadows[5],
                  paddingY: 4,
                  paddingX: 2,
                  borderRadius: "20px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/bag.png"
                  alt="Bag Image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  Bag
                </Typography>
                <br />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  align="center"
                >
                  ₹1000
                </Typography>
              </Box>
            </Box>
            {/* next,previous buttons section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingY: 4,
                paddingX: 4,
              }}
            >
              <Button
                sx={{
                  color: "black",
                  bgcolor: "whitesmoke",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
              >
                Previous
              </Button>
              <Pagination
                variant="outlined"
                shape="rounded"
                siblingCount={1}
                boundaryCount={1}
              />
              <Button
                sx={{
                  color: "black",
                  bgcolor: "whitesmoke",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        <ProductFeat />
        <News />
      </Container>
    </>
  );
}
