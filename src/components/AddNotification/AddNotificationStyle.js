import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
export const FormWrapper = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#fff",
    width: "500px",
    form: {
      padding: "10px 100px",
    },
    h2: {
      color: "#333333",
      fontSize: "28px",
      fontWeight: 500,
      marginBottom: "10px",
    },
    h6: {
      color: "#333333",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      form: {
        padding: "10px 30px ",
      },
    },
    "& .close-button": {
      position: "absolute",
      top: "-15px",
      right: "15px",
      cursor: "pointer",
      transition: "all 100ms ease-in",
      opacity: ".5",
      "&:hover": {
        opacity: "1",
      },
    },
  }));

  
export   const inputErrorStyles = {
    "& .MuiInput-root::before ": {
      borderBottom: "1px solid #f03637",
    },
    "& .MuiInput-root:hover::before": {
      borderBottom: "2px solid #f03637",
    },
    "& .MuiInput-root::after ": {
      borderBottom: "2px solid #f03637",
    },
  };
  export const buttonStyle={
  
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

  export const message={ color: "#f03637", fontSize: "14px", fontWeight: 500 }