import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {RequestData} from "../Data/Data"
import Avatar from '@mui/material/Avatar';
import OpenInNewIco from "@mui/icons-material/OpenInNew"
import Typography from '@mui/material/Typography';

import avatarImg from "./avatarImg.jpg"
import {textStyle , ButtonStyle} from "./ListStyle"

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function List1() {

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 , }}>
    
        
          <Demo >
            <ul    style={{float:"right", width:"100%"}}>
         {listDat.map((item) => (
              
                <li style={{listStyleType:"none" , display:"flex", padding:"10px 0px",justifyContent:"space-between", width:"100%"}}>
                       
                         <Typography align="right" sx={textStyle}>{item.date}</Typography>
                         <Typography align="right" sx={textStyle}>{item.time}</Typography>
                         <Typography align="right" sx={textStyle}>{item.notification}</Typography>
                         <Typography align="right" sx={textStyle}>{item.title}</Typography>
                        
                       


                         
                </li>
                
         ))}
            </ul>
          </Demo>
        
      
    </Box>
  );
}
