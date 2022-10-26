import React from "react";
import {Container , CardMedia, Typography, Button, Box, Stack} from "@mui/material"
import  erorr404 from "./404-SVG-Animated-Page-Concept.png"
import { Link } from "react-router-dom";
import {ButtonStyle,LinkStyle,titrStyle,textStyle} from "./NotFoundStyle"
function NotFound() {
  return (
    <>
<Container >
<Stack  justifyContent="center" alignItems="center" spacing={5}>
<CardMedia 
component="img"
// height="600"
// width="50px"
sx={{width:"60%", height:"500px"}}
image={erorr404}
alt=""
/>
<Stack alignItems="center">
<Typography align="right" variant="h5" component="h1" sx={titrStyle}>صفحه مورد نظر شما یافت نشد</Typography>
<Button variant="outlined" sx={ButtonStyle}>
  <Link to="/" style={LinkStyle} >بازگشت به صفحه اصلی</Link>
</Button>
<Typography variant="body1" sx={{marginTop:"20px"}} sx={textStyle}>احتمالا این صفحه به آدرس دیگری تغییر کرده است  و یا حذف شده است </Typography>

</Stack>

</Stack>

</Container>

    </>
  )
}

export default NotFound;
