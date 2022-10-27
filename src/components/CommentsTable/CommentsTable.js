import React, { useEffect, useState,useMemo } from "react";
import {recordsCommends} from "../Data/Data"
import {
  DataGrid,
  getGridNumericOperators

} from '@mui/x-data-grid';
import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
Box,
  Link,
} from "@mui/material";


import { useQuery } from "@tanstack/react-query";
import CustomToolbar from "../CustomToolbar/CustomToolbar"



function CommentsTable() {

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
  const columnsComments = [
    { field: "id", headerName: "ID", width: 70, type: "number"},
    {
      field: "postID",
      headerName: "Post ID",
      width: 150,
      renderCell: (record) => {
        console.log(record?.row);
        return (
          <a
            href={`/api/posts/${record?.row?.postID}`}
            target="_blank"
            rel="noreferrer"
          >
            {record.row.postID}
          </a>
        );
      },
    },
    { field: "caption", headerName: "Comment", width:250 , sortable: true/false},
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (record) => (
        <Button
          id={record.id}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
          // startIcon={<DeleteIcon />}
          variant="contained"
          color="error"
          size="small"
          onClick={() => {
            setDeletedCommentId(() => record.row.postID);
            console.log("Comment record", record.row.postID);
            handleOpen();
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
const DialogData={
  question:"آیا از حذف این کامنت اطمینان دارید ؟",
  description:"برای تایید و حذف کامنت ,دکمه پاک کردن را فشار دهید",
  confrim:"پاک کردن",
  close:"لغو"
}

  

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
        rows={recordsCommends}
        columns={columnsComments }
        disableColumnMenu
        disableColumnSelector
       
        pageSize={pageSize}
        rowsPerPageOptions={[10, 20, 50]}
        disableSelectionOnClick
       
        sx={{
          overflowX: "hidden",
          height:"700px"
        }}
        components={{
          Toolbar: CustomToolbar,
        }}
        rowsPerPageOptions={[10]}
      />
      
    </div>
  );
}

export default CommentsTable;
