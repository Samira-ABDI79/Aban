export const inputStyle={
    '& .MuiOutlinedInput-root': {
      borderRadius: '5px',
      height: 50,
     
      border: '0.5px solid #cccde2 !important',


      ':hover': {
      
      border: '1px solid #4a42d1',

       
      },
      ':focus-within': { border: '0.5px solid #4a42d1 !important' }
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
      ':hover': {
        border: '1px solid #4a42d1 !important',
        boxShadow: 'none'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    }
}

export const ErrorStyle={
    color: "#f03637",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily:"Times New Roman"
}
export const buttonStyle={ mt: 1, mb: 2 , py:2,backgroundColor:"#4a42d1",color:"#fff",
"&:hover": {
  backgroundColor:"#4a42d1",
  opacity: "0.9",
},
borderRadius: '5px',
}