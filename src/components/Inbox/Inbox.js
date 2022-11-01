

import {
    Button,
     Grid ,
 
     Stack,
     Container
    } from "@mui/material";
import { useState } from "react";
import CustomerRequest
     from "../CustomerRequest/CustomerRequest"
    import { CustomerResponse } from "components/CustomerResponse/CustomerResponse";
   

    const buttonStyle={
        textDecoration: "none",
        color: "#fff",
        backgroundColor: "#26a69a",
        textAlign: "center",
        letterSpacing: ".5px",
        transition: ".2s ease-out",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#26a69a",
        },
      }
function Inbox(){
    const [response,setResponse]=useState(false);
   const responseWidth= response ? 6 : 12;
    return (
        <>
    <Container >
    <Grid container spacing={2}>
    {response && (
               <Grid item xs={12} sm={12} md={6} lg={6}>
                <CustomerResponse />
                </Grid>
             )}
      <Grid item xs={12} sm={12} md={responseWidth} lg={responseWidth}>
        <CustomerRequest />
        </Grid>
        </Grid>


<Stack direction="row" justifyContent="center" spacing={4}>
<Button variant="contained" size="large" sx={buttonStyle}  onClick={() => setResponse(true)}> رد</Button>
<Button variant="contained" size="large" sx={buttonStyle}> تایید</Button>

</Stack>
      
    </Container>
      
        </>
    )
}

export default Inbox;