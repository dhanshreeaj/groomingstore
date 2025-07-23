// File: components/About.tsx

import React from "react";
import { Container, Typography, Box, Link, useTheme } from "@mui/material";
const About: React.FC = () => (
  <Container
    maxWidth="md"
    sx={{
      py: 14,
    }}
  >
    <Typography variant="h4" gutterBottom>
      About Stallion Grooming
    </Typography>
    <Typography variant="body1" paragraph>
      Founded in 2025, Stallion Grooming is on a mission to redefine men’s
      self‑care in India. We blend premium, natural ingredients with modern
      formulations to help you look and feel your best—effortlessly.
    </Typography>

    <Box mt={3}>
      <Typography variant="h6" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        To empower every man with straightforward, effective grooming essentials
        that build confidence and keep your routine simple.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Our Values
      </Typography>
      <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
        <li>Quality: We source the finest natural ingredients.</li>
        <li>Simplicity: No-nonsense formulas, clear instructions.</li>
        <li>Transparency: Honest labeling, ethical sourcing.</li>
        <li>Customer First: Your satisfaction drives us.</li>
      </Typography>

      <Typography variant="body1" paragraph>
        Join us on the journey—discover more on our{" "}
        <Link href="/contact" underline="hover">
          Contact Page
        </Link>
        .
      </Typography>
    </Box>
  </Container>
);

export default About;
