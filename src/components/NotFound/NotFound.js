import React from "react";
import {Container , CardMedia, Typography, Button, Box, Stack} from "@mui/material"
import  erorr404 from "./erorr404-1.png"
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
<Container >
<Stack direction={{xs:"column",lg:"row"}} justifyContent="center" alignItems="center" spacing={5}>
<CardMedia 
component="img"
// height="600"
// width="50px"
sx={{width:"150px", height:"500px"}}
image={erorr404}
alt=""
/>
<Stack alignItems="center">
<Typography align="right" variant="h5" component="h1" >صفحه مورد نظر شما یافت نشد</Typography>
<Button variant="outlined" sx={{marginTop:"20px", borderColor:"#b71c1c"}}>
  <Link to="/">بازگشت به صفحه اصلی</Link>
</Button>
<Typography variant="body1" sx={{marginTop:"20px"}}>احتمالا این صفحه به آدرس دیگری تغییر کرده است  و یا حذف شده است </Typography>

</Stack>

</Stack>

</Container>

    </>
  )
}

export default NotFound;
