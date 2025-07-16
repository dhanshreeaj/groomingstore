"use client";
import Image from "next/image";
import { Box,Typography,Button, Stack, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function ProductsPages(){
    return(
        <>
        {/*main containt part */}
        <Box sx={{
            display:"flex",
            padding:8,
            gap:2,
            justifyContent:"center",
            backgroundColor:"black"
        }}>
            {/*products contain */}
            <Box sx={{
                display:"flex",
                backgroundColor:"white",
                height:400,
                width:1100,
                gap:1.5,
                paddingY:9
            }}>
                {/*left section */}
            <Box sx={{
                width:300,
                paddingX:4,
                paddingY:8
            }}>
                <Typography variant="h6" color="black"  fontSize={24} fontWeight="bold" >
                    Our Popular Product
                </Typography>
                <Typography variant="h6" color="black"  fontSize={12} >
                    kahf elevates your daliy routine blending care,confidenece.
                </Typography><br/>
                <Stack direction="row" spacing={2}>
                <Button  variant="outlined" 
                sx={{ color:"black",bgcolor:"white",textTransform:"none", borderRadius:"10px",borderColor:"black"}}>←</Button>
                <Button variant="outlined"
                 sx={{color:"black",bgcolor:"white",borderColor:"black",textTransform:"none", borderRadius:"10px"}}>→</Button></Stack>
            </Box>
            {/* product section */}
            <Box sx={{
                backgroundColor:"lightgrey",
                width:250,
                height:250,
                borderRadius:"20px",
                justifyContent:"space-between",
                flexDirection:"column",
                p:2
            }}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                <Image src="/perfum.png"
                alt="Product image"
                width={150}
                height={150}
                style={{objectFit:"cover"}}
                /></Box>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                <Typography variant="subtitle1" color="black" paddingY={6} paddingX={1} fontWeight="bold" fontSize={15} > Kahf Parfum</Typography>
                <IconButton sx={{
                    borderRadius:"50%",
                    width:10,
                    height:10,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                     border: '1px solid #333'
                }}>
                    <AddIcon/>
                </IconButton>
                </Box>
            </Box>
            {/*other product section */}
           <Box sx={{
                backgroundColor:"lightgrey",
                width:250,
                height:250,
                borderRadius:"20px",
                justifyContent:"space-between",
                flexDirection:"column",
                p:2
            }}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                <Image src="/facewash.png"
                alt="Product image"
                width={150}
                height={150}
                style={{objectFit:"cover"}}
                /></Box>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                <Typography variant="subtitle1" color="black" paddingY={6} paddingX={1} fontWeight="bold" fontSize={15} >
                     Face Wash</Typography>
                <IconButton sx={{
                    borderRadius:"50%",
                    width:10,
                    height:10,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                     border: '1px solid #333'
                }}>
                    <AddIcon/>
                </IconButton>
                </Box>
            </Box>
            {/*other product */}
            <Box sx={{
                backgroundColor:"lightgrey",
                width:250,
                height:250,
                borderRadius:"20px",
                justifyContent:"space-between",
                flexDirection:"column",
                p:2
            }}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                <Image src="/faceserium2.png"
                alt="Product image"
                width={150}
                height={150}
                style={{objectFit:"cover"}}
                /></Box>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                <Typography variant="subtitle1" color="black" paddingY={6} paddingX={1} fontWeight="bold" fontSize={15} >
                     Face Serum</Typography>
                <IconButton sx={{
                    borderRadius:"50%",
                    width:10,
                    height:10,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                     border: '1px solid #333'
                }}>
                    <AddIcon/>
                </IconButton>
                </Box>
            </Box>
        </Box>
        </Box>
        </>
    )
}