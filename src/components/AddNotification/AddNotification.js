import {
    Button,
      FormControl,
  
      TextField,
      Typography,
   
    } from "@mui/material";
    import React, {  useState } from "react";
  
    import {FormWrapper,
      inputErrorStyles,
  
      buttonStyle
    } from  "./AddNotification.style"
  
  
  function AddNotification(){
   
     const [enteredText, setEnteredText] = useState("");
     const [TextTouched, setTextTouched] = useState(false);
    
   
   
        const [enteredTitle, setEnteredTitle] = useState("");
        const [TitleTouched, setTitleTouched] = useState(false);
        
    //* Title validation
    let TitleIsValid = true;
    let TitleErrorMessage = "";
  
    if (!/^[a-zA-Z0-9]+$/.test(enteredTitle)) {
      TitleErrorMessage = "Enter a valid Title";
      TitleIsValid = false;
    }
    if (enteredTitle.trim() === "") {
      TitleErrorMessage = "Title is required";
      TitleIsValid = false;
    }
    const TitleError = !TitleIsValid && TitleTouched;
  
    
    //* Text validation
    let TextIsValid = true;
    let TextErrorMessage = "";
  
    if (!/^[a-zA-Z0-9]+$/.test(enteredText)) {
      TextErrorMessage = "Enter a valid Text";
      TextIsValid = false;
    }
    if (enteredText.trim() === "") {
      TextErrorMessage = "Text is required";
      TextIsValid = false;
    }
    const TextError = !TextIsValid && TextTouched;
  
    
    const submitHandler = (event) => {
      // TextErrorMessage = "Text is required";
      console.log("hi")

      event.preventDefault();
      if (!TitleTouched ) {
        TextErrorMessage = "Text is required";
        TextIsValid = false;
      }
      if (enteredTitle.trim() === "") {
        TitleErrorMessage = "Title is required";
        TitleIsValid = false;
      }
    
    };
    return(
          <>
           <form onSubmit={submitHandler}>
        <FormWrapper sx={{ display:"flex" ,flexDirection:"column", justifyContent:"space-around" , alignItems:"start" 
        , height:{lg:"300px"} , padding:"20px"
      }}>
         <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Title"
                    sx={TitleError ? inputErrorStyles : {}}
                    value={enteredTitle}
                    onChange={(e) => setEnteredTitle(e.target.value)}
                    onBlur={() => setTitleTouched(true)}
                  />
                  {TitleError && (
                    <Typography
                      sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                    >
                      {TitleErrorMessage}
                    </Typography>
                  )}
                </FormControl>
              <FormControl fullWidth>
                  <TextField
                    variant="standard"
                    label="Text"
                    
                    sx={TextError ? inputErrorStyles : {}}
                    value={enteredText}
                    onChange={(e) => setEnteredText(e.target.value)}
                    onBlur={() => setTextTouched(true)}
                  />
                  {TextError && (
                    <Typography
                      sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                    >
                      {TextErrorMessage.join(" ")}
                    </Typography>
                  )}
                </FormControl>
              <Button variant="contained" size="large" type={"submit"} sx={buttonStyle}>
             افزودن 
              </Button>
                  
          </FormWrapper>
          </form>
          </>
  
      )
  }
  
  export default AddNotification;