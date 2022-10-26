import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "api/axios";
import React, { useEffect, useState } from "react";

function PostsTable() {
  const [posts, setPosts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `/api/posts?SkipCount=0&MaxResultCount=1000`
      );
      console.log("Posts :", response.data);
      setPosts(response.data.items);
      setPageSize(response?.data?.items?.length);
      setIsLoading(false);
      return await response.data;
    };

    fetchPosts();
  }, []);
  console.log(posts);
  const records = posts.map((post, index) => {
    return {
      id: index + 101,
      publisherID: post.postUser.displayName,
      postID: post.id,
      publishStatus: post.title,
      viewCounts: post.rate,
      commentsCounts: post.totalComments,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 50, type: "number" },
    {
      field: "publisherID",
      headerName: "Publisher",
      width: 150,
    },
    {
      field: "postID",
      headerName: "Post",
      width: 150,
    },
    {
      field: "publishStatus",
      headerName: "Status",
      width: 150,
      type: "text",
    },
    { field: "veiwCounts", headerName: "Views", width: 100, type: "number" },
    { field: "likesCounts", headerName: "Likes", width: 150 },

    { field: "commentsCounts", headerName: "Comments", width: 90 },
    { field: "actions", headerName: "Actions", width: 200 },
  ];
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          columns={columns}
          rows={records}
          loading={isLoading}
          rowsPerPageOptions={[10, 20, 50]}
        />
      )}
    </div>
  );
}

export default PostsTable;
