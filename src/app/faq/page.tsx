// File: components/FAQ.tsx

"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";

const faqs = [
  {
    question: "What products does Stallion Grooming offer?",
    answer:
      "We offer beard oils, balms, shampoos, conditioners, shave creams, and grooming essentials formulated with premium natural ingredients.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Browse our products, add them to your cart, and proceed to checkout via Razorpay or select Cash on Delivery where available.",
  },
  {
    question: "What is your cancellation & refund policy?",
    answer:
      "You may cancel within 24 hours before shipment. Prepaid refunds are issued via Razorpay within 7 business days. COD orders cannot be canceled after dispatch.",
  },
  {
    question: "Do you ship nationwide and what are the charges?",
    answer:
      "Yes, we ship across India. Shipping charges are calculated at checkout based on package weight and destination PIN code.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 3–7 business days in metro cities and 5–10 business days in remote areas.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you’ll receive a tracking ID via email and SMS. Track it on our Track Order page.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept prepaid payments via Razorpay (UPI, cards, netbanking) and Cash on Delivery where available.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Email us at support@stalliongrooming.com or chat with us using the live chat widget.",
  },
];

export default function FAQ() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 14 },
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Intro Section */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 1, md: 2 },
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Button
            startIcon={<ForumIcon />}
            component={Link}
            href="/contact"
            sx={{
              textTransform: "none",
              mt: 1,
              color: theme.palette.text.primary,
            }}
          >
            Still need help? Chat with us.
          </Button>
        </Box>

        {/* FAQ List */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: { xs: 1, md: 2 },
          }}
        >
          {faqs.map((faq, idx) => (
            <Accordion key={idx} sx={{ color: theme.palette.text.secondary }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: theme.palette.text.secondary }}
                  />
                }
                sx={{
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper": { mr: 1 },
                  color: theme.palette.text.secondary,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
