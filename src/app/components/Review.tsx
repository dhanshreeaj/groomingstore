"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  useTheme,
} from "@mui/material";
import { Avatar } from "@mui/material";
export default function Review() {
  const theme = useTheme();
  const cardStyles = {
    width: { xs: "90%", sm: 280 },
    height: "auto",
    borderRadius: "15px",
    display: "flex",
    padding: 2,
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.2s ease-in-out",
    bgcolor: theme.palette.mode === "dark" ? "white" : "black",
    color: theme.palette.mode === "dark" ? "black" : "white",
    "&:hover": {
      transform: "rotate(5deg)",
      backgroundColor: "grey",
      boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
    },
    mx: "auto",
  };

  interface ReviewCardProps {
    name: string;
    avatarUrl?: string;
    review: string;
  }

  const Card: React.FC<ReviewCardProps> = ({ name, avatarUrl, review }) => (
    <Box sx={cardStyles}>
      <IconButton>
        <Avatar src={avatarUrl} alt={name} />
      </IconButton>
      <Typography variant="subtitle1" fontWeight="bold" mt={1}>
        {name}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        sx={{ fontSize: { xs: 12, sm: 15 }, mt: 1 }}
      >
        {review}
      </Typography>
    </Box>
  );

  const reviews: ReviewCardProps[] = [
    {
      name: "Rahul Sharma",
      avatarUrl: "/avatars/rahul.jpg",
      review:
        "Stallion Grooming’s beard oil has transformed my routine—my beard has never felt softer!",
    },
    {
      name: "Arun Patel",
      avatarUrl: "/avatars/arun.jpg",
      review:
        "Excellent products and quick delivery. My skin feels healthier every day.",
    },
    {
      name: "Vikram Singh",
      avatarUrl: "/avatars/vikram.jpg",
      review:
        "Top‑notch customer service and quality. The shave cream is a game‑changer.",
    },
    {
      name: "Manish Kumar",
      avatarUrl: "/avatars/manish.jpg",
      review:
        "Love the natural ingredients—no irritation and great scent. Highly recommend!",
    },
    {
      name: "Anil Kapoor",
      avatarUrl: "/avatars/anil.jpg",
      review:
        "Eco‑friendly packaging and premium feel. Will definitely reorder soon.",
    },
    {
      name: "Ravi Desai",
      avatarUrl: "/avatars/ravi.jpg",
      review:
        "Fantastic value for money. Delivery was on time and products exceeded expectations.",
    },
  ];

  return (
    <>
      {/*main containt */}
      <Box sx={{ display: "flex", padding: 2, justifyContent: "center" }}>
        <Container maxWidth="xl">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            {/* <Button
              variant="outlined"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
                textTransform: "none",
                borderRadius: "25px",
                borderColor: "black",
                "&:hover": {
                  bgcolor: "grey",
                  color: "white",
                },
              }}
            >
              Read Customer Reviews
            </Button> */}
            {/*title & intro  */}
            <Box
              sx={{
                textAlign: "center",
                padding: 2,
                justifyContent: "center",
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                align="center"
                gutterBottom
              >
                What Our Customers Say
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={{ xs: 13, sm: 15 }}
                mt={1}
              >
                Discover why men across India trust Stallion Grooming for
                premium, natural grooming essentials. From beard care to
                skincare, our products are designed for effortless confidence.
              </Typography>
            </Box>

            {/*review containt */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 4, md: 6 },
                width: { xs: "100%", sm: "90%", md: 1100 },
              }}
            >
              {/*first row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5, md: 10 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {reviews.slice(0, 3).map((r) => (
                  <Card key={r.name} {...r} />
                ))}
              </Box>
              {/* second row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5, md: 10 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {reviews.slice(3, 6).map((r) => (
                  <Card key={r.name} {...r} />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
