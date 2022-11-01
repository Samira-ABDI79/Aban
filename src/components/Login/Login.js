import React, { useState } from "react";
import { setCookie } from "nookies";
import axios from "axios";
import queryString from "query-string";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import {inputStyle,ErrorStyle,buttonStyle} from "./Login.style"

import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";



 function Login() {

  const authBaseURL = "https://oauth.fanli.ir/";
  const { setAuth, auth } = useAuth();
  const [username, setUsername] = useState("");

  const [entereduserName, setEnteredUsername] = useState("");
  const [userNameTouched, setuserNameTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  
  //* userName validation
  let userNameIsValid = true;
  let userNameErrorMessage = "";


  if (entereduserName.trim() === "") {
    userNameErrorMessage = "نام کاربری مورد نیاز است";
    userNameIsValid = false;
  }
  const userNameError = !userNameIsValid && userNameTouched;

  //* password validation
  let passwordErrorMessage = ["رمز عبور باید حداقل شامل"];
  let passwordIsValid = true;
 
  
  if (!/[a-zA-Z0-9]{6,}/.test(enteredPassword)) {
    passwordErrorMessage.push("6 کاراکتر");
    passwordIsValid = false;
  }
  if (!/(?=.*[A-Z])/.test(enteredPassword)) {
    passwordErrorMessage.push(" یک حرف بزرگ باشد");
    passwordIsValid = false;
  }
  if (!/(?=.*\d)/.test(enteredPassword)) {
    passwordErrorMessage.push("  و یک رقم");
    passwordIsValid = false;
  }
    if (/(?=.*[a-zA-Z0-9]*\d){6,}/.test(enteredPassword)) {
    passwordErrorMessage=""
    passwordIsValid = true;
  }
  const passwordError = !passwordIsValid && passwordTouched;
  const navigate = useNavigate();

  const handleGetOTP = () => {
    let data = { userNameOrMobile: username };
    axios.post(`${authBaseURL}api/otp/code/send`, data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    const formData = queryString.stringify({
      username,
      enteredPassword,
      appname: "AppTest",
      client_id: "flutterTest",
      client_secret: "1q!8675fGtge9sGfdKLiySec",
      grant_type: "UserPass",
      action: "login",
    });
    // console.log("form data", formData);
    axios.post(`${authBaseURL}connect/token`, formData).then((res) => {
      console.log(res);
      const accessToken = res?.data?.access_token;
      navigate("/dashboard", { replace: true });

      setAuth({ accessToken, username });
      console.log(auth);
      setCookie(null, "token", res.data.access_token, {
        maxAge: res.data.expires_in,
        path: "/",
      });
      setCookie(null, "refreshToken", res.data.refresh_token, {
        maxAge: res.data.expires_in,
        path: "/",
      });
    });

    return data;
  };
  return (
    <div>
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
          <Typography component="h1" variant="h5" align="right" sx={{    marginTop: "0",
    fontSize: "24px",fontWeight:"600"}}>
            به پنل ادمین فنلی خوش آمدید{" "}
          </Typography>
          <>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setEnteredUsername(e.target.value)}
                id="username"
              
               InputProps={{
                inputProps: {
                    style: { textAlign: "right" },
                }
            }}
           
            sx={inputStyle}
               
                placeholder="شماره تلفن/آدرس ایمیل "
                name="username"
                autoComplete="userName"
                autoFocus
                onBlur={() => setuserNameTouched(true)}
              />
              {userNameError && (
                    <Typography
                    align="right"
                      sx={ErrorStyle}
                    >
                      {userNameErrorMessage}
                    </Typography>
                  )}
              <TextField
                margin="normal"
                required
                fullWidth
             
                InputProps={{
                  inputProps: {
                      style: { textAlign: "right" },
                  }
              }}
                name="password"
              sx={inputStyle}
                placeholder="رمز عبور یا کد یکبار مصرف"
                    type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setEnteredPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
              />
               {passwordError && (
                    <Typography
                    align="right"
                    sx={ErrorStyle}
                    >
                      {passwordErrorMessage.join(" ")}
                    </Typography>
                  )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
sx={{ mt: 3, mb: 1 ,py:2,
  borderRadius: '5px',

}}
              >
                ورود به پنل فنلی
              </Button>
              <Button
                onClick={handleGetOTP}
                fullWidth
              
                sx={buttonStyle}
              >
                دریافت کد یکبار مصرف
              </Button>
            </Box>
          </>
        </Box>
      </Container>
    </div>
  );
}
export default Login
