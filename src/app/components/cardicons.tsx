"use client";

import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  Stack,
  Divider,
} from "@mui/material";

// 1️⃣ Replace your USPS array with grooming‑focused points:
const USPS = [
  {
    title: "Premium Natural Ingredients",
    desc: "Formulated with high‑quality oils and butters for healthier skin & hair.",
  },
  {
    title: "Precision Formulas",
    desc: "Each product targets specific needs like beard growth, hydration, or shine.",
  },
  {
    title: "Eco‑Friendly Packaging",
    desc: "Sustainable, recyclable materials that look and feel premium.",
  },
  {
    title: "Fast Nationwide Delivery",
    desc: "Get your grooming essentials delivered across India in 3–7 business days.",
  },
  {
    title: "Expert Curation",
    desc: "Handpicked and tested by professional barbers and grooming experts.",
  },
];

export default function CardIcon() {
  const theme = useTheme();
  return (
    <>
      {/*main part box */}

      <Box
        sx={{
          display: "flex",
          padding: { xs: 2, md: 4 },
          gap: { xs: 2, md: 4 },
          backgroundColor: "black",
          justifyContent: "center",
          bgcolor: theme.palette.mode === "dark" ? "white" : "black",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/*info box part */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "5%",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              paddingY: { xs: 2, md: 4 },
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            {/*text part */}
            <Box sx={{ padding: 2, justifyContent: "center" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                align="center"
                sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}
              >
                Why Choose Stallion Grooming
              </Typography>
              <br></br>
              <Typography
                variant="h6"
                align="center"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
              >
                At Stallion Grooming, we blend premium natural ingredients with
                modern formulations to deliver effortless, effective grooming
                solutions tailored for the modern man.
              </Typography>
              <br></br>
              {/*button part */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "0.4rem", md: "1rem" },
                    color: "black",
                    backgroundColor: "white",
                    textTransform: "none",
                    justifyContent: "center",
                    borderRadius: "20px",
                    borderColor: "black",
                    "&:hover": {
                      bgcolor: "black",
                      color: "white",
                    },
                  }}
                >
                  Shop Now{" "}
                </Button>
              </Box>
            </Box>
            <Stack
              direction={{ md: "row" }}
              sx={{
                padding: 4,
                gap: { xs: 4, sm: 4, md: 4 },
                justifyContent: "center",
                alignItems: { xs: "center", md: undefined },
              }}
            >
              {USPS.map(({ title, desc }) => (
                <Box
                  key={title}
                  sx={{
                    p: 2,
                    width: { xs: 120, sm: 200, md: 250 },
                    borderRadius: 2,
                    bgcolor: "black",
                    aspectRatio: "1 / 1",
                    "*": {
                      textAlign: "center",
                    },
                    color: "white",
                    "&:hover": { bgcolor: "grey", cursor: "pointer" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>
                  <Divider
                    flexItem
                    sx={{ mb: 3, borderBottomColor: "white" }}
                  />
                  <Typography variant="body2" align="center">
                    {desc}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

{
  /* <Box
                sx={{
                  display: "flex",
                  backgroundColor: "black",
                  width: { xs: 80, sm: 125, md: 250 },
                  height: { xs: 120, sm: 150, md: 300 },
                  borderRadius: "20px",
                  bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  "&:hover": {
                    backgroundColor: "grey",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  padding={2}
                  sx={{
                    fontSize: { xs: "0.4rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Accurate Accounting Automation
                </Typography>
                <br />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "black",
                  width: { xs: 80, sm: 125, md: 250 },
                  height: { xs: 120, sm: 150, md: 300 },
                  borderRadius: "20px",
                  bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  "&:hover": {
                    backgroundColor: "grey",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  padding={2}
                  sx={{
                    fontSize: { xs: "0.4rem", sm: "0.8rem", md: "1rem" },
                  }}
                >
                  Order Fulifilment Automation
                </Typography>
              </Box> */
}
