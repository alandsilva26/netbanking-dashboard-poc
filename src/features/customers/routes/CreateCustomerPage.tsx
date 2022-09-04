import { Box, Container, TextField, Typography } from '@mui/material';
import { FlexBox } from 'components/elements/FlexBox/FlexBox';

export const CreateCustomerPage = () => {
  return (
    <>
      <Container>
        <Typography variant="h5" gutterBottom>
          Add new Customer
        </Typography>
        <form>
          <Box sx={{ width: '50%' }}>
            <FlexBox gap={1}>
              <TextField label="First name" />
              <TextField label="Last name" />
            </FlexBox>

            <TextField label="Email" />
          </Box>
          <TextField label="Address" />
        </form>
      </Container>
    </>
  );
};
