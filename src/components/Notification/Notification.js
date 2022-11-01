import * as React from 'react';

import {Modal,
Box,
Button,
Typography,
Stack,
Container
} from '@mui/material';
import List1 from "../List/List"
import {ButtonStyle,titrStyle} from "../List/List.style" 
import AddNotification from 'components/AddNotification/AddNotification';

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

export default function Notification() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container >
        
        <Box sx={{border:"1px solid #c1c1c1" , my:8,px:5,py:8}}>
            
        <Stack direction="row" justifyContent="space-between" sx={{}}>
        <Box>
         <Button variant="text" sx={ButtonStyle} onClick={handleOpen} >
  افزودن
    </Button>
        
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
                <Box sx={style}>
           <AddNotification />
           </Box>
          </Modal></Box>
    
            
            <Typography sx={titrStyle} variant="h6" component="div">
              اعلانات
              </Typography>
            </Stack>
              
        <Box sx={{display:"flex" , justifyContent:"flex-end"}}>
            <List1 />
            </Box>
        </Box>
      
            </Container>
  );
}
