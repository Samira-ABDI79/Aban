import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CustomToolbar from "../CustomToolbar/CustomToolbar"

import React, { useEffect, useState } from "react";

function UsersTable() {
  const [pageSize, setPageSize] = useState(10);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const columns = [
    { field: "id", headerName: "ID", width: 70, type: "number" },
    { field: "userID", headerName: "User ID", width: 150 },
    { field: "username", headerName: "User name", width: 200 },
    { field: "joinDate", headerName: "Joined In", width: 200 },
    { field: "lastSeen", headerName: "Last Seen ", width: 200 },
    { field: "userType", headerName: "User Type", width: 100 },
  ];





  
  const records =  [
     {
      id: 1,
      userID: 11,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 2,
      userID: 22,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 3,
      userID: 33,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 4,
      userID: 44,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 5,
      userID: 55,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 6,
      userID: 66,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },

    {
      id: 7,
      userID: 77,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 8,
      userID: 88,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
    {
      id: 9,
      userID: 99,
      username: "samira",
      joinDate: "joind Data",
      lastSeen: "jgbh",
      userType: "UserType",
    },
  ]
  return (
    <div style={{ height: "90vh",padding:"20px"}}>
      <TextField
        sx={{ marginLeft: "200px" }}
        label="search by User name:"
        onChange={(e) => {
          setSearchTerm(() => e.target.value);
          // handleSearch(searchTerm);
        }}
      />
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
    
      rowsPerPageOptions={[10]}
    />
    
  </div>
  );
}

export default UsersTable;
