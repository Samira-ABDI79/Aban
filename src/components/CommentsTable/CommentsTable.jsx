import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import useAuth from "hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const baseURL = process.env.REACT_APP_FANLY_API_URL;

function CommentsTable() {
  const { auth } = useAuth();
  const [comments, setComments] = useState([]);
  const [deletedCommentId, setDeletedCommentId] = useState("");
  const [open, setOpen] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth?.accessToken}`,
      },
      body: JSON.stringify({ status: 2 }),
    };
    fetch(`${baseURL}/api/posts/comments/${id}/status`, requestOptions)
      .then((response) => response.json())
      .catch((err) => console.log(err.message));

    // const response = await axios
    //   .put(`${baseURL}/api/posts/comments/${id}/status`, {
    //     status: 1,
    //     headers: {
    //       Authorization: `Bearer ${auth?.accessToken}`,
    //     },
    //   })
    //   .catch((err) => console.log(err));
    // return response;
  };

  const fetchComments = async (page) => {
    axios
      .get(
        `${baseURL}/api/posts/manage/comments?SkipCount=0&MaxResultCount=100`,
        {
          headers: {
            accept: "text-plain",
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      )

      .then(({ data }) => {
        setComments(() => data.items);
        setPageSize(data?.items?.length);
        if (data?.items?.length) setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const records = comments.map((comment, index) => {
    // console.log("each comment", comment);
    return { id: index + 1, postID: comment.id, caption: comment.text };
  });
  // console.log("all records", records);
  const columns = [
    { field: "id", headerName: "ID", width: 40, type: "number" },
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
    { field: "caption", headerName: "Comment", width: 350 },
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
          startIcon={<DeleteIcon />}
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

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"آیا از حذف این کامنت اطمینان دارید؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            برای تایید و حذف کامنت ,دکمه پاک کردن را فشار دهید.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleDelete(deletedCommentId);
              handleClose();
            }}
          >
            پاک کردن
          </Button>
          <Button onClick={handleClose} autoFocus>
            لغو
          </Button>
        </DialogActions>
      </Dialog>
      <DataGrid
        rows={records}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 20, 50]}
        disableSelectionOnClick
        loading={isLoading}
        pagination
      />
    </div>
  );
}

export default CommentsTable;
