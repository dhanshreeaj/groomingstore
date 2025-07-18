"use client";

import React from "react";
import { AppBar,Toolbar,Typography,Button,Box,IconButton,Stack, Container } from "@mui/material";
import  SearchIcon  from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";

const Navbar=()=>{

  return(
    <AppBar
    position="static"
    sx={{
      backgroundColor:"black",
      boxShadow:"none",
      paddingX:4,
      paddingY:1,
    }}>
               <Container maxWidth="xl">

      <Toolbar sx={{justifyContent:"space-between"}}>

       {/*Left side brand name */}
       <Link href="/"  style={{ textDecoration: "none" }}>
        <Typography variant="h6" fontWeight="bold" color="white"
        sx={{
           "&:hover":{
              color:"pink",}
        }}>
          Kahf
        </Typography></Link>
        {/*Center Buttons */}
        <Stack direction="row" spacing={2} sx={{
          backgroundColor:"rgba(255, 255, 255, 0.1)",
          paddingX:2,
          paddingY:0.5,
          borderRadius:"20px",
        }}>
          <Link href="/products" passHref>
          <Button sx={{color:"white",textTransform:"none"}}>Product</Button></Link>
          <Link href="/faq" passHref>
          <Button sx={{color:"white",textTransform:"none"}}>FAQ</Button></Link>
          <Link href="/productdetails" passHref>
          <Button sx={{color:"white",textTransform:"none"}}>Product Details</Button></Link>
          <Button sx={{color:"white",textTransform:"none"}}>Our Story</Button>
          <Button sx={{color:"white",textTransform:"none"}}>News & Event</Button>
        </Stack>
        {/*Right side icons */}
        <Box sx={{display:"flex",alignItems:"center",gap:2}}>
          <IconButton sx={{color:"white"}}>
            <SearchIcon/>
          </IconButton>
          <IconButton sx={{color:"white"}}>
            <ShoppingBagIcon/>
          </IconButton>
          <Button variant="contained" sx={{textTransform:"none",backgroundColor:"grey", color:"white",
            "&:hover":{
              backgroundColor:"black",
            },
            borderRadius:"20px",
            paddingX:3,
          }}>Login</Button>
        </Box>

      </Toolbar>
                  </Container>

    </AppBar>
  )
}
export default Navbar;