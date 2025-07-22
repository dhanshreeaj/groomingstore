"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function FAQ() {
  const theme = useTheme();
  return (
    <>
      {/* main containt */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: 2, md: 8 },
          justifyContent: "center",
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
          {/* left side title section */}
          <Box
            sx={{
              flex: 1,
              padding: { xs: 1, md: 2 },
              width: { xs: "100%", md: 600 },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              fontSize={{ xs: 24, sm: 32, md: 40 }}
              mb={2}
            >
              Frequently asked questions
            </Typography>
            <br />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                cursor: "pointer",
                transition: "color 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "grey" },
              }}
            >
              <ForumIcon fontSize="medium" />
              Stiil need help?Chat to us.
            </Typography>
          </Box>
          {/* right side section of QA */}
          <Box
            sx={{
              flex: 1,
              padding: { xs: 1, md: 2 },
              gap: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  What do we do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Getting started with Untitled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Installing Untitle
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  The messenger
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Our next-gen inbox
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  How do tickets work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  How does support work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: "gre",
                  flexDirection: "row-reverse",
                  "&.MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "4px",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  How does billing work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2">
                  Millions of businesses of all sizes use our platform and APIs
                  to accept payments and manage their businesses online.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </>
  );
}
