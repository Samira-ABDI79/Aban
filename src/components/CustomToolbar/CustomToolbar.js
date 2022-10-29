import React from "react";

import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';


function CustomToolbar() {
    return (
      <GridToolbarContainer >
       
        <GridToolbarFilterButton />
       
      </GridToolbarContainer>
    );
  }

  export default CustomToolbar;