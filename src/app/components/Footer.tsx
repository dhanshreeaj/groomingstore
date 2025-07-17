"use client";

import { Box, Typography, Button, IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FaceBookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
    return (
        <>
            {/*main containt */}
            <Box sx={{
                display: "flex",
                padding: 8,
                gap: 2,
                backgroundColor: "black",
                alignItems: "center",
            }}>
                {/* footer containt*/}
                <Box sx={{
                    display: "flex",
                    padding: 3,
                    gap: 1,
                    flexDirection: "column",
                    bgcolor: "white",
                    borderRadius: "12px",
                    width: 1200,
                    height: 500
                }}>
                    {/* first box part for socail media */}
                    <Box sx={{
                        display: "flex",
                        width: 1100,
                        height: 400
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row"
                        }}></Box>
                        {/* social media containt */}
                        <Box sx={{
                            display: "flex",
                            padding: 6,
                            gap: 1,
                            flexDirection: "column"
                        }}>
                            <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={60}>
                                Hashnode
                            </Typography>
                            <Typography variant="h6" color="black" fontSize={15}>
                                Hassle-free blogging platform that developers and team love.
                            </Typography>
                            <Box>
                                <IconButton
                                    color="inherit"
                                    href="https://x.com/i/flow/login"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <XIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    href="https://www.linkedin.com/login"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaceBookIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    href="https://www.instagram.com/accounts/login/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <YouTubeIcon />
                                </IconButton>
                            </Box>
                            <Button variant="outlined" sx={{
                                bgcolor: "black",
                                color: "white",
                                borderRadius: "10px",
                                borderColor: "grey",
                                width: 240
                            }}>All systems operational </Button>
                        </Box>
                        {/* company detail */}
                        <Box sx={{
                            display: "flex",
                            width: 800,
                            padding: 2,
                            gap: 1,
                            flexDirection: "row"
                        }}>
                            {/* first section */}
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: 200,
                                height: 350,
                                padding: 2,
                                gap:1
                            }}>
                                <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={20}>
                                    Product
                                </Typography>
                                <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Headless CMS</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Pricing</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > GraphQL APIs</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                >Open source Starter-kit</Typography><br/>
                                <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={20}>
                                    Explore
                                </Typography>
                                <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > My feed</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Case studies</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Hashnode AI</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                >Referral Program</Typography>
                                
                            </Box>
                            {/* srcond section */}
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: 200,
                                height: 350,
                                padding:2,
                                gap:1
                            }}>
                                <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={20}>
                                    Company
                                </Typography>
                                <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > About Hashnode</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Careers</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Logos and media </Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                >Changelog</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                >Feature Request</Typography><br/>
                                <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={20}>
                                    Blogs
                                </Typography>
                                <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Offical Blog</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                >Enginerring Blog</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Hashnode Townhall</Typography>
                            </Box>
                            {/* third section */}
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: 200,
                                height: 350,
                                padding:2,
                                gap:1
                            }}>
                                <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={20}>
                                    Partner with us
                                </Typography>
                                <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Host a Hackathon</Typography>
                                <br/>
                                <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={20}>
                                    Support
                                </Typography>
                                <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Support docs</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Contact</Typography>
                                 <Typography variant="caption" color="grey"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}
                                > Join discard</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {/* second box for year and policy section */}
                    <Box sx={{
                        display: "flex",
                        width: 1100,
                        height: 100,
                        gap:2,
                        padding:1
                    }}>
                        {/*year */}
                        <Box sx={{
                            display:"flex",
                            width:700,
                            padding:2
                        }}>
                            <Typography variant="subtitle1" color="grey" >
                                © 2025 Hashnode-LinearBytes Inc.
                            </Typography>
                        </Box>
                        {/* policy section */}
                         <Box sx={{
                            display:"flex",
                            width:400,
                            padding:2,
                            gap:2
                        }}>
                        <Typography variant="subtitle1" color="grey"
                         sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }} >Privacy Ploicy</Typography>
                         <Typography variant="subtitle1" color="grey"
                          sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }} >Terms</Typography>
                          <Typography variant="subtitle1" color="grey" 
                           sx={{
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "black",
                                        }
                                    }}>Code of Conduct</Typography></Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}