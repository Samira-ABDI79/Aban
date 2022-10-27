import PropTypes from 'prop-types';
import CustomToolbar from "../CustomToolbar/CustomToolbar"

import {Userrecords} from "../Data/Data"

import { DataGrid, getGridNumericOperators } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import React, { useEffect, useState,useMemo } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
Box,
  Link,
} from "@mui/material";

function RatingInputValue(props) {
  const { item, applyValue, focusElementRef } = props;

  const ratingRef = React.useRef(null);
  React.useImperativeHandle(focusElementRef, () => ({
    focus: () => {
      ratingRef.current
        .querySelector(`input[value="${Number(item.value) || ''}"]`)
        .focus();
    },
  }));

  const handleFilterChange = (event, newValue) => {
    applyValue({ ...item, value: newValue });
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        pl: '20px',
      }}
    >
      <TextField
        name="custom-rating-filter-operator"
        placeholder="Filter value"
        value={Number(item.value)}
        onChange={handleFilterChange}
        precision={0.5}
        ref={ratingRef}
      />
    </Box>
  );
}

RatingInputValue.propTypes = {
  applyValue: PropTypes.func.isRequired,
  focusElementRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  item: PropTypes.shape({
   
    columnField: PropTypes.string.isRequired,
  
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   
    operatorValue: PropTypes.string,
   
    value: PropTypes.any,
  }).isRequired,
};

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

 function CustomInputComponent() {
  const [comments, setComments] = useState([]);
  const [deletedCommentId, setDeletedCommentId] = useState("");
  const [open, setOpen] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleDelete = ()=>{

  }
  const data={
    "columns":[
      { field: "id", headerName: "ID", width: 70, type: "number" },
      { field: "userID", headerName: "User ID", width: 150 },
      { field: "username", headerName: "User name", width: 200 },
      { field: "joinDate", headerName: "Joined In", width: 200 },
      { field: "lastSeen", headerName: "Last Seen ", width: 200 },
      { field: "userType", headerName: "User Type", width: 100 },
    ]
  
  }
const DialogData={
  question:"آیا از حذف این کامنت اطمینان دارید ؟",
  description:"برای تایید و حذف کامنت ,دکمه پاک کردن را فشار دهید",
  confrim:"پاک کردن",
  close:"لغو"
}
  const columns = React.useMemo(
    () =>
      data.columns.map((col) => {
        if (col.field === 'username') {
          return {
            ...col,
            filterOperators: getGridNumericOperators()
              .filter((operator) => operator.value !== 'isAnyOf')
              .map((operator) => ({
                ...operator,
                InputComponent: operator.InputComponent
                  ? RatingInputValue
                  : undefined,
              })),
          };
        }
        return col;
      }),
    [data.columns],
  );

  return (
    <div style={{ height: "90vh",padding:"20px"}}>

       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="right">
          {DialogData.question}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align="right">
          {DialogData.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{marginRight:"10px"}}>
         
          <Button onClick={handleClose} autoFocus variant="outlined">
           {DialogData.close}
          </Button>
          <Button variant="contained"
            onClick={() => {
              handleDelete(deletedCommentId);
              handleClose();
            }}
          >
            {DialogData.confrim}
          </Button>
        </DialogActions>
      </Dialog>
      <DataGrid
        rows={Userrecords}
        columns={columns}
        initialState={{
          ...data.initialState,
          filter: {
            filterModel: {
              items: [
                { id: 1, columnField: 'username', value: 'samira', },
              
              ],
            },
          },
        }}
        disableColumnMenu
        disableColumnSelector
       
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        disableSelectionOnClick
       
        sx={{
          overflowX: "hidden",
          height:"700px"
        }}
       
        rowsPerPageOptions={[10]}
      
      />
    </div>
  );
}
export default CustomInputComponent;