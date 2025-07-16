'use client';

import Image from "next/image";
import {Box,Typography,Button} from "@mui/material";

export default function Home() {
  return (
    <>
     <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        gap: 9,
        backgroundColor:"white"
      }}
    >
      {/*Left side text contenet */}
      <Box
      sx={{flex:1}}>
        <Typography variant="h2" fontWeight="bold" >
          Clean Looks No Compromise
        </Typography><br/>
        <Typography variant="h5">
          Effortless routines, clean formulas, no fluff.This is grooming without the vanity.
        </Typography><br/>
        <Button sx={{color:"white", textTransform:"none", backgroundColor:"black"}}>View Collection</Button>
      </Box>

    {/*Image section */}
    <Box sx={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Box sx={{position:"relative",width:300,height:300,borderRadius:"50%",border:"6px solid #eee",overflow:"hidden"}}>
      <Image src="/products.png"
      alt="Product Image"
      fill
      style={{objectFit:"cover"}}
      />
      </Box>
    </Box>
    </Box>
    </>
  );
}
