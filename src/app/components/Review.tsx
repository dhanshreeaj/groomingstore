"use client";

import { Box, Typography, Button, IconButton, Container } from "@mui/material";
import { Avatar } from "@mui/material";
export default function Review() {
    return (
        <>
            {/*main containt */}
            <Box sx={{
                display: "flex",
                padding: 2,
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                  <Container maxWidth="xl" sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:4
             }}>
                <Button variant="outlined" sx={{
                    color:"black",bgcolor:"white",textTransform:"none",borderRadius:"25px",borderColor:"black",
                     "&:hover":{
                       bgcolor:"black",
                        color:"white"
                    }
                }}>Testimonials</Button>
                {/*title containt */}
                <Box sx={{ padding: 2, justifyContent: "center" }}>
                    <Typography variant="subtitle1" color="black" fontWeight="bold" fontSize={30} align="center">
                        Our Trusted clients
                    </Typography>
                    <Typography variant="subtitle2" color="balck" fontSize={15} align="center">
                        Our mission is to progress enhance the lives of our customers by delivering <br />
                        superior products and services that exceed expectation.
                    </Typography>
                </Box>
                {/*review containt */}
                <Box sx={{
                    display: "flex",
                    height: 650,
                    width: 1100,
                    gap:3,
                    padding: 2,
                    marginBottom: 2,
                    flexDirection: "column"
                }}>
                    {/*first row */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        padding: 2,
                        gap: 10,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Box sx={{
                            backgroundColor: "black",
                            width: 280,
                            height: 260,
                            borderRadius: "15px",
                            display: "flex",
                            padding: 2,
                            flexDirection:"column",
                            alignItems:"center",
                            transition:"transform 0.2s ease-in-out",
                            "&:hover":{
                                transform:"rotate(10deg)",
                                backgroundColor: "grey",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                            }
                        }}>
                            <Box>
                            <IconButton sx={{
                                width: 10,
                                height: 5,
                            }} onClick={() => alert("Profile clicked")}>
                                <Avatar />
                            </IconButton></Box>
                            <Typography variant="subtitle1" color="white" padding={2}  fontWeight="bold">User Name</Typography>
                            <Typography variant="h6" color="white" fontSize={15} align="center">
                                If you are not using testimonials,youre missing out on a golden opprtuntity to
                                 trun visitors and potential buyers into actual customers.
                            </Typography>
                        </Box>
                       <Box sx={{
                            backgroundColor: "black",
                            width: 280,
                            height: 260,
                            borderRadius: "15px",
                            display: "flex",
                            padding: 2,
                            flexDirection:"column",
                            alignItems:"center",
                             transition:"transform 0.2s ease-in-out",
                            "&:hover":{
                                transform:"rotate(10deg)",
                                backgroundColor: "grey",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                            }
                        }}>
                             <Box>
                            <IconButton sx={{
                                width: 10,
                                height: 5,
                            }} onClick={() => alert("Profile clicked")}>
                                <Avatar />
                            </IconButton></Box>
                            <Typography variant="subtitle1" color="white" padding={2}  fontWeight="bold">User Name</Typography>
                            <Typography variant="h6" color="white" fontSize={15} align="center">
                                If you are not using testimonials,youre missing out on a golden opprtuntity to
                                 trun visitors and potential buyers into actual customers.
                            </Typography>
                        </Box>
                       <Box sx={{
                            backgroundColor: "black",
                            width: 280,
                            height: 260,
                            borderRadius: "15px",
                            display: "flex",
                            padding: 2,
                            flexDirection:"column",
                            alignItems:"center",
                             transition:"transform 0.2s ease-in-out",
                            "&:hover":{
                                transform:"rotate(10deg)",
                                backgroundColor: "grey",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                            }
                        }}> 
                        <Box>
                            <IconButton sx={{
                                width: 10,
                                height: 5,
                            }} onClick={() => alert("Profile clicked")}>
                                <Avatar />
                            </IconButton></Box>
                            <Typography variant="subtitle1" color="white" padding={2}  fontWeight="bold">User Name</Typography>
                            <Typography variant="h6" color="white" fontSize={15} align="center">
                                If you are not using testimonials,youre missing out on a golden opprtuntity to
                                 trun visitors and potential buyers into actual customers.
                            </Typography>
                        </Box>
                        </Box>
                    {/* second row */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        padding: 2,
                        gap: 10,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                       <Box sx={{
                            backgroundColor: "black",
                            width: 280,
                            height: 260,
                            borderRadius: "15px",
                            display: "flex",
                            padding: 2,
                            flexDirection:"column",
                            alignItems:"center",
                             transition:"transform 0.2s ease-in-out",
                            "&:hover":{
                                transform:"rotate(10deg)",
                                backgroundColor: "grey",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                            }
                        }}>
                             <Box>
                            <IconButton sx={{
                                width: 10,
                                height: 5,
                            }} onClick={() => alert("Profile clicked")}>
                                <Avatar />
                            </IconButton></Box>
                            <Typography variant="subtitle1" color="white" padding={2}  fontWeight="bold">User Name</Typography>
                            <Typography variant="h6" color="white" fontSize={15} align="center">
                                If you are not using testimonials,youre missing out on a golden opprtuntity to
                                 trun visitors and potential buyers into actual customers.
                            </Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: "black",
                            width: 280,
                            height: 260,
                            borderRadius: "15px",
                            display: "flex",
                            padding: 2,
                            flexDirection:"column",
                            alignItems:"center",
                             transition:"transform 0.2s ease-in-out",
                            "&:hover":{
                                transform:"rotate(10deg)",
                                backgroundColor: "grey",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                            }
                        }}>
                             <Box>
                            <IconButton sx={{
                                width: 10,
                                height: 5,
                            }} onClick={() => alert("Profile clicked")}>
                                <Avatar />
                            </IconButton></Box>
                            <Typography variant="subtitle1" color="white" padding={2}  fontWeight="bold">User Name</Typography>
                            <Typography variant="h6" color="white" fontSize={15} align="center">
                                If you are not using testimonials,youre missing out on a golden opprtuntity to
                                 trun visitors and potential buyers into actual customers.
                            </Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: "black",
                            width: 280,
                            height: 260,
                            borderRadius: "15px",
                            display: "flex",
                            padding: 2,
                            flexDirection:"column",
                            alignItems:"center",
                             transition:"transform 0.2s ease-in-out",
                            "&:hover":{
                                transform:"rotate(10deg)",
                                backgroundColor: "grey",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                            }
                        }}>
                            <Box>
                            <IconButton sx={{
                                width: 10,
                                height: 5,
                            }} onClick={() => alert("Profile clicked")}>
                                <Avatar />
                            </IconButton></Box>
                            <Typography variant="subtitle1" color="white" padding={2}  fontWeight="bold">User Name</Typography>
                            <Typography variant="h6" color="white" fontSize={15} align="center">
                                If you are not using testimonials,youre missing out on a golden opprtuntity to
                                 trun visitors and potential buyers into actual customers.
                            </Typography>
                        </Box>
                       </Box>
                </Box></Container>
            </Box>
        </>
    )
}