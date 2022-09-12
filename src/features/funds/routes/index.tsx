import { DepositToAccount } from './depositToAccount';
import { WithdrawFromAccount } from './withdrawFromAccount';

export const fundRoutes = [
  {
    path: '/funds/deposit',
    element: <DepositToAccount />,
  },
  {
    path: '/funds/withdraw',
    element: <WithdrawFromAccount />,
  },
];
