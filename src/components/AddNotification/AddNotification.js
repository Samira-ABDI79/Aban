import {
    Button,
      FormControl,
      FormLabel,
      TextField,
      Typography,
      Box,
      Alert
    } from "@mui/material";
    import React, { FormEvent, useState } from "react";
    import { Link } from "react-router-dom";
    import {FormWrapper} from  "./AddNotificationStyle"
  
  
    const inputErrorStyles = {
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
  function AddNotification(){
   
     const [enteredPassword, setEnteredPassword] = useState("");
     const [passwordTouched, setPasswordTouched] = useState(false);
    
     
    //* password validation
    let passwordErrorMessage = ["password should contain at least"];
    let passwordIsValid = true;
  
    if (!/[a-zA-Z0-9]{6,}/.test(enteredPassword)) {
      passwordErrorMessage.push(" 6 characters");
      passwordIsValid = false;
    }
    if (!/(?=.*[A-Z])/.test(enteredPassword)) {
      passwordErrorMessage.push(" one uppercase");
      passwordIsValid = false;
    }
    if (!/(?=.*\d)/.test(enteredPassword)) {
      passwordErrorMessage.push(" one digit");
      passwordIsValid = false;
    }
    const passwordError = !passwordIsValid && passwordTouched;
      const inputStyles = {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            height: { xs: "50px", md: "40px" },
          },
        };
        const [enteredUsername, setEnteredUsername] = useState("");
        const [usernameTouched, setUsernameTouched] = useState(false);
        
    //* username validation
    let usernameIsValid = true;
    let usernameErrorMessage = "";
  
    if (!/^[a-zA-Z0-9]+$/.test(enteredUsername)) {
      usernameErrorMessage = "Enter a valid username";
      usernameIsValid = false;
    }
    if (enteredUsername.trim() === "") {
      usernameErrorMessage = "Username is required";
      usernameIsValid = false;
    }
    const usernameError = !usernameIsValid && usernameTouched;
  
    const user={
      userName:"samira",
      password:"samira#abdi"
    }
  
  const flag=(enteredUsername===user.userName && enteredPassword===user.password) ? true : false;
   
  const route=(flag ) ? "/panel/posts" : "/"
  const alertFlag=((enteredUsername.trim() === "")||(enteredPassword.trim()==="")) ? true : false;
   
    const submitHandler = (event) => {
      event.preventDefault();
      if (!passwordIsValid && !usernameIsValid) {
        return;
      }
    };
    return(
          <>
        <FormWrapper sx={{ display:"flex" ,flexDirection:"column", justifyContent:"space-around" , alignItems:"start" 
        , height:{lg:"300px"} , padding:"20px"
      }}>
         <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Username"
                    sx={usernameError ? inputErrorStyles : {}}
                    value={enteredUsername}
                    onChange={(e) => setEnteredUsername(e.target.value)}
                    onBlur={() => setUsernameTouched(true)}
                  />
                  {usernameError && (
                    <Typography
                      sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                    >
                      {usernameErrorMessage}
                    </Typography>
                  )}
                </FormControl>
              <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Password"
                    type={"password"}
                    sx={passwordError ? inputErrorStyles : {}}
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                  />
                  {passwordError && (
                    <Typography
                      sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                    >
                      {passwordErrorMessage.join(" ")}
                    </Typography>
                  )}
                </FormControl>
              <Button variant="contained" size="large" sx={buttonStyle}>
             <Link to={route} style={buttonStyle}>Login </Link> 
              </Button>
              {!alertFlag && !flag && (
                 
                   <Alert severity="error" >name and password is notvalid </Alert>
  
               
                 )}
                   {/* {flag && (
              
                   <Alert severity="success" >name and password isvalid </Alert>
  
            
                 )} */}
          </FormWrapper>
          </>
  
      )
  }
  
  export default AddNotification;