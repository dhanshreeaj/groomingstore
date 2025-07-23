import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";

const TermsAndConditions: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Terms &amp; Conditions
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      Last updated: July 23, 2025
    </Typography>

    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing or using Stallion Grooming (a brand of TechTapestry), you
        agree to these Terms &amp; Conditions. If you do not agree, please do
        not use our website or services.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Eligibility
      </Typography>
      <Typography variant="body1" paragraph>
        You must be at least 13 years old to register and transact. By creating
        an account, you affirm you are legally capable of entering into this
        agreement.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Cancellation &amp; Refund
      </Typography>
      <Typography variant="body1" paragraph>
        You may cancel an order within 24 hours of placement and before
        shipment. Prepaid refunds are issued via Razorpay to your original
        payment method within 7 business days of approval. COD orders cannot be
        cancelled after dispatch; returns are subject to product condition and
        return shipping charges.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Shipping &amp; Delivery
      </Typography>
      <Typography variant="body1" paragraph>
        We ship via third‑party carriers. Delivery times vary by PIN code and
        are estimates only. Shipping charges shown at checkout apply. Stallion
        Grooming is not liable for delays beyond our control.
      </Typography>

      <Typography variant="h6" gutterBottom>
        5. Third‑Party Services
      </Typography>
      <Typography variant="body1" paragraph>
        Payment processing is handled by Razorpay. We use Google Analytics for
        site metrics. Your use of these services is subject to their respective
        terms and privacy policies.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All site content—text, images, logos—is owned by Stallion Grooming. You
        may view and print for personal use only. Reviews or photos you submit
        remain yours, but you grant us a non‑exclusive, worldwide license to
        display and distribute them.
      </Typography>

      <Typography variant="h6" gutterBottom>
        7. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        To the fullest extent permitted by law, Stallion Grooming is not liable
        for any indirect, incidental, special, or consequential damages arising
        from your use of our site or products.
      </Typography>

      <Typography variant="h6" gutterBottom>
        8. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms are governed by the laws of India. Exclusive jurisdiction
        and venue are the courts of Mumbai (including Navi Mumbai).
      </Typography>

      <Typography variant="h6" gutterBottom>
        9. Contact
      </Typography>
      <Typography variant="body1">
        Questions? Visit our{" "}
        <Link href="/contact" underline="hover">
          Contact Page
        </Link>{" "}
        or email us at{" "}
        <Link href="mailto:support@stalliongrooming.com" underline="hover">
          support@stalliongrooming.com
        </Link>
        .
      </Typography>
    </Box>
  </Container>
);

export default TermsAndConditions;
