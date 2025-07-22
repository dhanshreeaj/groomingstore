"use client";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Container,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ProductsPages() {
  const theme = useTheme();
  return (
    <>
      {/*main containt part */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: 2, sm: 4, md: 8 },
          gap: 2,
          alignItems: "center",
          flexDirection: "column",
          bgcolor: theme.palette.mode === "dark" ? "white" : "black",
          color: theme.palette.mode === "dark" ? "black" : "white",
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
          {/*first box section */}
          {/*products contain */}
          <Box
            sx={{
              display: "flex",
              height: "auto",
              flexDirection: { xs: "column", md: "row" },
              width: { xs: "100%", sm: "80%", md: 1100 },
              gap: { xs: 0.8, md: 1.5 },
              paddingY: { xs: 2, md: 4 },
              marginBottom: 2,
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            {/*left section */}
            <Box
              sx={{
                width: { xs: "100%", md: 300 },
                padding: { xs: 2, md: 4 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}
              >
                Our Popular Product
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: 12, md: 16 } }}>
                Stallion Grooming elevates your daliy routine blending
                care,confidenece.
              </Typography>
              <br />
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
                mt={2}
              >
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                    color: theme.palette.mode === "dark" ? "black" : "white",
                    textTransform: "none",
                    borderRadius: "10px",
                    borderColor: "black",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  ←
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    bgcolor: "white",
                    borderColor: "black",
                    textTransform: "none",
                    borderRadius: "10px",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  →
                </Button>
              </Stack>
            </Box>
            {/* product section */}
            {[
              { img: "/perfum.png", title: "Stallion Perfum" },
              { img: "/facewash.png", title: "Face Wash" },
              { img: "/faceserium2.png", title: "Face Serum" },
            ].map((iteam, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  backgroundColor: "lightgrey",
                  width: { xs: "80%", sm: 200, md: 250 },
                  height: { xs: 200, md: 250 },
                  borderRadius: "20px",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  p: 2,
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={iteam.img}
                    alt="Product image"
                    width={150}
                    height={150}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="black"
                    fontWeight="bold"
                    fontSize={{ xs: 12, md: 15 }}
                  >
                    {iteam.title}
                  </Typography>
                  <IconButton
                    sx={{
                      borderRadius: "50%",
                      width: 10,
                      height: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #333",
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>

          {/*second box section */}
          {/* product category */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              flexDirection: { xs: "column", md: "row" },
              width: { xs: "100%", sm: "90%", md: 1100 },
              gap: { xs: 2, md: 1.5 },
              p: { xs: 2, md: 3 },
              bgcolor: theme.palette.mode === "dark" ? "black" : "white",
              color: theme.palette.mode === "dark" ? "black" : "white",
            }}
          >
            {/*product image by category */}
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              <Typography
                variant="subtitle1"
                fontSize={{ xs: 12, md: 14 }}
                paddingY={2}
                align="center"
              >
                PRODUCT BY CATEGORY
              </Typography>
              {/*image section of product */}
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "lightgray",
                  width: { xs: 200, sm: 250 },
                  height: { xs: 200, sm: 250 },
                  mx: "auto",
                  borderRadius: "20px",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/perfum.png"
                  alt="Product image"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>

            {/*product category name */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {["Face Care", "Body Care", "Hair care"].map((cat) => (
                <Typography
                  key={cat}
                  variant="h3"
                  color="grey"
                  fontSize={{ xs: 35, md: 50 }}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    },
                    mt: { xs: 1, md: 2 },
                  }}
                >
                  {cat}
                </Typography>
              ))}
            </Box>

            {/*product details */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              <Typography
                variant="h6"
                fontSize={{ xs: 18, md: 24 }}
                fontWeight="bold"
              >
                Stallion Body Care
              </Typography>
              <Typography variant="h6" fontSize={{ xs: 10, md: 12 }} mt={1}>
                Stallion Grooming elevates your daliy routine blending
                care,confidenece and community in every moment.
              </Typography>
              <br />
              <Stack
                direction="row"
                spacing={4}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                    color: theme.palette.mode === "dark" ? "black" : "white",
                    textTransform: "none",
                    borderRadius: "30px",
                    borderColor: "black",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  View Our Collections
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                    color: theme.palette.mode === "dark" ? "black" : "white",
                    borderColor: "black",
                    textTransform: "none",
                    borderRadius: "15px",
                    "&:hover": {
                      bgcolor: "grey",
                      color: "white",
                    },
                  }}
                >
                  →
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
