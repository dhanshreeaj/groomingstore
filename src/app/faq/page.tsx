"use client";

import { Box, Container, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function FAQ() {
    return (
        <>
        {/* main containt */}
            <Box sx={{
                display: "flex",
                padding: 8,
                gap: 2,
                justifyContent:"center"
            }}>
                <Container maxWidth="xl" sx={{
                display:"flex",
                flexDirection:"row",
             }}>
                {/* left side title section */}
                <Box sx={{
                    display: "flex",
                    padding: 2,
                    width: 600,
                    flexDirection: "column",
                }}>
                    <Typography variant="h6" color="black" fontWeight="bold" fontSize={40}>
                        Frequently asked questions
                    </Typography>
                    <br />
                    <Typography variant="h6" color="black" fontWeight="bold"
                        sx={{
                            cursor: "pointer",
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: "grey",
                            }
                        }}>
                        <ForumIcon fontSize="medium" />Stiil need help?Chat to us.
                    </Typography>
                </Box>
                {/* right side section of QA */}
                <Box sx={{
                    display: "flex",
                    padding: 8,
                    flexDirection:"column",
                    gap:2
                }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                What do we do?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                               Getting started with Untitled
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Installing Untitle
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                The messenger
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Our next-gen inbox
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                How do tickets work?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                How does support work?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                bgcolor:"gre",
                                flexDirection: "row-reverse",
                                "&.MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "4px"
                                },
                            }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                How does billing work?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle2">
                                Millions of businesses of all sizes use our platform and APIs to
                                accept payments and manage their businesses online.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box></Container>
            </Box>
        </>
    )
}