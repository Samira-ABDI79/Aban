import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { DataGrid, getGridNumericOperators } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function RatingInputValue(props) {
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
      <Rating
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

RatingInputValue.propTypes = {
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

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

 function CustomInputComponent() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const columns = React.useMemo(
    () =>
      data.columns.map((col) => {
        if (col.field === 'rating') {
          return {
            ...col,
            filterOperators: getGridNumericOperators()
              .filter((operator) => operator.value !== 'isAnyOf')
              .map((operator) => ({
                ...operator,
                InputComponent: operator.InputComponent
                  ? RatingInputValue
                  : undefined,
              })),
          };
        }
        return col;
      }),
    [data.columns],
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data.rows}
        columns={columns}
        initialState={{
          ...data.initialState,
          filter: {
            filterModel: {
              items: [
                { id: 1, columnField: 'rating', value: '3.5', operatorValue: '>=' },
              ],
            },
          },
        }}
      />
    </div>
  );
}
export default CustomInputComponent;