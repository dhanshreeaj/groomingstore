"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";


export default function Products() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          padding: 5,
          gap: 2,
          backgroundColor: "white"
        }}
      >
        {/*Left side text contenet */}
        <Box
          sx={{
            display: "flex",
            bgcolor: "lightpink",
            width: 300,
            height: 500,
            justifyContent:"center",
            paddingX:5,
            paddingY:10
          }}>
            <Typography variant="subtitle1" color="grey" >
              Essential Care for Every Skiin Clean,effective skincare powered by nature.
            </Typography>
        </Box>
        {/* middel or image section */}
        <Box
          sx={{
           flex:1,display:"flex",justifyContent:"center",alignItems:"center"
          }}>
             <Box sx={{display:"flex",padding:2, alignItems:"center", position:"relative",width:320,
              height:340,borderRadius:"50%",border:"3px solid grey",overflow:"hidden"}}>
            <Box sx={{position:"relative",width:350,height:300,borderRadius:"50%",border:"3px solid grey",overflow:"hidden"}}>
                 <Image src="/bottole.png"
                 alt="Product Image"
                 fill
                 style={{objectFit:"cover"}}
                 />
                 </Box></Box>
        </Box>
        {/* right side text section */}
        <Box
          sx={{
            display: "flex",
            bgcolor: "grey",
            width: 400,
            height: 500
          }}>

        </Box>
      </Box>
    </>
  )
}