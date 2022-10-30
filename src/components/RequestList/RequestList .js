import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {RequestData} from "../Data/Data"
import { useState } from "react";


import Typography from '@mui/material/Typography';


import {textStyle , ButtonStyle} from "./RequestList.style"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export let id=""
export default function RequestList() {
  const [Info] = useState(RequestData);
  

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 , }}>
    
        
          <Demo >
            <ul    style={{float:"right", width:"100%"}}>
         {Info.map((item) => (
              
                <li style={{listStyleType:"none" , display:"flex", padding:"10px 0px",justifyContent:"space-between", width:"100%"}}>
                  <Button variant="contained" color="secondary" onClick={()=> id=`${item.id}`}>
                  <Link to="/inbox" style={{textDecoration: "none"}}  >مشاهده</Link>
                  </Button>
                         <Typography align="right" sx={textStyle}>{item.time}</Typography>
                       
                         <Typography align="right" sx={textStyle}>{item.data}</Typography>
                         <Typography align="right" sx={textStyle}>{item.category}</Typography>
                        
                         <Typography align="right" sx={textStyle}>{item.subject}</Typography>
                         <Typography align="right" sx={textStyle}>{item.name}</Typography>
                         <Typography align="right" sx={textStyle}>{item.id}</Typography>
                        
                       


                         
                </li>
                
         ))}
            </ul>
          </Demo>
        
      
    </Box>
  );
}
