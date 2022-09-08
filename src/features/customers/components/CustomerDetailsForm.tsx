import { Button } from '@mui/material';

// custom
import { FormGroup } from 'components/form/FormGroup';
import { FlexBox, DatePicker } from 'components/elements';
import { StyledTextField } from 'components/mui/styled';

export const CustomerDetailsForm = () => {
  return (
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
        <StyledTextField label="Address line 1" fullWidth={true} />
        <StyledTextField
          label="Address line 2"
          fullWidth={true}
          required={false}
        />
        <FlexBox>
          <StyledTextField label="City" />
          <StyledTextField label="State" />
          <StyledTextField label="Pin" />
        </FlexBox>
      </FormGroup>
      <Button variant="contained">Create Customer</Button>
    </form>
  );
};
