// File: components/CancellationAndRefund.tsx

import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Link,
} from "@mui/material";

const CancellationAndRefund: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Cancellation &amp; Refund Policy
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      Last updated: July 23, 2025
    </Typography>

    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Order Cancellation
      </Typography>
      <Typography variant="body1" paragraph>
        You may cancel your order within 24 hours of placement and before it has
        been shipped.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Refunds
      </Typography>
      <Typography variant="body1" paragraph>
        Prepaid order refunds are issued via Razorpay to your original payment
        method within 7 business days of approval. COD orders cannot be
        cancelled after dispatch; refunds for returned COD orders will be
        processed as store credit or bank transfer, subject to inspection.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Returns
      </Typography>
      <Typography variant="body1" paragraph>
        Return requests must be made within 7 days of delivery. Returns are
        subject to the product being in its original condition. Return shipping
        charges are borne by the customer.
      </Typography>

      <Typography variant="body1">
        For any questions, visit our{" "}
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

export default CancellationAndRefund;
