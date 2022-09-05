import { Button, Container, TextField, Typography } from '@mui/material';

// custome components
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
              <TextField label="First name" fullWidth={false} />
              <TextField label="Last name" fullWidth={false} />
            </FlexBox>
            <FlexBox>
              <TextField
                label="Email"
                placeholder="Enter personal email"
                fullWidth={false}
              />
              <DatePicker />
            </FlexBox>
          </FormGroup>
          <FormGroup title="Address">
            <TextField label="Address line 1" />
            <TextField label="Address line 2" required={false} />
            <FlexBox>
              <TextField label="City" />
              <TextField label="State" />
              <TextField label="Pin" />
            </FlexBox>
          </FormGroup>
          <Button variant="contained">Create Customer</Button>
        </form>
      </PageLayout>
    </>
  );
};
