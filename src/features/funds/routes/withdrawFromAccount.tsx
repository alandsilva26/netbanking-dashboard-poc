import { useState } from 'react';
import { Chip, Button } from '@mui/material';

import { FlexBox } from 'components/elements';
import { FormGroup } from 'components/form';
import { PageLayout } from 'components/Layout';
import { StyledTextField } from 'components/mui/styled';

export const WithdrawFromAccount = () => {
  const [amount, setAmount] = useState<number>();

  const changeAmount = (amount: number): void => {
    setAmount(amount);
  };

  const quickDeposit = async (amount: number): Promise<void> => {
    changeAmount(amount);
  };

  return (
    <PageLayout title="Withdraw Funds">
      <FormGroup title="Account Details">
        <StyledTextField label="Account No" />
      </FormGroup>

      <FormGroup title="Withdraw money form account">
        <StyledTextField
          type="number"
          label="Amount"
          placeholder="Enter amount to withdraw"
          value={amount}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            changeAmount(Number());
          }}
        />
        <FlexBox mt={1} gap={1}>
          <Chip
            variant="outlined"
            label="Rs. 1,000"
            onClick={() => {
              quickDeposit(1000);
            }}
          />
          <Chip
            variant="outlined"
            label="Rs. 5,000"
            onClick={() => {
              quickDeposit(5000);
            }}
          />
          <Chip
            variant="outlined"
            label="Rs. 10,000"
            onClick={() => {
              quickDeposit(10000);
            }}
          />
          <Chip
            variant="outlined"
            label="Rs. 50,000"
            onClick={() => {
              quickDeposit(50000);
            }}
          />
        </FlexBox>
      </FormGroup>
      <Button color="error" variant="contained">
        Withdraw
      </Button>
    </PageLayout>
  );
};
