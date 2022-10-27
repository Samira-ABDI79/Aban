import React, { useEffect, useState } from "react";

import {
  DataGrid,
  GridToolbarContainer,
 
  GridToolbarFilterButton,


} from '@mui/x-data-grid';
import Button from '@mui/material/Button'

function CustomToolbar() {
    return (
      <GridToolbarContainer >
       
        <GridToolbarFilterButton  aria-valuetext="جستجو" defaultValue="jkdh" aria-valuemax="جستجو"/>
       
      </GridToolbarContainer>
    );
  }

  export default CustomToolbar;