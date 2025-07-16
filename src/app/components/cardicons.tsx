"use client";

import { Box,Typography,Button } from "@mui/material";

export default function CardIcon(){
    return(
        <>
        {/*main part box */}
        <Box sx={{
            display:"flex",
            padding:8,
            gap:4,
            backgroundColor:"black",
            justifyContent:"center"
        }}>
            {/*info box part */}
            <Box sx={{
                backgroundColor:"white",
                borderRadius:"5%",
                flexDirection:{xs:"column",md:"row"},
                height:650,
                width:850,
                justifyContent:"center",
                alignItems:"center"
            }}>
                {/*text part */}
               <Box sx={{padding:4,justifyContent:"center"}}>
                <Typography variant="h4" fontWeight="bold"align="center">
                    Unique Selling Point
                </Typography><br></br>
                <Typography variant="h6" align="center" fontSize={15}>
                    A unique selling proposition to the unique benifit exhibited <br/>by a company,
                    service product or brands that enabies it so stand out from compotiotions.
                </Typography><br></br>
                {/*button part */}
                <Box sx={{display:"flex",justifyContent:"center"}}>
                <Button sx={{color:"white", backgroundColor:"black", 
                    textTransform:"none",justifyContent:"center",borderRadius:"20px"}}>Get Started</Button>
                </Box>
                </Box>
                <Box sx={{
                    display:"flex",
                    padding:4,gap:4
                }}>
                    <Box sx={{
                        display:"flex",
                        backgroundColor:"black",
                        width:250,
                        height:300,
                        borderRadius:"20px",
                        "&:hover":{
                            backgroundColor:"grey",
                            cursor:"pointer"
                        }
                    }}>
                        <Typography variant="h6" color="white" padding={2}  fontSize={15}>
                            Automate Ecommerece Operation
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        backgroundColor:"black",
                        width:250,
                        height:300,
                        borderRadius:"20px",
                        "&:hover":{
                            backgroundColor:"grey",
                            cursor:"pointer"
                        }
                    }}>
                        <Typography variant="h6" color="white" padding={2} fontSize={15}>
                            Accurate Accounting Automation
                        </Typography><br/>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        backgroundColor:"black",
                        width:250,
                        height:300,
                        borderRadius:"20px",
                        "&:hover":{
                            backgroundColor:"grey",
                            cursor:"pointer"
                        }
                    }}>
                        <Typography variant="h6" color="white" padding={2} fontSize={15}>
                           Order Fulifilment Automation
                        </Typography>
                    </Box>
                    </Box> 
            </Box>
        </Box>
        </>
    )
}