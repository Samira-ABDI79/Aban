import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "api/axios";
import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";

function UsersTable() {
  const { auth } = useAuth();
  const [pageSize, setPageSize] = useState(10);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("users table auth", auth?.accessToken);
      const { data } = await axios.get(
        `/api/users/manage/search?SkipCount=0&MaxResultCount=100`,
        {
          headers: {
            accept: "text-plain",
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      );
      console.log("fetch users", data);
      setUsers(data?.items);
      data?.items ? setIsLoading(false) : setIsLoading(true);
    };
    fetchUsers();
  }, []);
  const handleSearch = async (term) => {
    const searchedUser = await axios.get(
      `/api/users/manage/search?UserId=${term}`,
      {
        headers: {
          accept: "text-plain",
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      }
    );
    console.log(searchedUser);
  };

  const records = users.map((user, index) => {
    return {
      id: index + 101,
      userID: user.profileUserId,
      username: user.displayName,
      joinDate: user.registerDate,
      lastSeen: user.lastLogin || "",
      userType: user.roles[0].item2 || "User",
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 40, type: "number" },
    { field: "userID", headerName: "User ID", width: 150 },
    { field: "username", headerName: "User name", width: 200 },
    { field: "joinDate", headerName: "Joined In", width: 200 },
    { field: "lastSeen", headerName: "Last Seen ", width: 200 },
    { field: "userType", headerName: "User Type", width: 100 },
  ];

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
      }}
    >
      <TextField
        sx={{ marginLeft: "200px" }}
        label="search by User name:"
        onChange={(e) => {
          setSearchTerm(() => e.target.value);
          handleSearch(searchTerm);
        }}
      />
      <DataGrid
        initialState={{
          pagination: {
            page: 1,
          },
        }}
        columns={columns}
        rows={records}
        rowsPerPageOptions={[10, 20, 50]}
        pageSize={pageSize - 1}
        loading={isLoading}
      />
    </div>
  );
}

export default UsersTable;
