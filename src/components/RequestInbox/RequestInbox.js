import * as React from 'react';

import {
Box,

Typography,

Container
} from '@mui/material';

import {titrStyle} from "../RequestList/RequestList.style" 
import RequestList from 'components/RequestList/RequestList ';



const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RequestInbox() {
  
 

  return (
    <Container >
        
        <Box sx={{border:"1px solid #c1c1c1" , my:8,px:5,py:8}}>
            
      
       
    
            
            <Typography sx={titrStyle} variant="h6" component="div" align="right">
              درخواست ها
              </Typography>
          
              
        <Box sx={{display:"flex" , justifyContent:"flex-end"}}>
            <RequestList />
            </Box>
        </Box>
      
            </Container>
  );
}
