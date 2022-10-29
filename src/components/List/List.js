import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OpenInNewIco from "@mui/icons-material/OpenInNew"
import avatarImg from "./avatarImg.jpg"
import {textStyle , ButtonStyle} from "./ListStyle"

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
const listDat=[
    {
        id:1,
        notification:"اعلان 1",
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,    },
    {
        id:2,
        notification:"اعلان 2",
    
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
      },
    {
        id:3,
        notification:"اعلان 3",
    
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
      },
    {
        id:4,
        notification:"اعلان 4",
    
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
      },
    {
        id:5,
        notification:"اعلان 5",
    
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
      },
    {
        id:6,
        notification:"اعلان 6",
    
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
      },
    {
        id:7,
        notification:"اعلان 7",
    
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
      },
    {
        id:8,
        notification:"اعلان 8",
        time:"5:59",
        date:"10/29/2022",
        title:"نام",
        media:`${avatarImg}`,
    }
]
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
                         <Avatar alt="media" src={item.media} />
                       


                         
                </li>
                
         ))}
            </ul>
          </Demo>
        
      
    </Box>
  );
}
