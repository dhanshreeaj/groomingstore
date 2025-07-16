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
                {/*left side containt */}
                <Box sx={{
                    paddingX:6,
                    paddingY:30,
                backgroundColor:"black",
                borderRadius:"15px",
                justifyContent:"center"
            }}>
                <Typography variant="h6" color="white" align="center" fontSize={15} fontWeight="bold">
                    Expert Technicians
                </Typography><br/>
                <Typography variant="h6" color="white" align="center" fontSize={12}>Our certificated experts provide top-quality service.
                    Trust us for accurante diagonstics and repairs.</Typography><br/>
                    <br/><Typography variant="h6" color="white" align="center" fontSize={15} fontWeight="bold">
                        Fast Turnaround
                    </Typography><br/>
                    <Typography variant="h6" color="white" align="center" fontSize={12}>
                        Get back on the road quickly with our effcient service.Most repairs are completed within the same day.
                    </Typography>

            </Box>
            {/*center containt */}
                <Box sx={{
                    padding:8,justifyContent:"center"
                }}>
                    <Typography variant="h4" color="white" align="center" fontSize={30} fontWeight="bold">
                        Why choose us?
                    </Typography><br/>
                    <Typography variant="h6" color="white" align="center" fontSize={12}>
                        From  route maintance to major repairs,<br/>
                        We got your car coverd with reliable and friendly service.
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
                {/*right side containt */}
                 <Box sx={{
                    paddingX:6,
                    paddingY:30,
                backgroundColor:"black",
                borderRadius:"15px",
                justifyContent:"center"
            }}>
                <Typography variant="h6" color="white" align="center" fontSize={15} fontWeight="bold">
                    Affordable Pricing
                </Typography><br/>
                <Typography variant="h6" color="white" align="center" fontSize={12}>
                    High-quality repairs at prices you can afford.No hidden fees,just honest and transparent pricing.
                    </Typography><br/>
                    <br/><Typography variant="h6" color="white" align="center" fontSize={15} fontWeight="bold">
                        All-Inclusive Services
                    </Typography><br/>
                    <Typography variant="h6" color="white" align="center" fontSize={12}>
                        From routine maintenace to complex repairs,we handle it all.You one-stop shop for all your car care needs.
                    </Typography>

            </Box>
                 
            </Box>
        </Box>
        </>
    )
}