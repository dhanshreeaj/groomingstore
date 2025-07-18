"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

export default function ProductInfo(){
    return(
        <>
        {/* main containt */}
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            bgcolor:"grey",
            padding:2
        }}>
            <Container maxWidth="xl" sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
             }}>
            <Box sx={{
                display:"flex",
                 bgcolor:"lightpink",
                 height:500,
                 flexDirection:"column",
                 alignItems:"center",
                 padding:2
            }}>
                <Box sx={{
                    display:"flex",
                    bgcolor:"grey",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:2
                }}>
                    <Typography variant="h6" color="black" fontWeight="bold"  fontSize={30}>
                        Complete Beauty, Naturally
                    </Typography> 
                     <Typography variant="h6" color="black" fontWeight="bold" >
                        From skin hydration to effortless makeup,our product are designed 
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    bgcolor:"skyblue",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                     <Typography variant="h6" color="black" fontWeight="bold" >
                        Complete Beauty, Naturally
                    </Typography>
                      <Typography variant="h6" color="black" fontWeight="bold" >
                        Complete Beauty, Naturally
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display:"flex",
                 bgcolor:"lightskyblue",
                 height:500
            }}>

            </Box></Container>
        </Box>
        </>
    )
}