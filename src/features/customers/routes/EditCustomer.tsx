import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

// custom
import { FormGroup } from '@/components/form';
import { PageLayout } from '@/components/Layout';
import { StyledTextField } from '@/components/mui/styled';
import { CustomerDetailsForm } from '../components';

export const EditCustomer = () => {
  const [searchParams] = useSearchParams();

  const customerId = searchParams.get('customerId');

  return (
    <PageLayout title="Edit Customer">
      <Box>
        <FormGroup title="Select a customer">
          <StyledTextField label="Customer id" defaultValue={customerId} />
        </FormGroup>
      </Box>
      <CustomerDetailsForm />
    </PageLayout>
  );
};
