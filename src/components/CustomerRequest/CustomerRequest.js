import * as React from 'react';
import {Avatar, Box,Container, Stack, Typography,Button} from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image from "./image (5).png"
import { Link } from "react-router-dom";
import { useState } from "react";
import {RequestData} from "../Data/Data"

import {id} from "../RequestList/RequestList "
import {buttonStyle,ContainerStyle} from "../Inbox/InboxStyle"

function CustomerRequest(){
  const [Info] = useState(RequestData);
let data=""
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
      
        {Info.map((item) =>{  

            if(item.id==id){
              data=  {
                id:`${item.id}`,
                name:`${item.name}`,
                subject:`${item.subject}`,
                category:`${item.category}`,
                text:`${item.text}`,
                data:`${item.data}`,
                time:`${item.time}`
            }
            console.log(data)
            }
          })}
            
  <Box>
<Stack direction="row"  justifyContent="space-between" mb={5}>
<Typography variant="body2" component="p">{data.name}</Typography>
<Avatar alt="Remy Sharp" src={image} />
    </Stack>

<Box>
    
<Typography variant="h4" component="h1"  align="right"
    sx={{    fontWeight: "500"}}>{data.subject}</Typography>

    <Typography variant="h4" component="h2"  align="right"
    sx={{ 
        
        fontWeight: "500",
        lineHeight: "1.25",
        color: "#0a66c2",}}
    >{data.category}</Typography>
    
    <Stack direction="row"  justifyContent="end" spacing={2} mb={5}>
     
     <Typography >   {data.data} {data.time}</Typography>
        </Stack>

</Box>

<Typography variant="body1" component="p"  align="center">{data.text}</Typography>
</Box>    
          
 
             
 

 </Box>

</Container>

</>    
)
}

export default CustomerRequest