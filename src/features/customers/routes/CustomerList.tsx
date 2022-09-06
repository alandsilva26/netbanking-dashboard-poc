import { PageLayout } from 'components/Layout/PageLayout';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const CustomerList = () => {
  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID' },
    { field: 'customerId', headerName: 'Customer Id' },
    { field: 'firstName', headerName: 'First name', minWidth: 200 },
    { field: 'lastName', headerName: 'Last name', minWidth: 200 },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created Date',
      type: 'date',
    },
  ];

  const rows = [
    {
      id: 0,
      customerId: '1234567890',
      firstName: 'Alan',
      lastName: 'Dsilva',
      createdAt: '24/01/2001',
    },
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon.show@gmail.com' },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      age: 42,
      email: 'testingloginemail@gmail.com',
      createdAt: '20/01/2001',
    },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    {
      id: 5,
      lastName: 'testinglonglastname',
      firstName: 'Daenerys',
      age: null,
    },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <PageLayout title="Customers">
      <div style={{ height: '500px', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          density="compact"
          pageSize={100}
          disableDensitySelector={false}
          // autoPageSize={true}
          // rowsPerPageOptions={[10, 20, 30]}
          rowsPerPageOptions={[100]}
          checkboxSelection={false}
        />
      </div>
    </PageLayout>
  );
};
