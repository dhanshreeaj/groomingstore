import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const ShippingAndDelivery: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Shipping &amp; Delivery
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      Last updated: July 23, 2025
    </Typography>

    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Shipping Methods
      </Typography>
      <Typography variant="body1" paragraph>
        We ship via third‑party carriers such as Delhivery and Blue Dart. You
        may see the available options at checkout.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Shipping Rates
      </Typography>
      <Typography variant="body1" paragraph>
        Shipping charges are calculated at checkout based on package weight,
        dimensions, and destination PIN code.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Delivery Time Estimates
      </Typography>
      <Typography variant="body1" paragraph>
        Estimated delivery is 3–7 business days for metro cities and 5–10
        business days for remote areas. Actual times may vary due to carrier
        delays beyond our control.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Order Tracking
      </Typography>
      <Typography variant="body1" paragraph>
        Once your order ships, you’ll receive a tracking ID via email. Track
        your shipment on the
        <Link href="/track-order" underline="hover">
          {" "}
          Track Order
        </Link>{" "}
        page.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Shipping Restrictions
      </Typography>
      <Typography variant="body1" paragraph>
        We currently ship within India only. Certain P.O. boxes and remote PIN
        codes may not be serviceable.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Lost or Damaged Items
      </Typography>
      <Typography variant="body1" paragraph>
        If your package is lost or arrives damaged, please report it within 7
        days of the estimated delivery date. Contact us at{" "}
        <Link href="mailto:support@stalliongrooming.com" underline="hover">
          support@stalliongrooming.com
        </Link>
        .
      </Typography>

      <Typography variant="body1">
        For any other questions, visit our{" "}
        <Link href="/contact" underline="hover">
          Contact Page
        </Link>
        .
      </Typography>
    </Box>
  </Container>
);

export default ShippingAndDelivery;
