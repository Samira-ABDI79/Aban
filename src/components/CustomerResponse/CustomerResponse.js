import {
    Stack,
    Button,
    FormControl,
    
    Container,
    TextField,
    Typography,
  } from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete"
  import SendIcon from "@mui/icons-material/Send"
  import {buttonStyle ,ContainerStyle,inputErrorStyles} from "../Inbox/InboxStyle"

  import {  useState } from "react";
 let responseInformation="";
function CustomerResponse(){
    const [enteredTitle, setenteredTitle] = useState("");
  const [titleTouched, settitleTouched] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [textTouched, settextTouched] = useState(false);
const [data,setData]=useState([]);
responseInformation=data;
 

  let titleIsValid = true;
  let titleErrorMessage = "";
  if (enteredTitle.trim() === "") {
    titleErrorMessage = "title is required";
    titleIsValid = false;
  }
  const titleError = !titleIsValid && titleTouched;


  let textIsValid = true;
  let textErrorMessage = "";
  if (enteredText.trim() === "") {
    textErrorMessage = "text is required";
    textIsValid = false;
  }
  const textError = !textIsValid && textTouched;

  function resetHandler(){
    setenteredTitle("");
    setEnteredText("");
  }

  const submitHandler = (event) => {
    event.preventDefault();
     
      setData( {title:enteredTitle,text:enteredText})    
  };
  
  
    return (
        <>
<Container maxWidth="xl"  sx={ContainerStyle}>
<form onSubmit={submitHandler}>
<FormControl fullWidth>
                <TextField
                  variant="standard"
                  label="title"
                  sx={titleError ? inputErrorStyles : {}}
                  value={enteredTitle}
                  onChange={(e) => setenteredTitle(e.target.value)}
                  onBlur={() => settitleTouched(true)}
                />
                {titleError && (
                  <Typography
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                  >
                    {titleErrorMessage}
                  </Typography>
                )}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  variant="standard"
                  label="text"
                  sx={textError ? inputErrorStyles : {}}
                  value={enteredText}
                  onChange={(e) => setEnteredText(e.target.value)}
                  onBlur={() => settextTouched(true)}
                  multiline
                  rows={4}
                />
                {textError && (
                  <Typography
                    sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
                  >
                    {textErrorMessage}
                  </Typography>
                )}
              </FormControl>
              <Stack direction="row" justifyContent="start" spacing={3} mt={5}>
              <Button
                variant="contained"
               startIcon={<SendIcon />}
                sx={buttonStyle}
                type={"submit"}
               
              >
               ارسال
              </Button>
              <Button
                variant="contained"
               startIcon={<DeleteIcon />}
                sx={buttonStyle}
                onClick={resetHandler}
               
              >
              پاک کردن
              </Button>
            
              </Stack>
             
    </form>
    </Container>
        </>
    )
}

export { CustomerResponse,
 responseInformation}