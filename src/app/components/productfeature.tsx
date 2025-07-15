"use client";
import Image from "next/image";
import { Box,Typography,Button } from "@mui/material";

export default function ProductFeatures(){
    return(
        <>
        {/*main containt part */}
        <Box sx={{
            display:"flex",
            padding:8,
            gap:4,
            justifyContent:"center"
        }}>
            {/*feature box containt part */}
            <Box sx={{
                display:"flex",
                backgroundColor:"black",
                borderRadius:"15px",
                flexDirection:{xs:"column",md:"row"},
                height:700,
                width:900,
                justifyContent:"center"
            }}>
                <Box sx={{
                    padding:8,justifyContent:"center"
                }}>
                    <Typography variant="h4" color="white" align="center">
                        Why choose us?
                    </Typography><br/>
                    <Typography variant="h6" color="white" align="center">
                        From  route maintance to major repairs,<br/>
                        We've got your car coverd with reliable and friendly service.
                    </Typography><br/><br/>
                <Box sx={{
                    justifyContent:"center",
                    display:'flex'
                }}>
                    <Image src="/productfeature.png"
                    alt="Product Feature Image"
                    width={300}
                    height={300}
                    style={{objectFit:"cover"}}
                    />
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    padding:2
                }}>
                    <Button sx={{
                        color:"black",
                        bgcolor:"white",
                        textTransform:"none"
                    }}>Get a Free quote</Button>
                </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}