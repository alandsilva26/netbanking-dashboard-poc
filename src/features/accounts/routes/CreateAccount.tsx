import { useState, useEffect, useDeferredValue } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from '@mui/material';

// custom
import { FlexBox } from 'components/elements';
import { FormGroup } from 'components/form';
import { ManagerPageLayout, PageLayout } from 'components/Layout';
import { StyledTextField } from 'components/mui/styled';
import HorizontalLinearStepper from '../components/StepperDemo';

export const CreateAccount = () => {
  const [customerId, setCustomerId] = useState<string>('');

  const deferredCustomerId = useDeferredValue(customerId);

  // useEffect(() => {
  //   console.log(deferredCustomerId);
  // }, [deferredCustomerId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerId(event.target.value);
  };

  return (
    <ManagerPageLayout title="Create new Bank Account">
      <form>
        <FormGroup
          title="Account Details"
          description="Select a customer using Customer ID"
        >
          <FlexBox sx={{ flexWrap: 'wrap' }}>
            <StyledTextField
              label="Customer Id"
              placeholder="Enter customer id"
              value={customerId}
              onChange={handleChange}
              fullWidth={false}
            />
            <FlexBox>
              <StyledTextField
                label="Name"
                value="Alan Dsilva"
                disabled={true}
                fullWidth={false}
                required={false}
              />
              <StyledTextField
                label="Email"
                value="Alan.Dsilva@email.com"
                disabled={true}
                fullWidth={false}
                required={false}
              />
            </FlexBox>
          </FlexBox>
        </FormGroup>
        <FormGroup title="Account Details">
          <FlexBox>
            <Box>
              <Typography
                sx={{
                  marginBottom: '0.1em',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: 'rgba(0, 0, 0, 0.6)',
                  lineHeight: '1.4375em',
                }}
              >
                Account Type
              </Typography>
              <ToggleButtonGroup size="small" color="primary">
                <ToggleButton value="savings" selected>
                  Savings
                </ToggleButton>
                <ToggleButton value="current">Current</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <StyledTextField
              label="Company Name"
              placeholder="Company name for current account"
              required={false}
              fullWidth
            />
          </FlexBox>
        </FormGroup>
        <FormGroup
          title="Additional Accounts"
          description="Add another customer account to make this a joint Account."
        >
          <FlexBox sx={{ flexWrap: 'wrap' }}>
            <StyledTextField
              label="Customer Id"
              placeholder="Enter customer id"
              value={customerId}
              onChange={handleChange}
              fullWidth={false}
            />
            <FlexBox>
              <StyledTextField
                label="Name"
                value="Alan Dsilva"
                disabled={true}
                fullWidth={false}
                required={false}
              />
              <StyledTextField
                label="Email"
                value="Alan.Dsilva@email.com"
                disabled={true}
                fullWidth={false}
                required={false}
              />
            </FlexBox>
          </FlexBox>
        </FormGroup>
        <FormGroup title="Initial Balance">
          <StyledTextField
            label="Amount"
            type="number"
            defaultValue={0}
            placeholder="Enter initial deposit amount"
            fullWidth={false}
            helperText="Maximum amount of 100,000"
            InputProps={{
              notched: false,
              startAdornment: (
                <InputAdornment position="start">Rs.</InputAdornment>
              ),
            }}
          />
        </FormGroup>
        <Button variant="contained">Create Account</Button>
      </form>
    </ManagerPageLayout>
  );
};
