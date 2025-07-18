"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import ProductInfo from "./productinfo";


export default function Products() {
  return (
    <>
      {/* main containt */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: 6,
          paddingY: 2,
          gap: 2,
          justifyContent:"center"
        }}
      >
        <Container maxWidth="xl" sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
             }}>
        {/* center box contain */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingX: 16,
          gap: 5
        }}>

          <Box
            sx={{
              flex: 1, display: "flex",
              flexDirection: "row",
              paddingX: 1,
              gap: 4
            }}>
            {/*Left side text contenet */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingX: 2,
                paddingY: 2,
                width: 250,
                flexDirection:"column"
              }}>
              <Typography variant="subtitle1" color="grey" >
                Essential Care for Every <br />Skiin Clean,effective <br />skincare
                powered by nature.
              </Typography>
              <Typography variant="h6" fontSize={15}
                sx={{
                  color: "grey",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  alignItems:"center",
                  paddingY:10,
                  paddingX:2
                }} ><span style={{ color: "green" }} >● Aloe Green</span> ←
                <Typography fontSize={15} fontWeight="bold"  sx={{ color: "purple" }}>● Lavandar Caim</Typography>
                <Typography fontSize={15} fontWeight="bold"  sx={{ color: "red" }}>● Rose barry</Typography>
                <Typography fontSize={15} fontWeight="bold"  sx={{ color: "skyblue" }}>● Citrus Zest</Typography>
              </Typography>
            </Box>
            {/* middel or image section */}

            <Box sx={{
              display: "flex", padding: 2, alignItems: "center", position: "relative", justifyContent: "center",
              width: 340,
              height: 350, borderRadius: "50%", border: "3px solid grey", overflow: "hidden"
            }}>
              <Box sx={{
                position: "relative", width: 400, height: 300, borderRadius: "50%",
                border: "3px solid grey", overflow: "hidden"
              }}>
                <Image src="/bottole.png"
                  alt="Product Image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box> 
            
            {/* right side containt */}
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              paddingY: 3,
              paddingX: 1,
              gap: 2
            }}>
              <Typography variant="h1" color="grey" fontWeight="bold" fontSize={35}>
                Natural Care<br /> for Every Skin
              </Typography><br />
              <br /><Typography variant="subtitle1" color="grey" paddingX={3} >
                Brining natures best
                <br /> into your daily routine
                <br />with gentle,effrctive
                <br />skincare and cosmetic
                <br />products you can trust.
              </Typography></Box>
          </Box>
          {/* bottom part */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <Typography variant="subtitle1" fontSize={25} fontWeight="bold" color="grey">Trusted by Thousands</Typography>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              color: "grey"
            }}>
              <Typography variant="h6" flexDirection="column" align="center" >98%
                <Typography >Feel More Hydrated</Typography></Typography>
              <Typography variant="h6" flexDirection="column" align="center">12,000+
                <Typography >Faces Cared For</Typography></Typography>
              <Typography variant="h6" flexDirection="column" align="center">4.9
                <Typography >Average Rating</Typography></Typography>
            </Box>
          </Box>
        </Box></Container>
      </Box>
      <ProductInfo/>
    </>
  )
}