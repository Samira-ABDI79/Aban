import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {useQuery} from 'react-query'
import axios from 'axios'
import React, { useEffect, useState } from "react";
import CustomToolbar from "../CustomToolbar/CustomToolbar"

function PostsTable() {
  const [posts, setPosts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await axios.get(
  //       `/api/posts?SkipCount=0&MaxResultCount=1000`
  //     );
  //     console.log("Posts :", response.data);
  //     setPosts(response.data.items);
  //     setPageSize(response?.data?.items?.length);
  //     setIsLoading(false);
  //     return await response.data;
  //   };

  //   fetchPosts();
  // }, []);
  // console.log(posts);
  // const records = posts.map((post, index) => {
  //   return {
  //     id: index + 101,
  //     publisherID: post.postUser.displayName,
  //     postID: post.id,
  //     publishStatus: post.title,
  //     viewCounts: post.rate,
  //     commentsCounts: post.totalComments,
  //   };
  // });

  const columns = [
    { field: "id", headerName: "ID", width: 70, type: "number" },
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

    { field: "commentsCounts", headerName: "Comments", width: 150 },
    { field: "actions", headerName: "Actions", width: 200 },
  ];

  const records=[
    {id:1,
publisherID:11,
postID:111,
publishStatus:"publishStatus",
likesCounts:"likesCounts",
commentsCounts:"commentsCounts",
actions:"actions",},
{id:2,
  publisherID:1010,
  postID:101010,
  publishStatus:"publishStatus",
  likesCounts:"likesCounts",
  commentsCounts:"commentsCounts",
  actions:"actions",},
{id:3,
 publisherID:11,
    postID:111,
    publishStatus:"publishStatus",
    likesCounts:"likesCounts",
    commentsCounts:"commentsCounts",
    actions:"actions",},
{id:4,
  publisherID:22,
  postID:222,
  publishStatus:"publishStatus",
  likesCounts:"likesCounts",
  commentsCounts:"commentsCounts",
  actions:"actions",},
{id:5,
    publisherID:33,
    postID:333,
    publishStatus:"publishStatus",
    likesCounts:"likesCounts",
    commentsCounts:"commentsCounts",
    actions:"actions",},
{id:6,
      publisherID:33,
      postID:333,
      publishStatus:"publishStatus",
      likesCounts:"likesCounts",
      commentsCounts:"commentsCounts",
      actions:"actions",}, {id:7,
        publisherID:33,
        postID:333,
        publishStatus:"publishStatus",
        likesCounts:"likesCounts",
        commentsCounts:"commentsCounts",
        actions:"actions",}, {id:8,
          publisherID:33,
          postID:333,
          publishStatus:"publishStatus",
          likesCounts:"likesCounts",
          commentsCounts:"commentsCounts",
          actions:"actions",}, {id:9,
            publisherID:33,
            postID:333,
            publishStatus:"publishStatus",
            likesCounts:"likesCounts",
            commentsCounts:"commentsCounts",
            actions:"actions",}
            , {id:10,
              publisherID:33,
              postID:333,
              publishStatus:"publishStatus",
              likesCounts:"likesCounts",
              commentsCounts:"commentsCounts",
              actions:"actions",}
, {id:11,
                publisherID:33,
                postID:333,
                publishStatus:"publishStatus",
                likesCounts:"likesCounts",
                commentsCounts:"commentsCounts",
                actions:"actions",},

]

// ***********************************************
async function fetchPosts(){
  const {data} = await axios.get( `/api/posts?SkipCount=0&MaxResultCount=1000`)    
  return data
}
const {data, error, isError, isLoading } = useQuery('posts', fetchPosts)
if(isError){
  return console.log(error.message)
}
// *****************************************
return (
  <div style={{ height: "90vh",padding:"20px"}}>
     
    <DataGrid
      rows={records}
      columns={columns }
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
      localeText={{
        toolbarFilters:"جستجو"
      }}
      rowsPerPageOptions={[10]}
    />
    
  </div>
);
}

export default PostsTable;
