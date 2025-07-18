"use client";
import Image from "next/image";
import { Box,Typography,Button, Stack, IconButton, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function ProductsPages(){
    return(
        <>
        {/*main containt part */}
        <Box sx={{
            display:"flex",
            padding:8,
            gap:2,
            backgroundColor:"black",
            height:950,
            alignItems:"center",
            flexDirection:"column"

        }}>
             <Container maxWidth="xl" sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
             }}>
            {/*first box section */}
            {/*products contain */}
            <Box sx={{
                display:"flex",
                backgroundColor:"white",
                height:400,
                width:1100,
                gap:1.5,
                paddingY:9,marginBottom:2
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

        {/*second box section */}
        {/* product category */}
        <Box sx={{
           display:"flex",
                backgroundColor:"white",
                height:400,
                width:1100,
                gap:1.5
        }}>
            {/*product image by category */}
           <Box sx={{
            width:366,
            height:400,
            paddingX:8
           }}>
            <Typography variant="subtitle1" color="black" fontSize={14}  paddingY={4} align="center" >PRODUCT BY CATEGORY</Typography>
            {/*image section of product */}
            <Box sx={{
                display:"flex",
                backgroundColor:"lightgray",
                width:250,
                height:250,
                borderRadius:"20px",
                justifyContent:"center"
            }}>
                <Image src="/perfum.png"
                alt="Product image"
                width={200}
                height={200}
                style={{objectFit:"cover"}}
                />
            </Box>
            </Box> 

           {/*product category name */}
           <Box sx={{
            width:366,
            height:400,
            paddingX:8,
            paddingY:10
           }}>
            <Typography variant="h3" color="grey"  fontSize={45}
            sx={{
                cursor:"pointer",
                transition:"color 0.3s ease",
                 "&:hover":{
                            color:"black",
                        }
            }}>Face Care</Typography> <br/>
            <Typography variant="h3" color="grey" fontSize={45}
              sx={{
                cursor:"pointer",
                transition:"color 0.3s ease",
                 "&:hover":{
                            color:"black",
                        }
            }}>Body Care</Typography> <br/>
            <Typography variant="h3" color="grey"  fontSize={45}
              sx={{
                cursor:"pointer",
                transition:"color 0.3s ease",
                 "&:hover":{
                            color:"black",
                        }
            }}>Hair Care</Typography> 
            </Box> 

           {/*product details */}
            <Box sx={{
            width:366,
            height:400,
             paddingX:3,
            paddingY:10
           }}>
             <Typography variant="h6" color="black"  fontSize={24} fontWeight="bold" >
                   Kahf Body Care
                </Typography>
                <Typography variant="h6" color="black"  fontSize={12} >
                    kahf elevates your daliy routine blending care,confidenece and community in every moment.
                </Typography><br/>
                <Stack direction="row" spacing={4}>
                <Button  variant="outlined" 
                sx={{ color:"black",bgcolor:"white",textTransform:"none", borderRadius:"30px",borderColor:"black"}}>View Our Collections</Button>
                <Button variant="outlined"
                 sx={{color:"black",bgcolor:"white",borderColor:"black",textTransform:"none", borderRadius:"15px"}}>→</Button></Stack>
           </Box>

        </Box>
        </Container>
        </Box>
        
        </>
    )
}