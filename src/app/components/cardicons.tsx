"use client";

import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  Stack,
} from "@mui/material";

const USPS = [
  { title: "Automate Ecommerece Operation" },
  { title: "Accurate Accounting Automation" },
  { title: "Order Fulifilment Automation" },
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
                Unique Selling Point
              </Typography>
              <br></br>
              <Typography
                variant="h6"
                align="center"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
              >
                A unique selling proposition to the unique benifit exhibited{" "}
                <br />
                by a company, service product or brands that enabies it so stand
                out from compotiotions.
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
                  Get Started
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
              {USPS.map((usp) => {
                return (
                  <Box
                    key={usp.title}
                    sx={{
                      display: "flex",
                      backgroundColor: "black",
                      width: { xs: 80, sm: 125, md: 250 },
                      height: { xs: 120, sm: 150, md: 300 },
                      borderRadius: "20px",
                      bgcolor:
                        theme.palette.mode === "dark" ? "white" : "black",
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
                      {usp.title}
                    </Typography>
                  </Box>
                );
              })}
              {/* <Box
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
              </Box> */}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
