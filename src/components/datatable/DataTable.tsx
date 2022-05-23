import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

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
          <div className="viewButton">

            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              View
            </Link>
          </div>
          <div className="deleteButton">Delete</div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User

        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>

      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColums)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className='datagrid'
      />
    </div>
  );
};

export default DataTable;
