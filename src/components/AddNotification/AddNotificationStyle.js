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