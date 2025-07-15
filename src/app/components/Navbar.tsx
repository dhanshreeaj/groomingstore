"use client";

import React from "react";
import { AppBar,Toolbar,Typography,Button,Box,IconButton,Stack } from "@mui/material";
import  SearchIcon  from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

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
      <Toolbar sx={{justifyContent:"space-between"}}>
        {/*Left side brand name */}
        <Typography variant="h6" fontWeight="bold">
          Kahf
        </Typography>
        {/*Center Buttons */}
        <Stack direction="row" spacing={2} sx={{
          backgroundColor:"rgba(255, 255, 255, 0.1)",
          paddingX:2,
          paddingY:0.5,
          borderRadius:"20px",
        }}>
          <Button sx={{color:"white",textTransform:"none"}}>Product</Button>
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
    </AppBar>
  )
}
export default Navbar;