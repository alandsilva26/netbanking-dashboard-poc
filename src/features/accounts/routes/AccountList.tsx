import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { PageLayout } from 'components/Layout/PageLayout';
import { IAccount } from '../types';

export const AccountList = () => {
  const accountsDummyData: IAccount[] = [
    {
      accountNumber: 'lkadjflk',
      customerId: 'ldkjaflaj',
      type: 'savings',
      currentBalance: 123123,
      createdAt: 'lkdjafklj',
    },
  ];

  return (
    <PageLayout title="Accounts">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accountsDummyData.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{row.accountNumber}</TableCell>
              </TableRow>
            );
          })}
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </PageLayout>
  );
};
