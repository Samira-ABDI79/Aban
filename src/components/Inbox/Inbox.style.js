export  const buttonStyle={
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#26a69a",
    textAlign: "center",
    letterSpacing: ".5px",
    transition: ".2s ease-out",
    cursor: "pointer",
    float :"right",
    "&:hover": {
      backgroundColor: "#26a69a",
    },
  }
export const ContainerStyle={
    borderColor: "currentColor",
    width: "100%",
    backgroundColor:" #f3f2f0",
   padding:"50px 20px",
   height:"100%"
}

export    const inputErrorStyles = {
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