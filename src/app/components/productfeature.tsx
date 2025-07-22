"use client";
import Image from "next/image";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";

export default function ProductFeatures() {
  const theme = useTheme();
  return (
    <>
      {/*main containt part */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: 2, sm: 4, md: 8 },
          justifyContent: "center",
          bgcolor: theme.palette.mode === "dark" ? "black" : "white",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/*feature box containt part */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: "black",
              borderRadius: "15px",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: theme.palette.mode === "dark" ? "white" : "black",
              width: { xs: "100%", sm: 500, md: 900 },
              height: "auto",
              padding: { xs: 0.5, sm: 3, md: 6 },
            }}
          >
            {/*left side containt */}
            <Box
              sx={{
                padding: { xs: 0.5, sm: 1.5, md: 4 },
                backgroundColor: "black",
                textAlign: "center",
                borderRadius: "15px",
                justifyContent: "center",
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Expert Technicians
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Our certificated experts provide top-quality service. Trust us
                for accurante diagonstics and repairs.
              </Typography>
              <br />
              <br />
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Fast Turnaround
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                Get back on the road quickly with our effcient service.Most
                repairs are completed within the same day.
              </Typography>
            </Box>
            {/*center containt */}
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: { xs: 2, sm: 3, md: 4 },
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" } }}
              >
                Why choose us?
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                From route maintance to major repairs, We got your car coverd
                with reliable and friendly service.
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  mt: 3,
                  width: { xs: 120, sm: 180, md: 300 },
                  height: { xs: 120, sm: 180, md: 300 },
                }}
              >
                <Image
                  src="/productfeature.png"
                  alt="Product Feature Image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
                    textTransform: "none",
                    borderColor: "black",
                    bgcolor: theme.palette.mode === "dark" ? "black" : "white",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  Get a Free quote
                </Button>
              </Box>
            </Box>
            {/*right side containt */}
            <Box
              sx={{
                padding: { xs: 1.5, sm: 3, md: 4 },
                textAlign: "center",
                backgroundColor: "black",
                borderRadius: "15px",
                justifyContent: "center",
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                Affordable Pricing
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                High-quality repairs at prices you can afford.No hidden
                fees,just honest and transparent pricing.
              </Typography>
              <br />
              <br />
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.3rem" } }}
              >
                All-Inclusive Services
              </Typography>
              <br />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
                  mt: 1,
                }}
              >
                From routine maintenace to complex repairs,we handle it all.You
                one-stop shop for all your car care needs.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
