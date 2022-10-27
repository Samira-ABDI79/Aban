import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  
    Link,
  } from "@mui/material";
//   import React, { useEffect, useState } from "react";

  
//   const [comments, setComments] = useState([]);
//   const [deletedCommentId, setDeletedCommentId] = useState("");
//   const [open, setOpen] = useState(false);
//   const [pageSize, setPageSize] = useState(10);
//   const [rowCount, setRowCount] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [page, setPage] = useState(2);
//   const handleClose = () => setOpen(false);
//   const handleOpen = () => setOpen(true);
//   const handleDelete = ()=>{

//   }

export const recordsCommends=[{
    id:"1263",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"1",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"2",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"3",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"4",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"5",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"6",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"7",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"8",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  {
    id:"9",
  postID:"25",
  caption:"ssss",
  action:"jklmkml ",
  },
  {
    id:"10",
  postID:"25",
  caption:"jhkjy",
  action:"jklmkml ",
  },
  
  ]

//   export const columnsComments = [
//     { field: "id", headerName: "ID", width: 70, type: "number"},
//     {
//       field: "postID",
//       headerName: "Post ID",
//       width: 150,
//       renderCell: (record) => {
//         console.log(record?.row);
//         return (
//           <a
//             href={`/api/posts/${record?.row?.postID}`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             {record.row.postID}
//           </a>
//         );
//       },
//     },
//     { field: "caption", headerName: "Comment", width:250 , sortable: true/false},
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       sortable: false,
//       filterable: false,
//       hideable: false,
//       renderCell: (record) => (
//         <Button
//           id={record.id}
//           sx={{
//             display: "flex",
//             alignItems: "start",
//             justifyContent: "center",
//           }}
//           // startIcon={<DeleteIcon />}
//           variant="contained"
//           color="error"
//           size="small"
//           onClick={() => {
//             setDeletedCommentId(() => record.row.postID);
//             console.log("Comment record", record.row.postID);
//             handleOpen();
//           }}
//         >
//           Delete
//         </Button>
//       ),
//     },
//   ];