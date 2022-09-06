import { Button, Container, Typography } from '@mui/material';

// custome components
import { StyledTextField } from 'components';
import { FormGroup } from 'components/form/FormGroup';
import { FlexBox, DatePicker } from 'components/elements';
import { PageLayout } from 'components/Layout/PageLayout';

export const CreateCustomerPage = () => {
  return (
    <>
      <PageLayout title="Add a new Customer">
        <form>
          <FormGroup title="Personal Details">
            <FlexBox gap={1}>
              <StyledTextField label="First name" fullWidth={false} />
              <StyledTextField label="Last name" fullWidth={false} />
            </FlexBox>
            <FlexBox>
              <StyledTextField
                label="Email"
                placeholder="Enter personal email"
                fullWidth={false}
              />
              <DatePicker />
            </FlexBox>
          </FormGroup>
          <FormGroup title="Address">
            <StyledTextField label="Address line 1" />
            <StyledTextField label="Address line 2" required={false} />
            <FlexBox>
              <StyledTextField label="City" />
              <StyledTextField label="State" />
              <StyledTextField label="Pin" />
            </FlexBox>
          </FormGroup>
          <Button variant="contained">Create Customer</Button>
        </form>
      </PageLayout>
    </>
  );
};
