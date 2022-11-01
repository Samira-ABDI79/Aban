
import { DataGrid, getGridNumericOperators } from '@mui/x-data-grid';

import PropTypes from 'prop-types';

import CustomToolbar from "../CustomToolbar/CustomToolbar"
import {Userrecords} from "../Data/Data"
import React, {  useState } from "react";


import {
 
  TextField,
Box,
  
} from "@mui/material";

function SearchInputValue(props) {




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

SearchInputValue.propTypes = {
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
// Function Start


function UsersTable() {

  const [pageSize, setPageSize] = useState(10);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
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

  const columns = React.useMemo(
    () =>
      data.columns.map((col) => {
        if (col.field === 'search') {
          return {
            ...col,
            filterOperators: getGridNumericOperators()
              .filter((operator) => operator.value !== 'isAnyOf')
              .map((operator) => ({
                ...operator,
                InputComponent: operator.InputComponent
                  ? SearchInputValue
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
    
    <DataGrid
      rows={Userrecords}
      columns={columns }
      disableColumnMenu
      disableColumnSelector
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
      localeText={{
        toolbarFilters:"جستجو"
      }}
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
