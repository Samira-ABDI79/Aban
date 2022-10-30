import * as React from 'react';
import {Avatar, Box,Container, Stack, Typography,Button} from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image from "./image (5).png"
import { Link } from "react-router-dom";


import {buttonStyle,ContainerStyle} from "../Inbox/InboxStyle"

function CustomerRequest(){
    return (
<>
<Container maxWidth="xl"  sx={ContainerStyle}>
  <Box sx={{
      backgroundColor:"#fff",
      width:"70%",
      padding:"20px",
      margin:"50px auto",
      paddingBottom:"60px"
      
  }}>
  <Stack direction="row"  justifyContent="space-between" mb={5}>
<Typography variant="body2" component="p">نام کاربر </Typography>
<Avatar alt="Remy Sharp" src={image} />
    </Stack>
{/* start text */}
<Box>
    
<Typography variant="h4" component="h1"  align="right"
    sx={{    fontWeight: "500"}}>موضوع درخواست</Typography>

    <Typography variant="h4" component="h2"  align="right"
    sx={{ 
        
        fontWeight: "500",
        lineHeight: "1.25",
        color: "#0a66c2",}}
    >دسته درخواست</Typography>
    
    <Stack direction="row"  justifyContent="end" spacing={2} mb={5}>
        {/* <AccessTimeIcon  color="success"/> */}
     <Typography >   ۲ آبان ۱۴۰۱، ساعت ۲۱:۴۴</Typography>
        </Stack>

</Box>

<Typography variant="body1" component="p"  align="center">متن درخواست</Typography>
  </Box>
</Container>
</>    
)
}

export default CustomerRequest