import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { userColumns, userRows } from '../../datatablesource';

import './datatable.scss';

const DataTable = () => {
  // Opts are here 'cause they're the same for all the lists that use this data table
  const actionColums: GridColDef[] = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        // columns={[...userColumns, ...actionColums]}
        columns={userColumns.concat(actionColums)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
