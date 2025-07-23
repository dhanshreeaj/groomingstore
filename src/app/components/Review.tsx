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
    width: { xs: "90%", sm: 280, md: 350 },
    height: { sm: 280, md: 350 },
    // height: "auto",
    // aspectRatio: "1/1",
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
    // mx: "auto",
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
      review: `
      Stallion Grooming’s beard oil has completely transformed my daily routine. 
      The lightweight, non-greasy formula absorbs in seconds, leaving my beard softer 
      and more manageable than ever. I’ve noticed less itching and more shine, and 
      the subtle sandalwood scent is both fresh and masculine.
    `.trim(),
    },
    {
      name: "Arun Patel",
      avatarUrl: "/avatars/arun.jpg",
      review: `
      I’ve struggled with dry, flaky skin for years, but Stallion’s moisturizer 
      and face wash combo has made a huge difference. My skin feels hydrated 
      all day without any greasy residue, and I’ve seen a noticeable reduction 
      in redness. Plus, the products arrived in stylish, eco-friendly packaging.
    `.trim(),
    },
    {
      name: "Vikram Singh",
      avatarUrl: "/avatars/vikram.jpg",
      review: `
      From ordering to first use, the experience was flawless. The shave cream 
      lathers beautifully and provides a super-smooth shave without any nicks or 
      irritation. Their customer support answered my questions within hours, and 
      delivery was right on schedule.
    `.trim(),
    },
    {
      name: "Manish Kumar",
      avatarUrl: "/avatars/manish.jpg",
      review: `
      I was initially skeptical about natural grooming products, but Stallion’s 
      line truly delivers. My skin feels clearer and more balanced, and the subtle 
      cedarwood scent lasts through the day. It’s now my go-to brand for daily care.
    `.trim(),
    },
    {
      name: "Anil Kapoor",
      avatarUrl: "/avatars/anil.jpg",
      review: `
      The eco-friendly packaging caught my eye, and the premium feel kept me 
      coming back. Every bottle is crafted with attention to detail, and I love 
      knowing I’m supporting a sustainable brand. Will definitely be gifting 
      these to my friends.
    `.trim(),
    },
    {
      name: "Ravi Desai",
      avatarUrl: "/avatars/ravi.jpg",
      review: `
      Exceptional value for money. The starter kit was affordably priced, and 
      refills help keep costs down. All items arrived well-packaged, and the 
      delivery was prompt. Highly recommend for anyone looking to upgrade 
      their grooming routine.
    `.trim(),
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
                justifyContent: "space-between",
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
                width: { xs: "100%" },
              }}
            >
              {/*first row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 3, sm: 5, md: 10 },
                  justifyContent: "space-between",
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
                  justifyContent: "space-between",
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
